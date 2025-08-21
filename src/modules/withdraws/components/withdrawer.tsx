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
import { DollarSign } from "lucide-react";
import { WithdrawForm } from "./form";

export function WithDrawSheet({ totalAmount }: { totalAmount: number }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <DollarSign /> Cash Out
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Withdraw your money</SheetTitle>
          <SheetDescription>
            You can withdraw your money from your account. The total amount
            available for withdrawal is {totalAmount} MMK.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <WithdrawForm />
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
