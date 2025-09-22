import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the BELT tracker application. This setup enables
// React support and defines an alias so that `@/` points to the `src` folder.
// The alias makes it possible to import components using paths like
// '@/components/NavBar' rather than relative paths.

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});