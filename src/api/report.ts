import { api } from './base';

interface Report {
  title: string;
  description: string;
  created_by: string;
  status: string;
  location: string;
}

export const createReport = (data: Report) => {
  return api.post('/project/', data);
};
