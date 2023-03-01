import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const EventsRootLayout = () => {
  return (
    <>
      {/* Return two JSX Elements */}
      <EventsNavigation />
      <main>
        {/* So this is now the marker the place where the content of the child routes should be rendered to. */}
        <Outlet />
      </main>
    </>
  );
};

export default EventsRootLayout;
