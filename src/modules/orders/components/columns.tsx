import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import "react-photo-view/dist/react-photo-view.css";
import type { Order } from "../types";
import { Badge } from "@/components/ui/badge";
import OrderActionCell from "./action-cell";

export const columns: (
  pagintaion: Pagination | undefined
) => ColumnDef<Order>[] = (pagination) => [
  getRowNumberColumn(pagination),
  {
    id: "order_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Code" />
    ),
    accessorKey: "code",
  },
  {
    id: "customerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
    accessorKey: "user.name",
  },
  {
    id: "customerEmail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    accessorKey: "user.email",
  },
  {
    id: "totalProducts",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Products" />
    ),
    accessorKey: "totalProducts",
  },

  {
    id: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    accessorKey: "status",
  },
  {
    id: "paymentmethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    accessorKey: "payment",
  },
  {
    id: "isDelivery",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Is Delivery" />
    ),
    cell: ({ row }) => {
      const order = row.original;

      return order.isDelivered ? (
        <Badge>Yes</Badge>
      ) : (
        <Badge variant={"destructive"}>No</Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const order = row.original;

      return <OrderActionCell order={order} />;
    },
  },
];
