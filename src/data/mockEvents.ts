import placeholder from '../assets/react.svg';
import { EventItem } from '../ui/components/EventCard/EventsList';

export const mockEvents: EventItem[] = [
  {
    id: '1',
    title: 'Event 1',
    organisation: 'Org A',
    description: 'Desc 1',
    imageSrc: placeholder,
    passed: false,
  },
  {
    id: '2',
    title: 'Event 2',
    organisation: 'Org B',
    description: 'Desc 2',
    imageSrc: placeholder,
    passed: false,
  },
  {
    id: '3',
    title: 'Event 3',
    organisation: 'Org C',
    description: 'Desc 3',
    imageSrc: placeholder,
    passed: true,
  },
  {
    id: '4',
    title: 'Event 4',
    organisation: 'Org D',
    description: 'Desc 4',
    imageSrc: placeholder,
    passed: true,
  },
  {
    id: '5',
    title: 'Event 5',
    organisation: 'Org E',
    description: 'Desc 5',
    imageSrc: placeholder,
    passed: true,
  },
  {
    id: '6',
    title: 'Event 6',
    organisation: 'Org F',
    description: 'Desc 6',
    imageSrc: placeholder,
    passed: true,
  },
];

// Интерфейс организации
export interface OrganisationItem {
  id: string;
  name: string;
  imageSrc: string;
}

// Моковые данные организаций
export const mockOrganisations: OrganisationItem[] = [
  { id: 'org-a', name: 'Org A', imageSrc: placeholder },
  { id: 'org-b', name: 'Org B', imageSrc: placeholder },
  { id: 'org-c', name: 'Org C', imageSrc: placeholder },
  { id: 'org-d', name: 'Org D', imageSrc: placeholder },
  { id: 'org-e', name: 'Org E', imageSrc: placeholder },
  { id: 'org-f', name: 'Org F', imageSrc: placeholder },
];
