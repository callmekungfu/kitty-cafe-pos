import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import {
  createOrder,
  getActiveOrders,
  completeOrder,
  getProducts,
} from './store.js';
import { CafeOrderItemSchema } from './model';

const t = initTRPC.create();

export const appRouter = t.router({
  getProducts: t.procedure.query(() => {
    const products = getProducts();
    return products;
  }),
  createOrder: t.procedure
    .input(
      z.object({
        item: CafeOrderItemSchema,
        customerName: z.string().max(100),
        note: z.string().max(100).optional(),
      }),
    )
    .mutation(({ input }) => {
      const order = createOrder(input.customerName, input.item, input.note);
      return order;
    }),
  getActiveOrders: t.procedure.query(() => {
    const orders = getActiveOrders();
    return orders;
  }),
  completeOrder: t.procedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => {
      const order = completeOrder(input.id);
      return order;
    }),
});

export type AppRouter = typeof appRouter;
