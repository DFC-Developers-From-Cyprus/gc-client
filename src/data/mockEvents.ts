import placeholder from '../assets/react.svg';
import { EventItem } from '../ui/components/EventCard/EventsList';

export const mockEvents: EventItem[] = [
  {
    id: '1',
    title: 'Event 1',
    text: 'text1',
    organisationId: 'org-a',
    description: 'Desc 1',
    imageSrc: placeholder,
    passed: false,
  },
  {
    id: '2',
    title: 'Event 2',
    text: 'text2',
    organisationId: 'org-b',
    description: 'Desc 2',
    imageSrc: placeholder,
    passed: false,
  },
  {
    id: '3',
    title: 'Event 3',
    text: 'text3',
    organisationId: 'org-c',
    description: 'Desc 3',
    imageSrc: placeholder,
    passed: true,
  },
  {
    id: '4',
    title: 'Event 4',
    text: 'text4',
    organisationId: 'org-c',
    description: 'Desc 4',
    imageSrc: placeholder,
    passed: true,
  },
  {
    id: '5',
    title: 'Event 5',
    text: 'text5',
    organisationId: 'org-b',
    description: 'Desc 5',
    imageSrc: placeholder,
    passed: true,
  },
  {
    id: '6',
    title: 'Event 6',
    text: 'text6',
    organisationId: 'org-a',
    description: 'Desc 6',
    imageSrc: placeholder,
    passed: true,
  },
];

// Интерфейс организации
export interface OrganisationItem {
  id: string;
  name: string;
  text: string;
  imageSrc: string;
}

// Моковые данные организаций
export const mockOrganisations: OrganisationItem[] = [
  { id: 'org-a', name: 'Org A', text: 'text', imageSrc: placeholder },
  { id: 'org-b', name: 'Org B', text: 'text', imageSrc: placeholder },
  { id: 'org-c', name: 'Org C', text: 'text', imageSrc: placeholder },
];
export type { EventItem };
