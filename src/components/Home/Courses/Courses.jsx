import React from "react";
import "./Courses.css";

const Courses = () => {
  return (
    <section className="popular-courses">
      <h2>Popular Courses</h2>
      <div className="courses-grid">
        {[1, 2, 3].map((course) => (
          <CourseCard key={course} courseNumber={course} />
        ))}
      </div>
    </section>
  );
};

const CourseCard = ({ courseNumber }) => {
  return (
    <div className="course-card">
      <img
        src={`https://images.unsplash.com/photo-151818${courseNumber}349211-3d45c6af78d9?auto=format&fit=crop&w=400&q=80`}
        alt={`Course ${courseNumber}`}
      />
      <div className="course-content">
        <span className="course-tag">Featured</span>
        <h3>Web Development Masterclass</h3>
        <p>Learn modern web development from scratch to advanced concepts.</p>
        <div className="course-meta">
          <span>8 weeks</span>
          <span>•</span>
          <span>Beginner</span>
          <span>•</span>
          <span>4.9 ⭐</span>
        </div>
        <button className="enroll-button">Enroll Now</button>
      </div>
    </div>
  );
};

export default Courses;
