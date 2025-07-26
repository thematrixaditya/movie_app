import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  build: { sourcemap: true, },
  plugins: [react(), tailwindcss()],
  server: {
    host: 'localhost',
    port: 3000,
    watch: { usePolling: true, }
  }
})
