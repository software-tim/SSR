import { startServer } from './dist/server/entry.mjs';

console.log('[SSR] Starting Astro SSR server...');
startServer().then(() => {
  console.log('[SSR] Server started successfully on port 8080');
}).catch((err) => {
  console.error('[SSR] Server failed to start:', err);
});
