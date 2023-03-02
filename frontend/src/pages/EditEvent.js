// import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

import EventForm from './../components/EventForm';

const EditEventPage = () => {
  // The useLoaderData() hook to get access data from loader
  // Note: By default when we use loaderData() hook it searches for the closest available loader data, and the highest level at which it looks for data is the route definition of the route for which this component was loaded.
  //   const data = useLoaderData();
  //   const event = data.event;

  const data = useRouteLoaderData('event-detail');
  //   const event = data.event;
  // return <h1>Edit Event Page</h1>;
  //   return <EventForm />;
  // Pass the event to the event form
  // Pass event props and then destructure in there
  //   <EventForm event={event} />;
  return <EventForm event={data.event} />;
};

export default EditEventPage;
