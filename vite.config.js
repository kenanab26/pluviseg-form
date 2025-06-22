// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // <- agora o index.html está aqui
  build: {
    outDir: '../dist', // <- saída volta um nível acima
    emptyOutDir: true,
  },
});
