import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), 
      name: 'TaficasaUI',
      fileName: (format) => `taficasa-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], 
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
