import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom"
import Layout1 from './components/layout/Layout1';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App: React.FC = () => {
  return <>
    <Layout1>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </Layout1>
  </>
}

export default App;
