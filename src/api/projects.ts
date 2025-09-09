import { api } from './base';

export enum ProjectStatusEnum {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  ON_HOLD = 'on_hold',
}

export interface Project {
  uuid: string;
  title: string;
  description: string;
  created_by: string;
  status: ProjectStatusEnum;
  location: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
}

// список проектов
export const fetchProjects = async () => {
  const res = await api.get('/api/env/projects/');
  return res.data;
};
