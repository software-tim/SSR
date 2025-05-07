import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Configure Astro for SSR
  output: 'server',

  // Add Node.js adapter in standalone mode (⚠️ removed unsupported `port` option)
  adapter: node({
    mode: 'standalone'
  }),

  // Configure server settings
  server: {
    // Azure injects PORT as an env var (e.g. 8080)
    port: process.env.PORT || 8080,
    host: '0.0.0.0'
  },

  // Site configuration
  site: 'https://ssr.azurewebsites.net',

  // Build configuration
  build: {
    format: 'file',
    assets: '_astro'
  },

  // Vite configuration
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.message.includes('Received null character')) return;
          warn(warning);
        }
      }
    },
    ssr: {
      noExternal: []
    }
  }
});
