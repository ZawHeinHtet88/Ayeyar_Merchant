import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { useState } from "react";
import { columns } from "../components/columns";
import { useGetAllOrdersQuery } from "../hooks/queries";


function OrdersListPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetAllOrdersQuery({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });

  if (isLoading) return "loading";
  return (
    <section className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[{ label: "Orders", href: "/dashboard/orders" }]}
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex w-full items-center justify-between">
            <h1>Orders</h1>
            
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <DataTable
              columns={columns(data?.pagination)}
              data={data?.data}
              pagination={pagination}
              setPagination={setPagination}
              totalResult={data?.pagination?.totalResult || 0}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default OrdersListPage;
