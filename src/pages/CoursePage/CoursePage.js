import React from 'react';
import { Search } from 'lucide-react';
import CourseCard from '../../components/common/CourseCard/CourseCard';
import { courses } from '../../data/courses';
import './CoursePage.css';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'all' || course.category === selectedCategory)
  );

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Explore Our Courses</h1>
        <p>Discover the perfect course to advance your skills</p>
      </div>

      <div className="courses-filters">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-filters">
          <button
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={`category-btn ${selectedCategory === 'development' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('development')}
          >
            Development
          </button>
          <button
            className={`category-btn ${selectedCategory === 'design' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('design')}
          >
            Design
          </button>
          <button
            className={`category-btn ${selectedCategory === 'business' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('business')}
          >
            Business
          </button>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;