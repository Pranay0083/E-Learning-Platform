import api from './api';

export const getEnrollments = () => api.get('/enrollments');
export const createEnrollment = (courseId) => api.post(`/enrollments/${courseId}`);
export const deleteEnrollment = (courseId) => api.delete(`/enrollments/${courseId}`);
