import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom"
import Layout1 from './components/layout/Layout1';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Toaster } from 'react-hot-toast';
import useAuth from './hooks/useAuth';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return <>
    <Layout1>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/dashboard' element={isAuthenticated ? <DashboardPage /> : <Navigate to='/' replace />} />
      </Routes>
    </Layout1>
    <Toaster position='top-center' />
  </>
}
export default App;
