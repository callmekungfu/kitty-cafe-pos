import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes';
import { trpc } from './trpc-client';
import { httpBatchLink } from '@trpc/client';

const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement);
const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/trpc',
    }),
  ],
});

root.render(
  <StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <RouterProvider router={router} />
    </trpc.Provider>
  </StrictMode>,
);
