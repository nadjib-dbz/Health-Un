import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import HealthInfoPage from './pages/HealthInfoPage';
import HealthPlanPage from './pages/HealthPlanPage';
import MarketplacePage from './pages/MarketplacePage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="health-info" element={<HealthInfoPage />} />
          <Route path="health-plan" element={<HealthPlanPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;