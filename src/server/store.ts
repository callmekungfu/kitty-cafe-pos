import KittyCafeListings from './data/listings';
import type { CafeListing, CafeOrder, CafeOrderItem } from './model';

const orders: CafeOrder[] = [];
let nextId = 1;

export const getProducts = (): CafeListing[] => {
  return KittyCafeListings;
};

export const createOrder = (
  customerName: string,
  item: CafeOrderItem,
): CafeOrder => {
  const newOrder: CafeOrder = {
    id: nextId++,
    item,
    status: 'active',
    customerName,
  };
  orders.push(newOrder);
  return newOrder;
};

export const getActiveOrders = (): CafeOrder[] => {
  return orders.filter((order) => order.status === 'active');
};

export const completeOrder = (id: number): CafeOrder | undefined => {
  const order = orders.find((order) => order.id === id);
  if (order) {
    order.status = 'completed';
  }
  return order;
};
