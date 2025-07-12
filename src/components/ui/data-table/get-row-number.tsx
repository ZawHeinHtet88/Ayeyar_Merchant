import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { Pagination } from "@/types/global";

// Generic reusable row number column
export function getRowNumberColumn<T>(pagination?: Pagination): ColumnDef<T> {
  return {
    id: "no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),

    accessorFn: (_row, index) =>
      index +
      1 +
      ((pagination?.page ?? 1) - 1) * (pagination?.entriesPerPage ?? 10),
  };
}
