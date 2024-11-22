import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { svgLoader } from './src/svg-loader/svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader()],
});