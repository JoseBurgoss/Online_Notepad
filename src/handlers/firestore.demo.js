// Adaptador de notas de la demo: misma interfaz que firestore.js, persistido en localStorage.
import { DEMO_KEYS, DemoTimestamp, read, write } from '../demo/storage';

const MINUTE = 60 * 1000;
const DAY = 24 * 60 * MINUTE;

function seed() {
  const now = Date.now();
  return [
    {
      id: 'bienvenida',
      noteTitle: 'Bienvenido a Online Notepad',
      noteColor: '#fff3bf',
      noteText:
        'Esta es una demo sin backend: tus notas se guardan solo en este navegador.\n\nCrea, edita, cambia el color o borra notas. Usa «Reiniciar demo» para volver al estado inicial.',
      createdAt: now - 3 * DAY,
      updatedAt: now - 2 * MINUTE,
    },
    {
      id: 'compras',
      noteTitle: 'Lista de compras',
      noteColor: '#d3f9d8',
      noteText: '- Café\n- Pan integral\n- Tomates\n- Queso blanco',
      createdAt: now - 2 * DAY,
      updatedAt: now - 300 * MINUTE,
    },
    {
      id: 'ideas',
      noteTitle: 'Ideas para el proyecto final',
      noteColor: '#d0ebff',
      noteText: 'Buscador de notas, colores por categoría y modo oscuro.',
      createdAt: now - 6 * DAY,
      updatedAt: now - DAY,
    },
  ].map((n) => ({ ...n, noteAuthorUid: 'demo-user' }));
}

function load() {
  const notes = read(DEMO_KEYS.notes, null);
  if (Array.isArray(notes)) return notes;
  const initial = seed();
  write(DEMO_KEYS.notes, initial);
  return initial;
}

function toData(n) {
  return {
    noteAuthorUid: n.noteAuthorUid,
    noteTitle: n.noteTitle,
    noteColor: n.noteColor,
    noteText: n.noteText,
    noteCreatedAt: new DemoTimestamp(n.createdAt),
    noteUpdatedAt: new DemoTimestamp(n.updatedAt),
  };
}

function update(noteId, changes) {
  write(
    DEMO_KEYS.notes,
    load().map((n) => (n.id === noteId ? { ...n, ...changes } : n))
  );
}

const Firestore = {
  readNotes: async (uid) => {
    const docs = load()
      .filter((n) => n.noteAuthorUid === uid)
      .map((n) => ({ id: n.id, data: () => toData(n) }));
    return { docs, empty: docs.length === 0, forEach: (cb) => docs.forEach(cb) };
  },

  readNote: async (noteId) => {
    const note = load().find((n) => n.id === noteId);
    return note ? toData(note) : undefined;
  },

  saveNote: async (noteId, title, color, text) => {
    const updatedAt = Date.now();
    update(noteId, { noteTitle: title, noteColor: color, noteText: text, updatedAt });
    return new DemoTimestamp(updatedAt);
  },

  createNote: async (uid) => {
    const now = Date.now();
    const id = `nota-${now.toString(36)}`;
    write(DEMO_KEYS.notes, [
      ...load(),
      {
        id,
        noteAuthorUid: uid,
        noteTitle: '',
        noteColor: '#ffffff',
        noteText: '',
        createdAt: now,
        updatedAt: now,
      },
    ]);
    return id;
  },

  deleteNote: async (noteId) => {
    write(
      DEMO_KEYS.notes,
      load().filter((n) => n.id !== noteId)
    );
  },

  changeNoteColor: async (noteId, color) => {
    update(noteId, { noteColor: color });
  },
};

export default Firestore;
