import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.glb'],
  plugins: [react()],
  server: {
    mimeTypes: {
      'text/html': ['htm', 'html'],
      'image/svg+xml': ['svg']
    }
  }
})
