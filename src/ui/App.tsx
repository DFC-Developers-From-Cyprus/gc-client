import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './layouts/Layout';
import { StartPage } from './pages/StartPage';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPage } from './pages/ForgotPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { DashboardPage } from './pages/DashboardPage';
import { EventPage } from './pages/EventPage';
import { OrganizationPage } from './pages/OrganizationPage';

import { CreateReportPage } from '@/ui/pages/CreateReportPage';
import { FavouritePage } from '@/ui/pages/FavouritePage';
import { FormStatusPage } from '@/ui/pages/FormStatusPage';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Стартовая страница без Header/Footer */}
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ForgotPage />} />

        {/* Все остальные страницы внутри Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/favourite" element={<FavouritePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/event/:uuid" element={<EventPage />} />
                <Route path="/organization/:uuid" element={<OrganizationPage />} />
                {/* здесь можно добавить другие защищённые маршруты */}
                <Route path="/create_report" element={<CreateReportPage />} />
                <Route path="/status" element={<FormStatusPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
