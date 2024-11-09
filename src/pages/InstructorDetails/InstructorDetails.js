import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Award, Users, BookOpen, Mail, Linkedin, Twitter } from 'lucide-react';
import CourseCard from '../../components/common/CourseCard/CourseCard';
import './InstructorDetails.css';
import { getCourses, getInstructor } from '../../services/api';

const InstructorDetailPage = () => {
  const { instructorId } = useParams();
  console.log(instructorId)
  const [instructor, setInstructor] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchInstructor = async () => {
      setLoading(true);
      try {
        const response = await getInstructor(instructorId);
        setInstructor(response.data.instructor);
        setCourses(response.data.courses);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchInstructor();
  }, [instructorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading instructor: {error.message}</div>;
  }

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  // Get instructor's courses
  const instructorCourses = courses.slice(0, 4);

  return (
    <div className="instructor-detail-page">
      <div className="instructor-hero">
        <div className="instructor-profile">
          <img src={instructor.image} alt={instructor.name} />
          <div className="profile-content">
            <h1>{instructor.name}</h1>
            <span className="expertise">{instructor.expertise}</span>
            <div className="instructor-stats">
              <div className="stat">
                <Star size={20} />
                <div className="stat-info">
                  <span className="stat-value">{instructor.rating}</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
              <div className="stat">
                <Users size={20} />
                <div className="stat-info">
                  <span className="stat-value">{instructor.students}</span>
                  <span className="stat-label">Students</span>
                </div>
              </div>
              <div className="stat">
                <BookOpen size={20} />
                <div className="stat-info">
                  <span className="stat-value">{instructor.courses}</span>
                  <span className="stat-label">Courses</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href={instructor.socialLinks?.linkedin} className="social-btn">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href={instructor.socialLinks?.twitter} className="social-btn">
                <Twitter size={20} />
                Twitter
              </a>
              <a href={`mailto:${instructor.socialLinks?.email}`} className="social-btn">
                <Mail size={20} />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="instructor-content">
        <div className="about-section">
          <h2>About</h2>
          <p>{instructor.about}</p>
        </div>

        <div className="achievements-section">
          <h2>Achievements</h2>
          <div className="achievements-grid">
            {instructor.achievements?.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <Award size={24} />
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="courses-section">
          <h2>Courses by {instructor.name}</h2>
          <div className="courses-grid">
            {instructorCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetailPage;
