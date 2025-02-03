import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/e-plantShopping/",  // Asegura que usa la ruta correcta en GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "./index.html", // Usa el index.html correcto
    },
  },
  plugins: [react()],
});
