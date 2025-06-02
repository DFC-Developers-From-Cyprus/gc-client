import { api } from './base';

// вход пользователя
export const login = async (data: { email: string; password: string }) => {
  const res = await api.post('/auth/login', data);
  return res.data;
};

// регистрация пользователя
export const register = async (data: { email: string; password: string }) => {
  const res = await api.post('/auth/register', data);
  return res.data;
};

// восстановление пароля
export const forgotPassword = async (data: { email: string; password: string }) => {
  const res = await api.post('/auth/forgot-password', data);
  return res.data;
};
