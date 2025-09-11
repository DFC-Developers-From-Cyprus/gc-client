import { api } from './base';

export interface PollutedArea {
  uuid: string;
  project_uuid: string;
  type_of_pollution: string;
  pollution_level: number;
  description: string;
  location: string;
}

export type PollutedAreaPayload = Omit<PollutedArea, 'uuid'>;

// создать загрязненный участок
export const createPollutedArea = (data: PollutedAreaPayload) => {
  return api.post('api/env/polluted-area/', data);
};

// загрязенный участок по uuid
export async function getPollutedAreaById(uuid: string) {
  const res = await api.get(`api/env/polluted-area/${uuid}/`);
  return res.data;
}

// список загрязненных участков
export const fetchAreas = async (url = '/api/env/polluted-areas/') => {
  if (url.startsWith('http://')) {
    url = url.replace('http://', 'https://');
  }
  if (url.startsWith('https://greency.org')) {
    url = url.replace('https://greency.org', '');
  }

  const res = await api.get(url);
  return res.data;
};
