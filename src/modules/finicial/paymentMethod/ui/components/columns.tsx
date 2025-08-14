import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Payment } from "@/modules/finicial/paymentMethod/types";
import type { Pagination } from "@/types/global";
import { getImageUrl } from "@/utils/images";
import type { ColumnDef } from "@tanstack/react-table";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import PaymentActionCell from "./action-cell";

export const columns: (
  pagintaion: Pagination | undefined
) => ColumnDef<Payment>[] = (pagination) => [
  getRowNumberColumn(pagination),
  {
    id: "image",
    header: "QR",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <PhotoProvider>
          <div className="flex gap-1">
            {payment.QR ? (
              <PhotoView
                src={getImageUrl({
                  resource: "images",
                  fileName: payment.QR,
                })}
              >
                <img
                  className="h-14 w-14 rounded-lg hover:cursor-pointer"
                  src={getImageUrl({
                    resource: "images",
                    fileName: payment.QR,
                  })}
                  alt={payment.accName}
                />
              </PhotoView>
            ) : (
              <img
                className="h-14 w-14 rounded-lg object-cover"
                src={`/defaultImage/default_img_1.png`}
                alt={payment.accName}
              />
            )}
          </div>
        </PhotoProvider>
      );
    },
  },
  {
    id: "pyMethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment method" />
    ),
    accessorKey: "pyMethod",
  },
  {
    id: "accName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account Number" />
    ),
    accessorKey: "accName",
  },

  {
    id: "isActive",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Is Active" />
    ),
    cell: ({ row }) => {
      const payment = row.original;

      return payment.active ? (
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
      const payment = row.original;

      return <PaymentActionCell payment={payment} />;
    },
  },
];
