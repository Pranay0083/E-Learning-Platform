import api from './api';

export const createPaymentSession = () => api.post('/payments/create-session');
