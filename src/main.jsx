import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AuthProvider from './context/AuthContext';
import App from './App';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider> 
      <App />
    </AuthProvider>
  </Provider>
);