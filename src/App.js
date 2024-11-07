import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import CoursesPage from './pages/CoursePage/CoursePage';
import CourseDetailPage from './pages/CourseDetails/CourseDetails';
import EnrollmentsPage from './pages/EnrollmentPage/EnrollmentsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import InstructorPage from './pages/InstructorPage/InstructorPage';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import InstructorDetails from './pages/InstructorDetails/InstructorDetails';
import "./index.css";
import CourseVideoPage from './pages/CourseVideos/CourseVideos';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/course/:courseId/video" element={<CourseVideoPage />} />
          <Route path="/profile" element={ <ProfilePage /> } />
          <Route path="/enrollments" element={<EnrollmentsPage />} />
          <Route path="/instructors" element={<InstructorPage />} />
          <Route path="/instructor/:instructorId" element={<InstructorDetails />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
