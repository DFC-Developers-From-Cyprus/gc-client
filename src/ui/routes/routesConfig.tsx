import { HomePage } from '@/ui/pages/HomePage';
import { ProfilePage } from '@/ui/pages/ProfilePage';
import { SettingsPage } from '@/ui/pages/SettingsPage';
import { FavouritePage } from '@/ui/pages/FavouritePage';
import { ProjectPage } from '@/ui/pages/ProjectPage';
import { CreateReportPage } from '@/ui/pages/CreateReportPage';
import { FormStatusPage } from '@/ui/pages/FormStatusPage';
import { DashboardPage } from '@/ui/pages/DashboardPage';
// import { EventPage } from '@/ui/pages/EventPage';
import { OrganizationPage } from '@/ui/pages/OrganizationPage';
import { LocationInfoPage } from '@/ui/pages/LocationInfoPage';

export const protectedRoutes = [
  { path: '/profile', element: <ProfilePage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '/favourite', element: <FavouritePage /> },
  { path: '/project/:uuid', element: <ProjectPage /> },
  { path: '/create_report', element: <CreateReportPage /> },
  { path: '/status', element: <FormStatusPage /> },
];

export const publicRoutes = [
  { path: '/home', element: <HomePage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  // { path: '/dashboard/event/:uuid', element: <EventPage /> },
  { path: '/location_info/:uuid', element: <LocationInfoPage /> },
  { path: '/organization/:uuid', element: <OrganizationPage /> },
];
