# Online Notepad / Bloc de Notas Online

## English

### Overview
Online Notepad is a React-based web application that allows users to create, edit, and manage personal notes with Google authentication and real-time synchronization via Firebase Firestore.

### Features
- **Google Authentication**: Secure login with Google OAuth [1](#0-0) 
- **Note Management**: Create, edit, delete, and search notes [2](#0-1) 
- **Color Customization**: Change note colors for better organization [3](#0-2) 
- **Real-time Sync**: Notes are automatically saved to Firebase Firestore
- **Responsive Design**: Built with Bootstrap for mobile-friendly interface [4](#0-3) 

### Architecture
The application follows a layered React architecture with:
- **Presentation Layer**: React components with routing [5](#0-4) 
- **State Management**: Context API for authentication and data management [6](#0-5) 
- **Data Access**: Firebase handlers for database operations

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase project with Firestore and Authentication enabled

### Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/JoseBurgoss/Online_Notepad.git
   cd Online_Notepad
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project
   - Enable Google Authentication
   - Enable Firestore Database
   - Add your Firebase config to the project

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Usage
1. **Login**: Click the login button to authenticate with Google [7](#0-6) 
2. **Create Notes**: Add new notes from the main dashboard
3. **Edit Notes**: Click on any note to edit its content [8](#0-7) 
4. **Search**: Use the search functionality to find specific notes [9](#0-8) 
5. **Customize**: Change note colors using the color picker [10](#0-9) 

---

## Español

### Descripción General
Online Notepad es una aplicación web basada en React que permite a los usuarios crear, editar y gestionar notas personales con autenticación de Google y sincronización en tiempo real a través de Firebase Firestore.

### Características
- **Autenticación con Google**: Inicio de sesión seguro con Google OAuth
- **Gestión de Notas**: Crear, editar, eliminar y buscar notas
- **Personalización de Colores**: Cambiar colores de notas para mejor organización
- **Sincronización en Tiempo Real**: Las notas se guardan automáticamente en Firebase Firestore
- **Diseño Responsivo**: Construido con Bootstrap para interfaz amigable en móviles

### Arquitectura
La aplicación sigue una arquitectura React en capas con:
- **Capa de Presentación**: Componentes React con enrutamiento
- **Gestión de Estado**: Context API para autenticación y gestión de datos
- **Acceso a Datos**: Manejadores de Firebase para operaciones de base de datos

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn
- Proyecto Firebase con Firestore y Authentication habilitados

### Instalación y Configuración
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JoseBurgoss/Online_Notepad.git
   cd Online_Notepad
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar Firebase:
   - Crear un proyecto Firebase
   - Habilitar Google Authentication
   - Habilitar Firestore Database
   - Agregar tu configuración de Firebase al proyecto

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abrir tu navegador y navegar a `http://localhost:5173`

### Uso
1. **Iniciar Sesión**: Haz clic en el botón de inicio de sesión para autenticarte con Google
2. **Crear Notas**: Agregar nuevas notas desde el panel principal
3. **Editar Notas**: Haz clic en cualquier nota para editar su contenido
4. **Buscar**: Usa la funcionalidad de búsqueda para encontrar notas específicas
5. **Personalizar**: Cambia los colores de las notas usando el selector de colores

## Notes

The application uses a dual-context architecture where `AuthContextProvider` manages user authentication state and `FirestoreContextProvider` handles notes data state [11](#0-10) . The routing system conditionally renders components based on authentication state [12](#0-11) . Date formatting is handled by a utility function that converts Firestore timestamps to readable format [13](#0-12) .
