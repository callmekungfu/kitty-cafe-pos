import { trpc } from '../../trpc-client';
import Button from '../Button';

export function BaristaScreen() {
  const utils = trpc.useUtils();
  const { data: orders } = trpc.getActiveOrders.useQuery();
  const completeOrderMutation = trpc.completeOrder.useMutation({
    onSuccess: () => {
      utils.getActiveOrders.invalidate();
    },
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Active Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {orders?.map((order) => (
          <div key={order.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{order.customerName}</h2>
            <p>
              {order.item.productName}
              {order.item.isIced && ' (Iced)'}
            </p>
            {order.item.milkChoice && <p>Milk: {order.item.milkChoice}</p>}
            <Button
              onClick={() => completeOrderMutation.mutate({ id: order.id })}
              className="mt-4"
            >
              Complete Order
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
