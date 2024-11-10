import React from 'react';
import Hero from '../../components/Home/Hero/Hero';
import Features from '../../components/Home/Features/Features';
import Courses from '../../components/Home/Courses/Courses';
import CTA from '../../components/Home/CTA/CTA';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Courses />
      <CTA />
    </div>
  );
};

export default HomePage;


// import React from 'react';
// import { BookOpen, Brain, Trophy, Users, ArrowRight, Play } from 'lucide-react';
// import './HomePage.css';

// function HomePage() {
//   return (
//     <div className="home-page">
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Unlock Your Potential with Think-Box</h1>
//           <p>Transform your learning journey with interactive courses, expert instructors, and a supportive community.</p>
//           <div className="hero-buttons">
//             <button className="primary-button">Get Started <ArrowRight size={20} /></button>
//             <button className="secondary-button">Watch Demo <Play size={20} /></button>
//           </div>
//           <div className="stats">
//             <div className="stat-item">
//               <span className="stat-number">50K+</span>
//               <span className="stat-label">Active Students</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number">200+</span>
//               <span className="stat-label">Expert Instructors</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number">1000+</span>
//               <span className="stat-label">Courses</span>
//             </div>
//           </div>
//         </div>
//         <div className="hero-image">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//             alt="Students learning"
//           />
//         </div>
//       </section>

//       <section className="features-section">
//         <h2>Why Choose Think-Box?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <BookOpen size={32} />
//             <h3>Expert-Led Courses</h3>
//             <p>Learn from industry professionals with real-world experience.</p>
//           </div>
//           <div className="feature-card">
//             <Brain size={32} />
//             <h3>Adaptive Learning</h3>
//             <p>Personalized learning paths that adapt to your progress.</p>
//           </div>
//           <div className="feature-card">
//             <Users size={32} />
//             <h3>Community Support</h3>
//             <p>Join a global community of learners and educators.</p>
//           </div>
//           <div className="feature-card">
//             <Trophy size={32} />
//             <h3>Certification</h3>
//             <p>Earn recognized certificates upon course completion.</p>
//           </div>
//         </div>
//       </section>

//       <section className="popular-courses">
//         <h2>Popular Courses</h2>
//         <div className="courses-grid">
//           {[1, 2, 3].map((course) => (
//             <div key={course} className="course-card">
//               <img
//                 src={`https://images.unsplash.com/photo-151818${course}349211-3d45c6af78d9?auto=format&fit=crop&w=400&q=80`}
//                 alt={`Course ${course}`}
//               />
//               <div className="course-content">
//                 <span className="course-tag">Featured</span>
//                 <h3>Web Development Masterclass</h3>
//                 <p>Learn modern web development from scratch to advanced concepts.</p>
//                 <div className="course-meta">
//                   <span>8 weeks</span>
//                   <span>•</span>
//                   <span>Beginner</span>
//                   <span>•</span>
//                   <span>4.9 ⭐</span>
//                 </div>
//                 <button className="enroll-button">Enroll Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Ready to Start Your Learning Journey?</h2>
//           <p>Join thousands of learners who are already transforming their careers with Think-Box.</p>
//           <button className="primary-button">Start Learning Today <ArrowRight size={20} /></button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HomePage;