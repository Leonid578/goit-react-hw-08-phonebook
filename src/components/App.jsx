import { GlobalStyled } from './GlobalStyled.styled';
import AppBar from './AppBar/Header';
import { Routes, Route } from 'react-router-dom'; // работа с маршрутизацией

import { Navigate } from 'react-router-dom';
import Home from './Home/Home';
import ContactsPage from './ContactsPage/ContactsPage';
import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
