import { api } from './base';

// список организаций
export const fetchOrganizations = async () => {
  const res = await api.get('/api/auth/organizations/');
  return res.data;
};

export async function getOrganizationById(uuid: string) {
  const res = await api.get(`/api/auth/organization-detail/${uuid}/`);
  return res.data;
}
