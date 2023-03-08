import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/main');
  }, [navigate]);

  return (
    <Routes>
      <Route path='/' element={<Outlet />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/reservations' element={<BasketPage />} />
      <Route path='*' element={<Navigate replace to='/main' />} />
    </Routes>
  );
}

export default App;
