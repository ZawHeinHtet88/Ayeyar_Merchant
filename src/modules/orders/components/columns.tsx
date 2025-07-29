import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import "react-photo-view/dist/react-photo-view.css";
import type { Order } from "../types";

export const columns: (
  pagintaion: Pagination | undefined
) => ColumnDef<Order>[] = (pagination) => [
  getRowNumberColumn(pagination),
  {
    id: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    accessorKey: "name",
  },
  {
    id: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    accessorKey: "category.name",
  },
  {
    id: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    accessorKey: "type.name",
  },
  
  {
    id: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="price" />
    ),
    accessorKey: "price",
  },
  {
    id: "inventory",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inventory" />
    ),
    accessorKey: "inventory",
  },

 
];
