import { api } from './base';

interface PollutedAreaPayload {
  project_uuid: string;
  type_of_pollution: string;
  pollution_level: number;
  description: string;
  location: string;
}

export const createPolllutedArea = (data: PollutedAreaPayload) => {
  return api.post('api/env/polluted-area/', data);
};
