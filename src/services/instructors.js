import api from './api';

export const getAllInstructors = () => api.get('/instructors');
export const getInstructor = (id) => api.get(`/instructors/${id}`);
