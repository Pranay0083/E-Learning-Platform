import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Camera, Edit2, Mail, Phone, MapPin, User, Book, Award, Settings, LogOut, Trash2 } from 'react-feather';
import { deleteUser, getCurrentUser, logout, updateUser } from '../../services/api';
import EditUserModal from './EditModal/Modal'
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [updatedData, setUpdatedData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await getCurrentUser(localStorage.getItem("authToken"));
        setUpdatedData(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
        console.log(err);
      }
    };
    fetchUserData();
  }, [id]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await updateUser(id, updatedData, localStorage.getItem("authToken"));
      setUpdatedData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
      console.log(err);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleLogout = async () => {
    await logout();
    localStorage.clear();
    navigate('/')
  }

  const handleDeleteAccount = async () => {
     await deleteUser(localStorage.getItem("userID"), localStorage.getItem("authToken"));
     localStorage.clear();
      navigate('/');
      window.location.reload()
  }
  
  const handleCloseModal = () => { 
    setIsEditModalOpen(false); 
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-avatar">
            <img src={updatedData.avatar} alt={updatedData.name} />
            <button className="camera-btn">
              <Camera size={20} />
            </button>
          </div>
        </div>
        <div className="profile-info">
          <div className="info-header">
            <h1>{updatedData.name}</h1>
            <button
              className="edit-profile-btn"
              onClick={setIsEditModalOpen}
            >
              <Edit2 size={16} />
               Edit Profile
            </button>
            <button
              className="edit-profile-btn"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              logout
            </button>
            <button
              className="edit-profile-btn"
              onClick={openModal}
              style={{ backgroundColor: "red" }}
            >
              <Trash2 size={16} />
              Delete Account
            </button>
          </div>
          <div className="basic-info">
                <div className="info-item">
                  <Mail size={16} />
                  <span>{updatedData.email}</span>
                </div>
                <div className="info-item">
                  <Phone size={16} />
                  <span>{updatedData.phone}</span>
                </div>
                <div className="info-item">
                  <MapPin size={16} />
                  <span>{updatedData.location}</span>
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
                  <p>{updatedData.bio}</p>
              </div>

              <div className="section-card">
                <h2>Interests</h2>
                <div className="interests-list">
                  {updatedData.interests?.map((interest, index) => (
                    <span key={index} className="interest-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="section-card">
                <h2>Social Links</h2>
                <div className="social-links">
                  {Object.entries(updatedData.socialLinks || {}).map(([platform, url]) => (
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
                  <div className="stat-value">{updatedData.enrolledCourses}</div>
                  <div className="stat-label">Enrolled Courses</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{updatedData.completedCourses}</div>
                  <div className="stat-label">Completed Courses</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{updatedData.certificates}</div>
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
                    <select
                      className="settings-select"
                      name="visibility"
                      value={updatedData.visibility || 'public'}
                      onChange={handleInputChange}
                    >
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

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to this Account?</p>
            <button onClick={handleDeleteAccount}>Confirm</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
      {isEditModalOpen && ( 
        <EditUserModal 
        isOpen={isEditModalOpen} 
        onClose={handleCloseModal} 
        user={updatedData} 
        onSave={handleSave} /> 
        )}
    </div>
  );
};

export default ProfilePage;