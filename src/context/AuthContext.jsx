import { useState } from 'react';
import { message } from 'antd';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { AuthContext } from '../hooks/useAuth';
import request from '../services/request';
import { TOKEN_KEY, USER_KEY } from '../utils/constants';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem(USER_KEY);
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [loading, setLoading] = useState(false);

    const navigateByRole = (role, navigate) => {
        if (role === 'user') {
            navigate('/myblogs');
        } else if (role === 'admin') {
            navigate('/dashboard');
        }
    };

    const login = async (values, navigate) => {
        try {
            setLoading(true);
            const { data: { token } } = await request.post('auth/login', values);

            Cookies.set(TOKEN_KEY, token);
            request.defaults.headers.common.Authorization = `Bearer ${token}`;

            const { data: user } = await request.get('auth/me');
            localStorage.setItem(USER_KEY, JSON.stringify(user));
            setUser(user);
            message.success('Login successful');

            navigateByRole(user.role, navigate);
        } catch (error) {
            message.error(error.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    const register = async (values, navigate) => {
        if (values.password === values.confirm_password) {
            try {
                setLoading(true);
                const { data: { token } } = await request.post('auth/register', values);

                Cookies.set(TOKEN_KEY, token);
                request.defaults.headers.common.Authorization = `Bearer ${token}`;

                const { data: user } = await request.get('auth/me');
                localStorage.setItem(USER_KEY, JSON.stringify(user));
                setUser(user);
                message.success('Registration successful');

                navigateByRole(user.role, navigate);
            } catch (error) {
                message.error(error.response?.data?.message || 'Registration failed');
            } finally {
                setLoading(false);
            }
        } else {
            message.error('Confirmation password does not match');
        }
    };

    const state = { user, loading, login, register, setUser };

    return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;