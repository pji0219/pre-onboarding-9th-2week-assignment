import { Navigate, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';

import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import { globalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Routes>
        <Route path='/' element={<Navigate replace to='/main' />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/reservations' element={<CartPage />} />
        <Route path='*' element={<Navigate replace to='/main' />} />
      </Routes>
    </>
  );
}

export default App;
