import React, { useState } from 'react';
import styles from './CourseCreationModal.module.css';
import { X } from 'lucide-react';

const CourseCreationModal = ({ isOpen, onClose, onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [duration, setDuration] = useState('');
    const [students, setStudents] = useState(0);
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [learningObjectives, setLearningObjectives] = useState(['']);
    const [modules, setModules] = useState([{ title: '', duration: '', lessons: [{ title: '', duration: '', videoUrl: '', description: '' }] }]);
    const [instructor, setInstructor] = useState('');

    const handleAddObjective = () => setLearningObjectives([...learningObjectives, '']);
    const handleObjectiveChange = (index, value) => {
        const newObjectives = [...learningObjectives];
        newObjectives[index] = value;
        setLearningObjectives(newObjectives);
    };

    const handleAddModule = () => setModules([...modules, { title: '', duration: '', lessons: [{ title: '', duration: '', videoUrl: '', description: '' }] }]);
    const handleModuleChange = (index, field, value) => {
        const newModules = [...modules];
        newModules[index][field] = value;
        setModules(newModules);
    };

    const handleAddLesson = (moduleIndex) => {
        const newModules = [...modules];
        newModules[moduleIndex].lessons.push({ title: '', duration: '', videoUrl: '', description: '' });
        setModules(newModules);
    };
    const handleLessonChange = (moduleIndex, lessonIndex, field, value) => {
        const newModules = [...modules];
        newModules[moduleIndex].lessons[lessonIndex][field] = value;
        setModules(newModules);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourse = {
            title, description, category, image, duration, students, rating, price, learningObjectives, modules, instructor
        };
        onCreate(newCourse);
        onClose();
    };

    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.active : ''}`}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2>Create a New Course</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Title</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Description</label>
                            <textarea
                                className={styles.textarea}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Category</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Image URL</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Duration</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Students</label>
                            <input
                                className={styles.input}
                                type="number"
                                value={students}
                                onChange={(e) => setStudents(Number(e.target.value))}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Rating</label>
                            <input
                                className={styles.input}
                                type="number"
                                value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                required
                                min="0"
                                max="5"
                                step="0.1"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Price</label>
                            <input
                                className={styles.input}
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                required
                            />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Learning Objectives</label>
                            <div className={styles.objectivesContainer}>
                                {learningObjectives.map((objective, index) => (
                                    <input
                                        key={index}
                                        className={styles.input}
                                        type="text"
                                        value={objective}
                                        onChange={(e) => handleObjectiveChange(index, e.target.value)}
                                        placeholder={`Objective ${index + 1}`}
                                        required
                                    />
                                ))}
                                <button
                                    type="button"
                                    className={styles.addButton}
                                    onClick={handleAddObjective}
                                >
                                    + Add Objective
                                </button>
                            </div>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Modules</label>
                            <div className={styles.modulesContainer}>
                                {modules.map((module, moduleIndex) => (
                                    <div key={moduleIndex} className={styles.moduleCard}>
                                        <h3>Module {moduleIndex + 1}</h3>
                                        <div className={styles.formGrid}>
                                            <input
                                                className={styles.input}
                                                type="text"
                                                value={module.title}
                                                onChange={(e) => handleModuleChange(moduleIndex, 'title', e.target.value)}
                                                placeholder="Module Title"
                                                required
                                            />
                                            <input
                                                className={styles.input}
                                                type="text"
                                                value={module.duration}
                                                onChange={(e) => handleModuleChange(moduleIndex, 'duration', e.target.value)}
                                                placeholder="Module Duration"
                                                required
                                            />
                                        </div>

                                        <div className={styles.lessonsContainer}>
                                            {module.lessons.map((lesson, lessonIndex) => (
                                                <div key={lessonIndex} className={styles.lessonCard}>
                                                    <h4>Lesson {lessonIndex + 1}</h4>
                                                    <div className={styles.formGrid}>
                                                        <input
                                                            className={styles.input}
                                                            type="text"
                                                            value={lesson.title}
                                                            onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'title', e.target.value)}
                                                            placeholder="Lesson Title"
                                                            required
                                                        />
                                                        <input
                                                            className={styles.input}
                                                            type="text"
                                                            value={lesson.duration}
                                                            onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'duration', e.target.value)}
                                                            placeholder="Lesson Duration"
                                                            required
                                                        />
                                                        <input
                                                            className={styles.input}
                                                            type="text"
                                                            value={lesson.videoUrl}
                                                            onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'videoUrl', e.target.value)}
                                                            placeholder="Video URL"
                                                            required
                                                        />
                                                        <textarea
                                                            className={styles.textarea}
                                                            value={lesson.description}
                                                            onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'description', e.target.value)}
                                                            placeholder="Lesson Description"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                className={styles.addButton}
                                                onClick={() => handleAddLesson(moduleIndex)}
                                            >
                                                + Add Lesson
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className={styles.addButton}
                                    onClick={handleAddModule}
                                >
                                    + Add Module
                                </button>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Instructor ID</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={instructor}
                                onChange={(e) => setInstructor(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formActions}>
                        <button type="submit" className={styles.submitButton}>
                            Create Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CourseCreationModal;