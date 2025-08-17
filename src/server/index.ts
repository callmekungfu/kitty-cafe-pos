import {
  fastifyTRPCPlugin,
  type FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import proxy from '@fastify/http-proxy';
import fastifyStatic from '@fastify/static';
import { createContext } from './context';
import { appRouter, type AppRouter } from './router';
import path from 'path';

const __dirname = path.resolve();

const server = fastify({
  logger: true,
});

// Allow all for now
// server.register(cors);

if (process.env.DEV === 'true') {
  server.log.info('Dev mode enabled, serving from Vite dev server');
  server.register(proxy, {
    upstream: 'http://localhost:5173',
    httpMethods: ['GET', 'POST', 'PUT', 'PATCH'],
  });
} else {
  server.log.info('Serving production assets from dist folder');
  server.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
  });
}

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: {
    router: appRouter,
    createContext,
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
});
(async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    console.log(err);
    server.log.error(err);
    process.exit(1);
  }
})();
