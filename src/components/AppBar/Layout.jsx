import Header from '../Header/Header';
import Footer  from '../Footer/Footer';
import { Main } from './Layout.styled';
import { Conteiner } from 'components/Conteiner/Conteiner.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />

      <Main>
        <Conteiner>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </Conteiner>
      </Main>

      <Footer />
    </>
  );
};

export default Layout;
