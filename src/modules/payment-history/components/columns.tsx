import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import type { PaymentHistory } from "../types";
import { formatDate } from "date-fns";

export const columns: (
  pagintaion: Pagination | undefined
) => ColumnDef<PaymentHistory>[] = (pagination) => [
  getRowNumberColumn(pagination),
  {
    id: "order_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Code" />
    ),
    accessorKey: "orderCode",
  },

  {
    id: "paymentMethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    accessorKey: "paymentMethod",
  },

  {
    id: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    accessorKey: "status",
  },
  {
    id: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    accessorKey: "amount",
  },
  {
    id: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    accessorKey: "createdAt",
    accessorFn: (row) => formatDate(row.createdAt, "dd/MM/yyyy HH:mm:ss"),
  },
];
