import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { useState } from "react";
import { columns } from "../components/ui/columns";
import { useGetAllAdsQuery } from "../hooks/queries";
import { CreateAdsForm } from "./create-ads";

export default function AdsListPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetAllAdsQuery({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });   

  if (isLoading) return "loading";

  return (
    <section className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[{ label: "Ads", href: "/dashboard/ads" }]}
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex w-full items-center justify-between">
            <h1>Ads</h1>
            <CreateAdsForm/>
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
