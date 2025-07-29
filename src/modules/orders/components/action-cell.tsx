import type { Order } from "../types";
import { UpdateOrderForm } from "./update-form";

export default function OrderActionCell({order}:{order:Order}) {
  return <UpdateOrderForm order={order}/>;
}
