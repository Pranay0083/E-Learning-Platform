import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import CoursesPage from './pages/CoursePage/CoursePage';
import CourseDetailPage from './pages/CourseDetails/CourseDetails';
import EnrollmentsPage from './pages/EnrollmentsPage';
import ProfilePage from './pages/ProfilePage';
import InstructorPage from './pages/InstructorPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
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
          <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/enrollments" 
                element={
                  <ProtectedRoute>
                    <EnrollmentsPage />
                  </ProtectedRoute>
                } 
              />
          <Route path="/instructors" element={<InstructorPage />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
