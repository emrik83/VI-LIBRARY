import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/VI-LIBRARY/', // GitHub Pages için gerekli base ayarı
  plugins: [react()],
  server: {
    port: 5173, // Sunucunun çalışacağı port
    host: true, // Yerel ağdan erişimi açar
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias tanımı
    },
  },
  build: {
    outDir: 'dist', // Build çıktısının konumu
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'], // Optimize edilecek bağımlılıklar
  },
});
