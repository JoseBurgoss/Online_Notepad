import { resetDemo } from './storage';
import './demo-banner.css';

// Aviso fijo de la demo sin backend, con botón para volver al estado inicial.
export default function DemoBanner() {
  const reset = () => {
    resetDemo();
    window.location.assign('/');
  };

  return (
    <div className='demo-banner' role='note'>
      <span>Proyecto universitario · demo sin backend</span>
      <button type='button' onClick={reset}>
        Reiniciar demo
      </button>
    </div>
  );
}
