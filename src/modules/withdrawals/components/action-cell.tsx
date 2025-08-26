import type { Withdrawal } from "../types";
import { UpdateWithDrawalForm } from "./update-form";

export default function WithdrawalActionCell({ withdrawal }: { withdrawal: Withdrawal }) {
  return (
    <div className="space-x-2">
      <UpdateWithDrawalForm withdrawal={withdrawal}/>
    </div>
  );
}
