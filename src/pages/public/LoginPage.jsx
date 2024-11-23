import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import useAuth from '../../hooks/useAuth';

function LoginPage() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    login(data, navigate);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <div className="relative">
            <UserOutlined className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <LockOutlined className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-400 text-black py-2 px-4 rounded-md hover:bg-amber-300 transition duration-200 flex items-center justify-center"
        >
          {loading ? <LoadingOutlined className="mr-2" /> : ""}
          {loading ? "...Loading" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;