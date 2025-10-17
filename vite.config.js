import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: 'https://mateusfc-carvalho.github.io/Pasta-Virtual/',
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false
  },
  server: {
    port: 5173,
    open: true
  }
})



