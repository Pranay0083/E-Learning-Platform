import React from 'react';
import { Clock, Users, Star, PlayCircle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../../data/courses';
import './CourseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleStartCourse = () => {
    navigate(`/course/${courseId}/video`);
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
          <button className="enroll-button" onClick={handleStartCourse}>
            Start Learning Now
          </button>
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
            {course.learningObjectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>

        <div className="content-section">
          <h2>Course Content</h2>
          <div className="course-modules">
            {course.modules.map((module, index) => (
              <div key={index} className="module-card">
                <div className="module-header">
                  <h3>{module.title}</h3>
                  <span>{module.duration}</span>
                </div>
                <ul className="module-lessons">
                  {module.lessons.map((lesson, lessonIndex) => (
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
    </div>
  );
};

export default CourseDetails;