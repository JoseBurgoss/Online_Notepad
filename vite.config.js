import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Por defecto se construye la demo sin backend: los adaptadores *.demo.js reemplazan
// a los de Firebase y el SDK no entra en el bundle. VITE_BACKEND=firebase restaura
// el comportamiento original (requiere las variables VITE_FIREBASE_*).
const swapped = ['/src/handlers/auth.js', '/src/handlers/firestore.js']

function demoBackend() {
  return {
    name: 'demo-backend',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      if (!importer || !source.startsWith('.')) return null
      const resolved = await this.resolve(source, importer, { ...options, skipSelf: true })
      const file = resolved?.id.replace(/\\/g, '/')
      if (!file || !swapped.some((s) => file.endsWith(s))) return null
      return file.replace(/\.js$/, '.demo.js')
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const demo = (process.env.VITE_BACKEND || env.VITE_BACKEND) !== 'firebase'
  return {
    plugins: [react(), ...(demo ? [demoBackend()] : [])],
    define: { __DEMO__: JSON.stringify(demo) },
  }
})
