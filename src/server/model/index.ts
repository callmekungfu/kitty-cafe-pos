import { z } from 'zod';

export const DairyChoices = z.enum(['whole', 'oat', 'almond']);
export const DrinkCategories = z.enum(['coffee', 'tea', 'tea-latte']);

export const CafeListingSchema = z.object({
  name: z.string(),
  canBeIced: z.boolean(),
  isMilkProduct: z.boolean(),
  category: DrinkCategories,
});

export const CafeOrderItemSchema = z.object({
  productName: z.string(),
  isIced: z.boolean(),
  milkChoice: DairyChoices.optional(),
});

export const CafeOrderSchema = z.object({
  id: z.number(),
  item: CafeOrderItemSchema,
  customerName: z.string(),
  status: z.enum(['active', 'completed']),
});

export type CafeListing = z.infer<typeof CafeListingSchema>;
export type CafeOrderItem = z.infer<typeof CafeOrderItemSchema>;
export type CafeOrder = z.infer<typeof CafeOrderSchema>;
export type DairyChoice = z.infer<typeof DairyChoices>;
export type DrinkCategory = z.infer<typeof DrinkCategories>;
