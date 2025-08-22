import { api } from './base';

// изменение данных пользователя
export const updateProfile = async (uuid: string, data: { email: string; username: string }) => {
  console.log(data);
  const res = await api.put(`api/auth/profile-update/${uuid}/`, data);
  return res.data;
}