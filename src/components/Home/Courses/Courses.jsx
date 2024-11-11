import React from "react";
import "./Courses.css";

const Courses = () => {
  const courseData = [
    {
      id: 1,
      title: "Web Development Masterclass",
      description: "Learn modern web development from scratch to advanced concepts.",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1518034349211-3d45c6af78d9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      description: "Become a data science expert with this comprehensive course.",
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1518034349211-3d45c6af78d9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Master the basics of machine learning and build intelligent systems.",
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1518034349211-3d45c6af78d9?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="popular-courses">
      <h2>Popular Courses</h2>
      <div className="courses-grid">
        {courseData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.imageUrl} alt={course.title} />
      <div className="course-content">
        <span className="course-tag">Featured</span>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-meta">
          <span>{course.duration}</span>
          <span>•</span>
          <span>{course.level}</span>
          <span>•</span>
          <span>{course.rating} ⭐</span>
        </div>
        <button className="enroll-button">Enroll Now</button>
      </div>
    </div>
  );
};

export default Courses;