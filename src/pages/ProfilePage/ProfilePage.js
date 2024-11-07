import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Book, Award, Settings, Camera, Edit2 } from 'lucide-react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data (in real app, this would come from auth context/API)
  const user = {
    type: 'student', // or 'instructor'
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate learner focused on web development and AI. Currently pursuing advanced certifications in full-stack development.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    enrolledCourses: 5,
    completedCourses: 3,
    certificates: 2,
    interests: ['Web Development', 'Machine Learning', 'UI/UX Design'],
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-avatar">
            <img src={user.avatar} alt={user.name} />
            <button className="camera-btn">
              <Camera size={20} />
            </button>
          </div>
        </div>
        <div className="profile-info">
          <div className="info-header">
            <h1>{user.name}</h1>
            <button
              className="edit-profile-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit2 size={16} />
              Edit Profile
            </button>
          </div>
          <div className="basic-info">
            <div className="info-item">
              <Mail size={16} />
              <span>{user.email}</span>
            </div>
            <div className="info-item">
              <Phone size={16} />
              <span>{user.phone}</span>
            </div>
            <div className="info-item">
              <MapPin size={16} />
              <span>{user.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={20} />
            Profile
          </button>
          <button
            className={`tab-btn ${activeTab === 'learning' ? 'active' : ''}`}
            onClick={() => setActiveTab('learning')}
          >
            <Book size={20} />
            Learning
          </button>
          <button
            className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <Award size={20} />
            Achievements
          </button>
          <button
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} />
            Settings
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'profile' && (
            <div className="profile-section">
              <div className="section-card">
                <h2>About Me</h2>
                {isEditing ? (
                  <textarea
                    defaultValue={user.bio}
                    className="edit-bio"
                    rows={4}
                  />
                ) : (
                  <p>{user.bio}</p>
                )}
              </div>

              <div className="section-card">
                <h2>Interests</h2>
                <div className="interests-list">
                  {user.interests.map((interest, index) => (
                    <span key={index} className="interest-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="section-card">
                <h2>Social Links</h2>
                <div className="social-links">
                  {Object.entries(user.socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'learning' && (
            <div className="learning-section">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">{user.enrolledCourses}</div>
                  <div className="stat-label">Enrolled Courses</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{user.completedCourses}</div>
                  <div className="stat-label">Completed Courses</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{user.certificates}</div>
                  <div className="stat-label">Certificates Earned</div>
                </div>
              </div>
              {/* Add learning progress and history here */}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="achievements-section">
              {/* Add achievements and badges here */}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <div className="section-card">
                <h2>Account Settings</h2>
                <form className="settings-form">
                  <div className="form-group">
                    <label>Email Notifications</label>
                    <div className="toggle-switch">
                      <input type="checkbox" id="email-notifications" />
                      <label htmlFor="email-notifications"></label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Two-Factor Authentication</label>
                    <div className="toggle-switch">
                      <input type="checkbox" id="two-factor" />
                      <label htmlFor="two-factor"></label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Profile Visibility</label>
                    <select className="settings-select">
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="connections">Connections Only</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;