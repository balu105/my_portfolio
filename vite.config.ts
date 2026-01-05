import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Using '.' instead of process.cwd() avoids the need for Node types.
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Polyfill process.env.GEMINI_API_KEY for the GenAI SDK
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
  };
});
