import './App.css';
import theme from '@/theme/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/ui/SharedLayout';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage/CatalogPage'));
const CarDetailsPage = lazy(
  () => import('@/pages/CarDetailsPage/CarDetailsPage')
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </SharedLayout>
    </ThemeProvider>
  );
}

export default App;
