import { Link } from 'react-router-dom'
import logo from "../../assets/images/Logo.svg";
import useAuth from '../../hooks/useAuth';
import './Navbar.css'

function Navbar() {
  const { user } = useAuth();

  return (
    <div>
        <nav className="fixed top-0 w-full">
        <div className="bg">
          <nav className="container">
            <div className="flex items-center justify-between row">
              <div className="left">
                {user && user.role === 'user' ? (
                  <Link className="text-white text-3xl" to='/myblogs'>My Blogs</Link>
                ) : (
                  <Link className="text-white text-3xl" to='/'><img src={logo} alt="logo" /></Link>
                )}
              </div>
              <div className="right">
                <ul>
                  <li className="nav-item">
                    <Link to='/' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/blogs' className="nav-link">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/about' className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/register' className="nav-link">Register</Link>
                  </li>
                  <li className="nav-item">
                    {user && user.role === 'user' ? (
                      <Link to="/user-account" className="nav-link py-2 px-6 bg-[#fff] text-[#000] rounded-lg">Account</Link>
                    ) : (
                      <Link to="/login" className="nav-link py-2 px-6 bg-[#fff] text-[#000] rounded-lg">Login</Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  )
}

export default Navbar