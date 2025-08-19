import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useGetAllOrdersQuery } from "@/modules/orders/hooks/queries";
import { format } from "date-fns";
export default function RecentOrderTable() {
  const { data } = useGetAllOrdersQuery({
    page: 1,
    limit: 10,
  });
  return (
    <Card className="border-card">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead className="text-center">Customer</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-center">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.orders.map((order) => (
              <TableRow>
                <TableCell className="font-mono">{order.code}</TableCell>
                <TableCell className="text-center">{order.user.name}</TableCell>
                <TableCell className="text-right">
                  {order.totalAmount}
                </TableCell>
                <TableCell className="text-right">{order.status}</TableCell>
                <TableCell className="text-center">
                  {format(order.createdAt, "hh:mm:ss mm/dd/yy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
