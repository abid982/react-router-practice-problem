import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from './../components/MainNavigation';

const RootLayout = () => {
  // It lets us find out whether we're currently in an active transition if we're loading data, or if we have no active transition going on.
  // Navigation object with couple of properties
  const navigation = useNavigation();
  // Loading or submitting data

  return (
    <>
      <h1>Root Layout</h1>
      <MainNavigation />
      <main>
        {/* It gives the user some feedback that we're loading data  */}
        {navigation.state === 'loading' && <p>Loading...</p>}
        {/* So this is now the marker the place where the child routes should be rendered to. */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
