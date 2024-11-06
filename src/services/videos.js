import api from './api';

export const getCourseVideos = (courseId) => api.get(`/videos/${courseId}/videos`);
export const getVideo = (courseId, videoId) => api.get(`/videos/${courseId}/videos/${videoId}`);
export const createVideo = (courseId, videoData) => api.post(`/videos/${courseId}/videos`, videoData);
export const updateVideo = (courseId, videoId, videoData) => api.put(`/videos/${courseId}/videos/${videoId}`, videoData);
export const deleteVideo = (courseId, videoId) => api.delete(`/videos/${courseId}/videos/${videoId}`);

