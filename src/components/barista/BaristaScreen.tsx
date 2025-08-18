import { skipToken } from '@tanstack/react-query';
import { trpc } from '../../trpc-client';

export function BaristaScreen() {
  const utils = trpc.useUtils();
  const { data: orders } = trpc.getActiveOrders.useQuery(skipToken, {
    refetchInterval: 500,
  });
  const completeOrderMutation = trpc.completeOrder.useMutation({
    onSuccess: () => {
      utils.getActiveOrders.invalidate();
    },
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Active Orders</h1>
        <button
          onClick={() => utils.getActiveOrders.invalidate()}
          className="p-2 bg-gray-200 rounded-lg"
        >
          Refresh
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {orders?.map((order) => (
          <div key={order.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{order.customerName}</h2>
            <p>
              {order.item.productName}
              {order.item.isIced && ' (Iced)'}
            </p>
            {order.item.milkChoice && <p>Milk: {order.item.milkChoice}</p>}
            {order.note && <p>Note: {order.note}</p>}
            <div className="my-2"></div>
            <button
              onClick={() => completeOrderMutation.mutate({ id: order.id })}
              className="p-4 bg-indigo-500 text-white"
            >
              Complete Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
