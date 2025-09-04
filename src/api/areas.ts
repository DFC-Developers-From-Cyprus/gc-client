import { api } from './base';

// список загрязненных участков
export const fetchAreas = async () => {
  const res = await api.get('/api/env/polluted-areas/');
  return res.data;
};