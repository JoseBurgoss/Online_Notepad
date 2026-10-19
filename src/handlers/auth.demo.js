// Adaptador de autenticación de la demo: misma interfaz que auth.js, sin Firebase.
import { DEMO_KEYS, read, remove, write } from '../demo/storage';

const avatar =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="48" fill="#3b5bdb"/><text x="48" y="61" font-family="Arial,sans-serif" font-size="38" font-weight="700" fill="#fff" text-anchor="middle">UD</text></svg>'
  );

const DEMO_USER = {
  uid: 'demo-user',
  displayName: 'Usuario Demo',
  email: 'demo@notepad.local',
  photoURL: avatar,
};

const FirebaseAuth = {
  // Simula el inicio de sesión con Google: entra directamente con el usuario de demo.
  signIn: async () => {
    write(DEMO_KEYS.user, DEMO_USER);
    return DEMO_USER;
  },

  signOut: async () => {
    remove(DEMO_KEYS.user);
  },

  getCurrentUser: async () => read(DEMO_KEYS.user, null),
};

export default FirebaseAuth;
