import { startServer } from './dist/server/entry.mjs';

const port = process.env.PORT || 8080;

startServer({
    port,
    hostname: '0.0.0.0'
  }).then(() => {
    console.log(`✅ SSR server started on http://0.0.0.0:${port}`);
  });
