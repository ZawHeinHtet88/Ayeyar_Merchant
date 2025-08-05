import type { Order } from "../types";
import { OrderDetails } from "./detail";
import { UpdateOrderForm } from "./update-form";

export default function OrderActionCell({ order }: { order: Order }) {
  return (
    <div className="space-x-2">
      <UpdateOrderForm order={order} />
      <OrderDetails order={order}/>
    </div>
  );
}
