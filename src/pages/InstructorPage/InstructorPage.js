import React from 'react';
import { Search, Star, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './InstructorPage.css';

const instructors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    expertise: 'Web Development',
    rating: 4.9,
    students: 15000,
    courses: 12,
    bio: 'Expert in full-stack development with 10+ years of industry experience.'
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    expertise: 'Data Science',
    rating: 4.8,
    students: 12000,
    courses: 8,
    bio: 'Leading researcher in AI and machine learning with PhD from MIT.'
  },
  {
    id: '3',
    name: 'Emma Williams',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    expertise: 'UX Design',
    rating: 4.9,
    students: 10000,
    courses: 15,
    bio: 'Former design lead at Google with expertise in user-centered design.'
  }
];

const InstructorPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedExpertise, setSelectedExpertise] = React.useState('all');

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedExpertise === 'all' || instructor.expertise === selectedExpertise)
  );

  return (
    <div className="instructor-page">
      <div className="page-header">
        <h1>Meet Our Expert Instructors</h1>
        <p>Learn from industry leaders with proven expertise</p>
      </div>

      <div className="search-filters">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search instructors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="expertise-filters">
          <button
            className={`filter-btn ${selectedExpertise === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedExpertise('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${selectedExpertise === 'Web Development' ? 'active' : ''}`}
            onClick={() => setSelectedExpertise('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`filter-btn ${selectedExpertise === 'Data Science' ? 'active' : ''}`}
            onClick={() => setSelectedExpertise('Data Science')}
          >
            Data Science
          </button>
          <button
            className={`filter-btn ${selectedExpertise === 'UX Design' ? 'active' : ''}`}
            onClick={() => setSelectedExpertise('UX Design')}
          >
            UX Design
          </button>
        </div>
      </div>

      <div className="instructors-grid">
        {filteredInstructors.map((instructor) => (
          <div
            key={instructor.id}
            className="instructor-card"
            onClick={() => navigate(`/instructor/${instructor.id}`)}
          >
            <div className="instructor-image">
              <img src={instructor.image} alt={instructor.name} />
            </div>
            <div className="instructor-content">
              <h3>{instructor.name}</h3>
              <span className="expertise">{instructor.expertise}</span>
              <p>{instructor.bio}</p>
              <div className="instructor-stats">
                <div className="stat">
                  <Star size={16} />
                  <span>{instructor.rating}</span>
                </div>
                <div className="stat">
                  <Users size={16} />
                  <span>{instructor.students.toLocaleString()} students</span>
                </div>
                <div className="stat">
                  <Award size={16} />
                  <span>{instructor.courses} courses</span>
                </div>
              </div>
              <button className="view-profile">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;