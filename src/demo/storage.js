// Almacenamiento local de la demo sin backend (reemplaza Firebase en el build de demo).
const PREFIX = 'notepad-demo:';

export const DEMO_KEYS = {
  user: `${PREFIX}user`,
  notes: `${PREFIX}notes`,
};

export function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // almacenamiento lleno o bloqueado: la demo sigue funcionando en esta sesión
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // sin acceso al almacenamiento
  }
}

export function resetDemo() {
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(PREFIX))
      .forEach((k) => localStorage.removeItem(k));
  } catch {
    // sin acceso al almacenamiento
  }
}

// Equivalente mínimo de firebase.firestore.Timestamp: toDate() y orden numérico.
export class DemoTimestamp {
  constructor(ms) {
    this.ms = ms;
  }

  toDate() {
    return new Date(this.ms);
  }

  valueOf() {
    return this.ms;
  }
}
