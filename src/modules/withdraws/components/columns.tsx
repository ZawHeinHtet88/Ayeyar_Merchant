import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import type { WithDraw } from "../types";
import { formatDate } from "date-fns";

export const columns: (
  pagintaion: Pagination | undefined
) => ColumnDef<WithDraw>[] = (pagination) => [
  getRowNumberColumn(pagination),
  {
    id: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    accessorKey: "amount",
    accessorFn: (row) => row.amount.toString() + " " + row.currency,
  },
  {
    id: "status",
    header: "status",
    accessorKey: "status",
  },
  {
    id: "paymentMethod",
    header: "Payment Method",
    accessorKey: "paymentCategory.pyMethod",
  },
  {
    id: "accountName",
    header: "Account Name",
    accessorKey: "paymentCategory.accName",
  },
  {
    id: "account Number",
    header: "Account Number",
    accessorKey: "paymentCategory.accNumber",
  },

  {
    id: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    accessorKey: "createdAt",
    accessorFn: (row) =>formatDate(row.createdAt, "dd/MM/yyyy HH:mm:ss"),
  },
];
