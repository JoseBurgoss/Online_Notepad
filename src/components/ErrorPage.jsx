import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error.toString());
  let errorMessage = '';

  switch (error?.code) {
    case 'permission-denied':
      errorMessage = "Lo Siento, no tienes permisos para acceder a esta página";
      break;
    default:
      errorMessage = 'Oops! Algo salió mal. Por favor, intenta de nuevo más tarde.';
  }

  return <h1 className='mt-5 text-center'>{errorMessage}</h1>;
}

export default ErrorPage;
