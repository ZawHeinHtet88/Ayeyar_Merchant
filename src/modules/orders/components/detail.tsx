import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Eye } from "lucide-react";
import type { Order } from "../types";

export function OrderDetails({ order }: { order: Order }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="outline">
          <Eye />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Orders Details</SheetTitle>
          <SheetDescription>
            {order.code}
            <h4 className="font-bold">Products - {order.products.length}</h4>
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 border mx-4 rounded-2xl">
          <div>
            {order.products.map((product) => (
              <div className="p-5 border-b-1">
                <h4>{product.name}</h4>
                <div className="">
                  <p>Price - {product.price}</p>
                  <p>Quantity - {product.quantity}</p>
                  <p>Total - {product.totalPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
