import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './layouts/Layout';
import { StartPage } from './pages/StartPage';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPage } from './pages/ForgotPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { DashboardPage } from './pages/DashboardPage';

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
                <Route path="/dashboard" element={<DashboardPage />} />
                {/* здесь можно добавить другие защищённые маршруты */}
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
