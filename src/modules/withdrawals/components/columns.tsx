import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import "react-photo-view/dist/react-photo-view.css";
import type { Withdrawal } from "../types";
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { getImageUrl } from "@/utils/images";
import WithdrawalActionCell from "./action-cell";

export const columns: (
  pagintaion: Pagination | undefined
) => ColumnDef<Withdrawal>[] = (pagination) => [
  getRowNumberColumn(pagination),
  {
    id: "image",
    header: "Payment QR",
    cell: ({ row }) => {
      const withdrawal = row.original;

      return (
        <PhotoProvider>
          <div className="flex gap-1">
            {withdrawal.paymentCategory.QR ? (
              <PhotoView
                src={getImageUrl({
                  resource: "images",
                  fileName: withdrawal.paymentCategory.QR,
                })}
              >
                <img
                  className="h-14 w-14 rounded-lg hover:cursor-pointer"
                  src={getImageUrl({
                    resource: "images",
                    fileName: withdrawal.paymentCategory.QR,
                  })}
                  alt={withdrawal.status}
                />
              </PhotoView>
            ) : (
              <img
                className="h-14 w-14 rounded-lg object-cover"
                src={`/defaultImage/default_img_1.png`}
                alt={withdrawal.currency}
              />
            )}
          </div>
        </PhotoProvider>
      );
    },
  },
  {
    id: "merchantName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Merchant Name" />
    ),
    accessorKey: "merchant.name",
  },
  {
    id: "businessName",
    header: "Business Name",
    accessorKey: "merchant.businessName",
  },
  {
    id: "pyMethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment method" />
    ),
    accessorKey: "paymentCategory.pyMethod",
  },
  {
    id: "accNumber",
    header: "Account Number",
    accessorkey: "paymentCategory.accNumber",
    accessorFn: (row) =>
      row.paymentCategory.accNumber ? row.paymentCategory.accNumber : "-",
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
    accessorFn: (row) => row.amount + " " + row.currency,
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const withdrawal = row.original;

      return <WithdrawalActionCell withdrawal={withdrawal} />;
    },
  },
];
