import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Award, Users, BookOpen, Mail, Linkedin, Twitter } from 'lucide-react';
import { courses } from '../../data/courses';
import CourseCard from '../../components/common/CourseCard/CourseCard';
import './InstructorDetails.css';

const instructors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    expertise: 'Web Development',
    rating: 4.9,
    students: 15000,
    courses: 12,
    bio: 'Expert in full-stack development with 10+ years of industry experience.',
    about: `Dr. Sarah Johnson is a renowned web development expert with a Ph.D. in Computer Science from Stanford University. With over a decade of industry experience, she has worked with major tech companies and led numerous successful projects.

Her teaching methodology combines theoretical knowledge with practical, real-world applications, helping students build strong foundations in web development.`,
    achievements: [
      'Ph.D. in Computer Science from Stanford University',
      'Former Senior Developer at Google',
      'Published author of "Modern Web Development"',
      'Speaker at major tech conferences'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'sarah.johnson@example.com'
    }
  }
];

const InstructorDetailPage = () => {
  const { instructorId } = useParams();
  const instructor = instructors.find(i => i.id === instructorId);

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  // Mock instructor's courses
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
                  <span className="stat-value">{instructor.students.toLocaleString()}</span>
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
              <a href={instructor.socialLinks.linkedin} className="social-btn">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href={instructor.socialLinks.twitter} className="social-btn">
                <Twitter size={20} />
                Twitter
              </a>
              <a href={`mailto:${instructor.socialLinks.email}`} className="social-btn">
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
            {instructor.achievements.map((achievement, index) => (
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
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetailPage;