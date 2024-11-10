import React from "react";
import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Unlock Your Potential with Think-Box</h1>
        <p>
          Transform your learning journey with interactive courses, expert
          instructors, and a supportive community.
        </p>
        <div className="hero-buttons">
          <button className="primary-button">
            Get Started <ArrowRight size={20} />
          </button>
          <button className="secondary-button">
            Watch Demo <Play size={20} />
          </button>
        </div>
        <Stats />
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          alt="Students learning"
        />
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-item">
        <span className="stat-number">50K+</span>
        <span className="stat-label">Active Students</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">200+</span>
        <span className="stat-label">Expert Instructors</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">1000+</span>
        <span className="stat-label">Courses</span>
      </div>
    </div>
  );
};

export default Hero;
