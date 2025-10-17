// vite.config.js
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression'; // Importa o plugin

export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginalAssets: false,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginalAssets: false,
    }),
  ],
  base: mode === 'production' ? '/pasta-virtual/' : '/',
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
}));


