import { api } from './base';

// вход пользователя
export const login = async (data: { username: string; password: string }) => {
  const res = await api.post('/api/auth/login', data);
  return res.data;
};

// регистрация пользователя
export const register = async (data: {
  email: string;
  username: string;
  password: string;
  role: string;
}) => {
  const res = await api.post('/api/auth/registration/', data);
  return res.data;
};

// восстановление пароля
export const forgotPassword = async (data: { email: string; password: string }) => {
  const res = await api.post('/api/auth/forgot-password', data);
  return res.data;
};
