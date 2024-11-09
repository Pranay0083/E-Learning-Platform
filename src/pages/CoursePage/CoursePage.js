import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import CourseCard from '../../components/common/CourseCard/CourseCard';
import CourseCreationModal from './CourseCreationModal/CourseCreationModal';
import './CoursePage.css';
import { createCourse, getCourses, getCurrentUser } from '../../services/api';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUserInstructor, setIsUserInstructor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      if (localStorage.getItem('authToken')) {
        try {
          const response = await getCurrentUser(localStorage.getItem('authToken'));
          if (response.data.role === 'teacher') {
            setIsUserInstructor(true);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    checkUserRole();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await getCourses();
        console.log(response.data)
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'all' || course.category === selectedCategory)
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateCourse = async (newCourse) => {
    const response = await createCourse(newCourse, localStorage.getItem('authToken'))
    console.log('New Course:', response.data);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading courses: {error.message}</div>;
  }

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

        {isUserInstructor && <button className='createCourseButton' onClick={openModal}>Create Course</button>}

        <div className="category-filters">
          <button
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={`category-btn ${selectedCategory === 'Web Development' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`category-btn ${selectedCategory === 'Machine Learning' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Machine Learning')}
          >
            Machine Learning
          </button>
          <button
            className={`category-btn ${selectedCategory === 'Data Science' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Data Science')}
          >
            Data Science
          </button>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      {isModalOpen && (
        <CourseCreationModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onCreate={handleCreateCourse}
        />
      )}
    </div>
  );
};

export default CoursesPage;
