import { DollarSignIcon, ShoppingCart, Users2 } from "lucide-react";
import { useGetAllStatsQuery } from "../../hooks/queries";
import Stat from "./stat";

export default function Stats() {
  const { data } = useGetAllStatsQuery();
  return (
    <div className="grid grid-cols-4 gap-5">
      <Stat
        title={"Total Revenue"}
        icon={DollarSignIcon}
        data={data?.totalRevenue}
      />
      <Stat
        title={"Total Orders"}
        icon={ShoppingCart}
        data={data?.totalOrders}
      />
      <Stat
        title={"Total Users"}
        icon={Users2}
        data={data?.totalCustomers}
      />
      <Stat
        title={"Total Products"}
        icon={DollarSignIcon}
        data={data?.totalProducts}
      />
    </div>
  );
}
