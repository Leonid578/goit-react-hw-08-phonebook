import Header from '../Header/Header';
import Footer  from '../Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import style from './Layout.style.css'

const Layout = () => {
  return (
    <>
      <Header />

      <Card.Body className="d-flex flex-column min-vh-100">
        <div className={style.containerBody}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </div>
      </Card.Body>

      <Footer />
    </>
  );
};

export default Layout;
