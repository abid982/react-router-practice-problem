// import { useEffect, useState } from 'react';

// import EventsList from '../components/EventsList';

// function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   // http://localhost:3002/events
//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/events');

//       if (!response.ok) {
//         setError('Fetching events failed.');
//       } else {
//         const resData = await response.json();
//         setFetchedEvents(resData.events);
//       }
//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);
//   return (
//     <>
//       <div style={{ textAlign: 'center' }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//     </>
//   );
// }

// export default EventsPage;

// Using Data From a Loader in the Route Component
// To get access to the data returned by the loader function for this page we can import a package
// This is a special hook to get access to the closest loader data
// closest loader data?
// Component function is way leaner
import { useLoaderData } from 'react-router-dom';
// Returns a promise
// Automatically resolved promise by React Router

import EventsList from '../components/EventsList';

function EventsPage() {
  //   const events = useLoaderData();
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
  //   return <EventsList />;
}

export default EventsPage;

// Load in browser
// Client side code
// Execute in browser
// Access localStorage
// Access Cookies
// Hooks doesn't work
// JavaScript works
export const loader = async () => {
  console.log('Loader function!');
  // Load and fetch data and evaluate response
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // setError('Fetching events failed.');
    // ...
  } else {
    // const resData = await response.json();

    // Get events array data
    // return resData.events;

    //   We could return a number, string, object
    //   We can also return a response object

    // Resonse constructor function
    //   Note: Whenever you return such a response in your loaders the React Router package will automatically extract the data from your response when using useLoaderData
    // const res = new Response('any data', { status: 201 });
    // return res;

    //   Automatic data extraction
    // Don't need manually extract response
    // Special built in Response is supported by React Router and its loader functions
    return response;
  }
};
