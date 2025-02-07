import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: {
    proxy: {
      '/api': 'https://matheusmeissnerebac.pythonanywhere.com',
    },
  },
});
