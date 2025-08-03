import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "date-fns";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import type { Merchant } from "../../types";
import MerchantActionCell from "./action-cell";

export const columns: (pagintaion: Pagination | undefined) => ColumnDef<Merchant>[] = (
  pagination
) => [
  getRowNumberColumn(pagination),
  {
    id: "image",
    header: "Image",
    cell: ({ row }) => {
      const merchant = row.original;

      return (
        <PhotoProvider>
          <div className="flex gap-1">
            {merchant.logo ? (
              <PhotoView
                // src={getImageUrl({
                //   resource: "optimize",
                //   fileName: product?.optimize_images[0],
                // })}
                src={merchant.logo}
              >
                <img
                  className="h-14 w-14 rounded-lg hover:cursor-pointer"
                  // src={getImageUrl({
                  //   resource: "optimize",
                  //   fileName: product?.optimize_images[0],
                  // })}
                  src={merchant.logo}
                  alt={merchant.businessName}
                />
              </PhotoView>
            ) : (
              <img
                className="h-14 w-14 rounded-lg object-cover"
                src={`/defaultImage/default_img_1.png`}
                alt={merchant.name}
              />
            )}
          </div>
        </PhotoProvider>
      );
    },
  },
  {
    id: "businessName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Business Name" />
    ),
    accessorKey: "businessName",
  },
  {
    id: "ownerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Owner Name" />
    ),
    accessorKey: "name",
  },
  {
    id: "email",
    header : "Email",
    accessorKey : "email"
  },
 
  {
    id: "address",
    header:"Address",
    accessorKey : "address.full"
  },
  {
    id:"createdAt",
    header : "Created At",
    accessorFn : (cell) => formatDate(cell.createdAt,"dd-mm-yyyy")
  },{
    id: "actions",
    header : "Actions",
    cell : ({row}) => {
      const merchant = row.original;
      return <MerchantActionCell merchant={merchant} />
    }
  }
 
];
