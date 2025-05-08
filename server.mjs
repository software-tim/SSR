import { startServer } from './dist/server/entry.mjs';

const port = process.env.PORT || 8080;

console.log('✅ Custom server.mjs running...');
console.log(`🌐 Listening on port: ${port}`);

startServer({
  port,
  host: '0.0.0.0',
});
