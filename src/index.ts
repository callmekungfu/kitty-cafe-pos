import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './router.js';

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

console.log('Server listening on http://localhost:3000');
