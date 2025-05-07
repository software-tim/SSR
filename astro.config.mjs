import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Configure Astro for SSR
  output: 'server',
  
  // Add Node.js adapter in standalone mode
  adapter: node({
    mode: 'standalone'
  }),
  
  // Configure server settings
  server: {
    // Use PORT environment variable or default to 8080
    port: process.env.PORT || 8080,
    // Listen on all network interfaces
    host: '0.0.0.0'
  },
  
  // Site configuration
  site: 'https://ssr.azurewebsites.net', // Replace with your actual URL
  
  // Build configuration
  build: {
    format: 'file',
    // Ensure client assets are properly referenced
    assets: '_astro'
  },
  
  // Development configuration
  vite: {
    // Handle any Vite warnings about null byte characters
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.message.includes('Received null character')) return;
          warn(warning);
        }
      }
    },
    // Optimize for Node.js environment
    ssr: {
      noExternal: []
    }
  }
});