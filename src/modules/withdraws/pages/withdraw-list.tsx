import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { useState } from "react";
import { columns } from "../components/columns";
import { useGetAllWidthdrawQuery, useGetTotalAmountQuery } from "../hooks/queries";
import { Badge } from "@/components/ui/badge";
import { WithDrawSheet } from "../components/withdrawer";

function WithDrawList() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data } = useGetAllWidthdrawQuery({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });

  const {data:amountData} = useGetTotalAmountQuery();

  return (
    <section className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[{ label: "Withdraw", href: "/dashboard/financial/withdraw" }]}
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex w-full items-center justify-between">
            <h1>Withdraw List</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Badge className="text-sm font-semibold">
                Total Amount: {amountData?.totalAmount || 0} MMK
              </Badge>
              <WithDrawSheet totalAmount={amountData?.totalAmount || 0}/>
            </div>
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

export default WithDrawList;
