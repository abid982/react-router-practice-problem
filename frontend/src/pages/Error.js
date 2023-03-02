import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import PageContent from './../components/PageContent';

const ErrorPage = () => {
  const error = useRouteError();

  // Default values
  let title = 'An error occured!';
  let message = 'Something went wrong!';

  // Generic error handling code
  // Create title and message based on error
  if (error.status === 500) {
    console.log('Error object:');
    console.log(error);

    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  // For a start
  //   return <h1>An error occurred!</h1>;
  // Pass content between opening and closing tag
  return (
    // <PageContent title="An error occured!">
    //   <p>Something went wrong!</p>
    // </PageContent>
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
