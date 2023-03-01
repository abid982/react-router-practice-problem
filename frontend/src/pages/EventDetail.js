import { useParams } from 'react-router-dom';
const EventDetailPage = () => {
  // The userParams() hook
  // It gives us access to the currently active route parameters, so to the values that are encoded in the URL for our dynamic path segments.
  const params = useParams();
  console.log('Params:');
  console.log(params);

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
};

export default EventDetailPage;
