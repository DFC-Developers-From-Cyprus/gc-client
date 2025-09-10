import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './layouts/Layout';
import { StartPage } from './pages/StartPage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPage } from './pages/ForgotPage';

import { ProtectedRoute } from '@/ui/routes/ProtectedRoute';
import { protectedRoutes, publicRoutes } from '@/ui/routes/routesConfig';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Стартовые / публичные страницы без Layout */}
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ForgotPage />} />

        {/* Все остальные страницы внутри Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                {/* Приватные */}
                {protectedRoutes.map(({ path, element }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<ProtectedRoute>{element}</ProtectedRoute>}
                  />
                ))}

                {/* Публичные */}
                {publicRoutes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}