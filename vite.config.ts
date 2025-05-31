import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const isLocal = mode === 'development';
  const apiBaseUrl = isLocal
    ? 'http://localhost:8080'
    : env.VITE_API_BASE_URL || 'https://tasks-production-d8b8.up.railway.app';

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: apiBaseUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  };
});
