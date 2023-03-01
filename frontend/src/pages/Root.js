import { Outlet } from 'react-router-dom';
import MainNavigation from './../components/MainNavigation';

const RootLayout = () => {
  return (
    <>
      <h1>Root Layout</h1>
      <MainNavigation />
      <main>
        {/* So this is now the marker the place where the child routes should be rendered to. */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
