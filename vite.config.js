import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // GitHub repository name (add "/" at the start and end)
  build: {
    outDir: 'dist',               // Output directory for production build
    sourcemap: true,              // Optional: Include sourcemaps for debugging
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  css: [
    'primeflex/themes/primeone-dark.css',
    'primeflex/themes/primeone-light.css',
    'primeflex/primeflex.css'
  ]
});
