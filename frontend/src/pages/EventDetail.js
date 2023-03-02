// import { useParams, json } from 'react-router-dom';
import { useLoaderData, json } from 'react-router-dom';
import EventItem from './../components/EventItem';

const EventDetailPage = () => {
  // The userParams() hook
  // It gives us access to the currently active route parameters, so to the values that are encoded in the URL for our dynamic path segments.
  // const params = useParams();
  // console.log('Params:');
  // console.log(params);

  const data = useLoaderData();

  console.log('Loader data:');
  console.log(data);

  return (
    // <>
    //   <h1>Event Detail Page</h1>
    //   <p>Event ID: {params.eventId}</p>
    // </>
    <EventItem event={data.event} />
  );
};

export default EventDetailPage;

// The React Router which calls this loader function for you actually passes an object to the loader function
// That object contains two important pieces of data:
// 1. A request property which contains a request object
// 2. A params property which contains an object with all your route paramaters
export async function loader({ request, params }) {
  console.log('Request:');
  console.log(request);

  console.log('Params:');
  console.log(params);
  // We can't use hooks here
  const id = params.eventId;
  console.log('Id:');
  console.log(id);

  // Send a request
  // const resposne =  fetch(`https://localhost:8080/events/${id}`);
  // return response;

  // Note: The React Router would automatically wait for the promise and give us access to the data to which it resolves.

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    // Throw an error
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        // Metadata Object
        status: 500,
      }
    );
  } else {
    return response;
  }
}
