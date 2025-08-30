import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { useState } from "react";
import { columns } from "../components/columns";
import {
  useGetAllOrdersQuery,
  useGetAllSaleHistoryQuery,
} from "../hooks/queries";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { format } from "date-fns";

function OrdersListPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data } = useGetAllOrdersQuery({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });

  const { data: saleHistory } = useGetAllSaleHistoryQuery();

  const handleDownloadCSV = () => {
    const { overview, soldProducts, paymentBreakdown } =
      saleHistory?.data ?? {};

    // --- Overview Section ---
    const overviewHeaders = [
      "Total Products",
      "Sold Products",
      "Total Quantity Sold",
      "Total Amount",
      "Total COD Amount",
      "Total Stripe Amount",
      "Total Orders",
    ];

    const overviewRow = [
      overview?.totalProducts ?? 0,
      overview?.soldProducts ?? 0,
      overview?.totalQuantitySold ?? 0,
      overview?.totalAmount ?? 0,
      overview?.totalCodAmount ?? 0,
      overview?.totalStripeAmount ?? 0,
      overview?.totalOrders ?? 0,
    ];

    // --- Sold Products Section ---
    const productHeaders = [
      "ID",
      "Name",
      "Price",
      "Quantity Sold",
      "Total Revenue",
      "Order Count",
      "COD Sales",
      "Stripe Sales",
      "COD Revenue",
      "Stripe Revenue",
    ];

    const productRows =
      soldProducts?.map((p) => [
        p.id,
        p.name,
        p.price,
        p.quantitySold,
        p.totalRevenue,
        p.orderCount,
        p.codSales,
        p.stripeSales,
        p.codRevenue,
        p.stripeRevenue,
      ]) ?? [];

    // --- Payment Breakdown Section ---
    const paymentHeaders = ["Method", "Amount", "Percentage (%)", "Orders"];

    const paymentRows = [
      [
        "COD",
        paymentBreakdown?.cod.amount ?? 0,
        paymentBreakdown?.cod.percentage ?? "0",
        paymentBreakdown?.cod.orders ?? 0,
      ],
      [
        "Stripe",
        paymentBreakdown?.stripe.amount ?? 0,
        paymentBreakdown?.stripe.percentage ?? "0",
        paymentBreakdown?.stripe.orders ?? 0,
      ],
    ];

    // --- Combine CSV ---
    const csvContent = [
      ["Overview"],
      overviewHeaders,
      overviewRow,
      [],
      ["Sold Products"],
      productHeaders,
      ...productRows,
      [],
      ["Payment Breakdown"],
      paymentHeaders,
      ...paymentRows,
    ]
      .map((row) => row.join(","))
      .join("\n");

    // --- Download File ---
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sales-report-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[{ label: "Orders", href: "/dashboard/orders" }]}
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex w-full items-center justify-between">
            <h1>Orders</h1>
            <Button onClick={handleDownloadCSV}>
              <Download />
              CSV for Sales History
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <DataTable
              columns={columns(data?.pagination)}
              data={data?.orders}
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
