import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './layouts/Layout';
import { StartPage } from './pages/StartPage';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Стартовая страница без Header/Footer */}
        <Route path="/" element={<StartPage />} />

        {/* Все остальные страницы внутри Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="home" element={<HomePage />} />
                {/* здесь можно добавить другие защищённые маршруты */}
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
