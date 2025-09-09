import { api } from './base';

// список проектов
export const fetchOrganizations = async () => {
  const res = await api.get('/api/env/projects/');
  return res.data;
};
