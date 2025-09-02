import { api } from './base';

// список организаций
export const fetchOrganizations = async () => {
  const res = await api.get('/api/auth/organizations/');
  return res.data;
};