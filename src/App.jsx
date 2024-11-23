import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/public/HomePage';
import BlogsPage from './pages/public/BlogsPage';
import BlogPage from './pages/public/BlogPage';
import RegisterPage from './pages/public/RegisterPage';
import LoginPage from './pages/public/LoginPage';
import AboutPage from './pages/public/AboutPage';
import CategoryPage from './pages/public/CategoryPage';
import NotFoundPage from './pages/public/NotFoundPage';

import MyBlogsPage from './pages/protected/users/myBlogsPage/MyBlogsPage';
import UserAccountPage from './pages/protected/users/accountPage/AccountPage';
import DashboardPage from './pages/protected/admin/dashboardPage/DashboardPage';
import AdminAccountPage from './pages/protected/admin/accountPage/AccountPage';
import CategoryAdminPage from './pages/protected/admin/catigoriesPage/CatigoriesPage';
import BlogsAdminPage from './pages/protected/admin/blogsPage/BlogsPage';
import UsersPage from './pages/protected/admin/usersPage/UsersPage';

import UserLayout from './components/layout/userLayout/UserLayout';
import AdminLayout from './components/layout/adminLayout/AdminLayout';

import useAuth from './hooks/useAuth';
``
const App = () => {
    const { user } = useAuth();
    const role = user?.role || null;

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="blogs" element={<BlogsPage />} />
                    <Route path="blog/:blogId" element={<BlogPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="category" element={<CategoryPage />} />

                    {role === 'user' && (
                        <>
                            <Route path="myblogs" element={<MyBlogsPage />} />
                            <Route path="user-account" element={<UserAccountPage />} />
                        </>
                    )}
                </Route>

                {role === 'admin' && (
                    <Route element={<AdminLayout />}>
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="admin-account" element={<AdminAccountPage />} />
                        <Route path="admin-category" element={<CategoryAdminPage />} />
                        <Route path="admin-blogs" element={<BlogsAdminPage />} />
                        <Route path="admin-users" element={<UsersPage />} />
                    </Route>
                )}

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;