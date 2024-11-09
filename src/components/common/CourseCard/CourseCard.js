import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
    
    return (
        <div className="course-card" onClick={() => navigate(`/courses/${course._id}`)}>
            <div className="course-image">
                <img src={course.image} alt={course.title} />
                <span className="course-category">{course.category}</span>
            </div>
            <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                    <div className="meta-item">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                    </div>
                    <div className="meta-item">
                        <Users size={16} />
                        <span>{course.students} students</span>
                    </div>
                    <div className="meta-item">
                        <Star size={16} />
                        <span>{course.rating}</span>
                    </div>
                </div>
                <div className="course-footer">
                    <span className="course-price">${course.price}</span>
                    <button className="enroll-button">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;