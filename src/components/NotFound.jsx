import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1 className='mt-5 text-center'>Sorry, this page does not exist.</h1>
      <p className='mt-4 text-center'>
        <Link to='/'>Ir al inicio</Link>
      </p>
    </>
  );
}

export default NotFound;
