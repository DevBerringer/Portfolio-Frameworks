import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3625, // or any port you prefer
    host: true, // allows access from other devices on your network
  },
})
