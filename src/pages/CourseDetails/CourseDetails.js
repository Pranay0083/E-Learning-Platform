import React, { useState, useEffect, useCallback } from 'react';
import { Clock, Users, Star, PlayCircle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import './CourseDetails.css';
import { deleteCourse, deleteEnrollments, enrollInCourse, getAllCourses, getEnrollments } from '../../services/api';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [canUpdateCourse, setCanUpdateCourse] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };


  // Check authentication
  const authToken = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userID");

  const fetchCourseDetails = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllCourses(courseId);
      setCourse(response.data);
      // Check if user is instructor after setting course
      if (response.data?.instructor?._id && userId === response.data.instructor._id) {
        setCanUpdateCourse(true);
      }
    } catch (err) {
      setError(err.message || 'Failed to load course details');
    } finally {
      setLoading(false);
    }
  }, [courseId, userId]);

  const fetchEnrollments = useCallback(async () => {
    if (!authToken) {
      setError('Authentication required');
      return;
    }

    setLoading(true);
    try {
      const response = await getEnrollments(authToken);
      setEnrolledCourses(response.data);
    } catch (err) {
      setError(err.message || 'Failed to load enrollments');
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  useEffect(() => {
    fetchCourseDetails();
  }, [fetchCourseDetails]);

  useEffect(() => {
    if (course) {
      fetchEnrollments();
    }
  }, [course, fetchEnrollments]);

  const handleEnroll = async () => {
    if (!authToken) {
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      await enrollInCourse(courseId, authToken);
      await fetchEnrollments();
      closeModal();
    } catch (err) {
      setError(err.message || 'Failed to enroll in course');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveEnrollment = async () => {
    if (!authToken) {
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      const response = await deleteEnrollments(authToken, courseId);
      if (response.status === 200) {
        await fetchEnrollments();
      }
    } catch (err) {
      setError(err.message || 'Failed to remove enrollment');
    } finally {
      setLoading(false);
    }
  };

  const handleStartCourse = () => {
    if (!authToken) {
      navigate('/login');
      return;
    }
    navigate(`/course/${courseId}/video`);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!authToken) {
    return (
      <div className="course-detail-page">
        <div className="error-message">
          Please log in to view course details
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    );
  }

  if (loading && !course) {
    return <div className="course-detail-page">Loading...</div>;
  }

  if (error) {
    return (
      <div className="course-detail-page">
        <div className="error-message">
          Error: {error}
          <button onClick={fetchCourseDetails}>Retry</button>
        </div>
      </div>
    );
  }

  if (!course) {
    return <div className="course-detail-page">Course not found</div>;
  }

  const enrolledCourseIds = enrolledCourses.map(enrollment => enrollment.course._id);
  const isEnrolled = enrolledCourseIds.includes(courseId);

  const handleDelete = async () => {
    try {

      const response = await deleteCourse(courseId, localStorage.getItem("authToken"));
      navigate('/courses'); // Redirect after deletion
    } catch (err) {
      console.log(err);
    }
    closeDeleteModal();
  };
  

  return (
    <div className="course-detail-page">
      <div className="course-hero">
        <div className="course-hero-content">
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
          <div className="course-meta">
            <div className="meta-item">
              <Clock size={20} />
              <span>{course.duration}</span>
            </div>
            <div className="meta-item">
              <Users size={20} />
              <span>{course.students} students</span>
            </div>
            <div className="meta-item">
              <Star size={20} />
              <span>{course.rating} rating</span>
            </div>
          </div>
          <button
            className="enroll-button"
            onClick={isEnrolled ? handleStartCourse : openModal}
            disabled={loading}
          >
            {isEnrolled ? 'Start Learning Now' : 'Enroll Now'}
          </button>
          {isEnrolled && (
            <button
              onClick={handleRemoveEnrollment}
              disabled={loading}
            >
              Remove Enrollment
            </button>
          )}
          {canUpdateCourse && (
            <>
              <button
                onClick={() => navigate(`/updatecourse/${courseId}`)}
                disabled={loading}
              >
                Update Course
              </button>
              <button onClick={openDeleteModal}>Delete Course</button>
            </>

          )}
        </div>
        <div className="course-preview">
          <img src={course.image} alt={course.title} />
          <button className="preview-button">
            <PlayCircle size={48} />
            <span>Watch Preview</span>
          </button>
        </div>
      </div>

      <div className="course-content">
        <div className="content-section">
          <h2>What you'll learn</h2>
          <ul className="learning-objectives">
            {course.learningObjectives?.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>

        <div className="content-section">
          <h2>Course Content</h2>
          <div className="course-modules">
            {course.modules?.map((module, index) => (
              <div key={index} className="module-card">
                <div className="module-header">
                  <h3>{module.title}</h3>
                  <span>{module.duration}</span>
                </div>
                <ul className="module-lessons">
                  {module.lessons?.map((lesson, lessonIndex) => (
                    <li key={lessonIndex}>
                      <PlayCircle size={16} />
                      <span>{lesson.title}</span>
                      <span>{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Enrollment</h2>
            <p>Are you sure you want to enroll in this course?</p>
            <div className="modal-buttons">
              <button
                onClick={handleEnroll}
                disabled={loading}
              >
                {loading ? 'Enrolling...' : 'Confirm'}
              </button>
              <button
                onClick={closeModal}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this course?</p>
            <button onClick={handleDelete}>Confirm</button>
            <button onClick={closeDeleteModal}>Cancel</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CourseDetails;