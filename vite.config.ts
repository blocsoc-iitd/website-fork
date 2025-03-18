import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import commonJs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/'
})