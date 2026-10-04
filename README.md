# Online Notepad

A single-page notes app built with React and Firebase: sign in with Google, then create, edit, color, search and delete your own notes stored in Cloud Firestore.

**Live demo:** https://online-notepad-jade.vercel.app/

## Features

- Google sign-in with Firebase Authentication (popup flow) and protected routes for notes and profile.
- Create a note from the navbar; each note is a Firestore document owned by the signed-in user.
- Note editor with title, text and color, plus created/updated timestamps (saved with the **Guardar** button).
- Notes grid with per-card delete and a color picker modal (`react-colorful`) to recolor a note directly from the list.
- Client-side search that filters notes by title or text as you type.
- Profile page with the user's Google name and email, an About page, and 404 / error pages.
- Firestore security rules that only let a user create, read, update or delete notes where `noteAuthorUid` matches their UID.

## Tech stack

- React 18 + Vite 4 (`@vitejs/plugin-react-swc`)
- React Router 6 (data router: `createBrowserRouter`)
- Firebase 10: Authentication (Google provider) and Cloud Firestore
- Context API + `useReducer` for auth and notes state
- Bootstrap 5.3 (loaded from CDN in `index.html`)
- ESLint

## Getting started

Requirements: Node.js 18+ and a Firebase project with Google sign-in and Firestore enabled.

```bash
git clone https://github.com/JoseBurgoss/Online_Notepad.git
cd Online_Notepad
npm install
```

Create a `.env` file in the project root with your Firebase web app config (the keys read in `src/lib/firebase.config.js`):

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

Then run:

```bash
npm run dev       # dev server on http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the build locally
npm run lint
```

Optionally deploy the rules in `firestore.rules` with the Firebase CLI: `firebase deploy --only firestore:rules`.

## Project structure

```text
src/
├── components/   # Navbar, NoteList, NoteCard, NoteView, ColorChooserModal, Profile, About, ProtectedRoute, error pages
├── context/      # AuthContext (user session) and FirestoreContext (notes state + search)
├── handlers/     # auth.js (Google sign-in), firestore.js (CRUD), dataLoaders.js
├── functions/    # timestampToDate helper
├── lib/          # firebase.config.js
└── App.jsx       # Routes
firestore.rules   # Per-user access rules for the notes collection
```

## Español

Aplicación web de notas hecha con React, Vite y Firebase. Permite iniciar sesión con Google y crear, editar, cambiar de color, buscar y eliminar notas propias guardadas en Firestore, protegidas por reglas de seguridad por usuario. Demo: https://online-notepad-jade.vercel.app/

---

Author: José Burgos — https://jose-burgos-portfolio.vercel.app · https://www.linkedin.com/in/jose-burgos-/
