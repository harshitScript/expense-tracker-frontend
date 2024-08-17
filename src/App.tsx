import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom"
import Layout1 from './components/layout/Layout1';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Toaster } from 'react-hot-toast';
import useAuth from './hooks/useAuth';
import DashboardPage from './pages/DashboardPage';
import { useAppDispatch } from './store/hook';
import { getUserByIdThunk } from './store/thunk/users.thunk';
import AdminPanelPage from './pages/AdminPanelPage';
import CategoryPage from './pages/CategoryPage';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { localStorage.userId && dispatch(getUserByIdThunk(localStorage.userId)) }, [])
  return <>
    <Layout1>
      <Routes>
        <Route path='/' element={<Navigate to={isAuthenticated ? 'dashboard' : '/login'} replace />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/dashboard' element={isAuthenticated ? <DashboardPage /> : <Navigate to='/' replace />} />
        <Route path='/admin-panel' element={isAuthenticated ? <AdminPanelPage /> : <Navigate to='/' replace />} />
        <Route path='/admin-panel/categories' element={isAuthenticated ? <CategoryPage /> : <Navigate to='/' replace />} />
      </Routes>
    </Layout1>
    <Toaster position='top-center' />
  </>
}
export default App;
