import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { useState } from "react";
import { columns } from "../components/ui/columns";
import { useGetAllTypeQuery } from "../hooks/queries";
import { CreateTypeForm } from "./create-type";

export default function TypeListPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data } = useGetAllTypeQuery({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });   


  return (
    <section className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[{ label: "types", href: "/dashboard/types" }]}
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex w-full items-center justify-between">
            <h1>Types</h1>
            <CreateTypeForm/>
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
