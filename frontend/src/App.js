import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
// Alias
// Pointer at that function
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

/*
// Absolute Paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // { index: '/, element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { path: '/events', element: <EventsPage /> },
      { path: '/events/:eventId', element: <EventDetailPage /> },
      // React router is smart so it would prefer /events/new over /events/:eventId router definition
      { path: '/events/new', element: <NewEventPage /> },
      { path: '/events/:eventId/edit', element: <EditEventPage /> },
    ],
  },
]);
*/

// Relative Paths
/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // { index: '/, element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:eventId', element: <EventDetailPage /> },
      // React router is smart so it would prefer /events/new over /events/:eventId router definition
      { path: 'events/new', element: <NewEventPage /> },
      { path: 'events/:eventId/edit', element: <EditEventPage /> },
    ],
  },
]);
*/

const router = createBrowserRouter([
  {
    // Nested routes
    path: '/',
    element: <RootLayout />,
    children: [
      // { index: '/, element: <HomePage /> },
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          // { path: 'events', element: <EventsPage /> },
          {
            index: true,
            element: <EventsPage />,
            // Extra property which you can add to your route definitions
            // loader property
            // It wants function as a value
            // It will execute by a react-router just before the component gets rendered
            // We wanna get that data to that events page component
            // When you define a function the React Router will automatically take any value you return in that function for example the response data and data is available to that component
            // loader: async () => {
            //   console.log('Loader function!');
            //   // Load and fetch data and evaluate response
            //   const response = await fetch('http://localhost:8080/events');

            //   if (!response.ok) {
            //     // setError('Fetching events failed.');
            //     // ...
            //   } else {
            //     const resData = await response.json();

            //     // Get events array data
            //     return resData.events;
            //   }
            loader: eventsLoader,
          },
          { path: ':eventId', element: <EventDetailPage /> },
          // React router is smart so it would prefer /events/new over /events/:eventId router definition
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  // return <div></div>;
  return <RouterProvider router={router} />;
}

export default App;
