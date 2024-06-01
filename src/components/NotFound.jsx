import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1 className='mt-5 text-center'>Disculpa, esta pagina no existe.</h1>
      <p className='mt-4 text-center'>
        <Link to='/'>Ir al inicio</Link>
      </p>
    </>
  );
}

export default NotFound;
