import React, { useState } from 'react';
import './Modal.css';

const EditUserModal = ({ isOpen, onClose, user, onSave }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        role: user.role,
        image: user.image,
        expertise: user.expertise,
        students: user.students,
        courses: user.courses,
        bio: user.bio,
        about: user.about,
        achievements: "",        //    {* user.achievements.join(', ') ||  *}  
        socialLinks: {
            linkedin: "",              // user.socialLinks.linkedin || null,
            twitter: ""                   // user.socialLinks.twitter || null
        },
        email: user.email
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSocialLinkChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            socialLinks: {
                ...prevData.socialLinks,
                [name]: value
            }
        }));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Edit User</h2>
                <form>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label>Role:</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="admin">Admin</option>
                    </select>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <label>Expertise:</label>
                    <input
                        type="text"
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleChange}
                    />
                    <label>Students:</label>
                    <input
                        type="number"
                        name="students"
                        value={formData.students}
                        onChange={handleChange}
                    />
                    <label>Courses:</label>
                    <input
                        type="number"
                        name="courses"
                        value={formData.courses}
                        onChange={handleChange}
                    />
                    <label>Bio:</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                    />
                    <label>About:</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                    />
                    <label>Achievements (comma-separated):</label>
                    <input
                        type="text"
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleChange}
                    />
                    <label>LinkedIn:</label>
                    <input
                        type="text"
                        name="linkedin"
                        value={formData.socialLinks.linkedin}
                        onChange={handleSocialLinkChange}
                    />
                    <label>Twitter:</label>
                    <input
                        type="text"
                        name="twitter"
                        value={formData.socialLinks.twitter}
                        onChange={handleSocialLinkChange}
                    />
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="modal-buttons">
                        <button type="button" onClick={handleSave}>
                            Save
                        </button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;
