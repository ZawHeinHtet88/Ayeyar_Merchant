import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import type { Ads } from "../../types";
import AdsActionCell from "./action-cell";
import { getImageUrl } from "@/utils/images";

export const columns: (pagintaion: Pagination | undefined) => ColumnDef<Ads>[] = (
  pagination
) => [
  getRowNumberColumn(pagination),
  {
    id: "image",
    header: "Image",
    cell: ({ row }) => {
      const ads = row.original;

      return (
        <PhotoProvider>
          <div className="flex gap-1">
            {ads.image ? (
              <PhotoView
                src={getImageUrl({
                  resource: "images",
                  fileName: ads.image,
                })}
              >
                <img
                  className="h-14 w-14 rounded-lg hover:cursor-pointer"
                  src={getImageUrl({
                    resource: "images",
                    fileName: ads.image,
                  })}
                  alt={ads.product}
                />
              </PhotoView>
            ) : (
              <img
                className="h-14 w-14 rounded-lg object-cover"
                src={`/defaultImage/default_img_1.png`}
                alt={ads.product}
              />
            )}
          </div>
        </PhotoProvider>
      );
    },
  },
  {
    id: "companyImg",
    header: "Company Image",
    cell: ({ row }) => {
      const ads = row.original;

      return (
        <PhotoProvider>
          <div className="flex gap-1">
            {ads.image ? (
              <PhotoView
                src={getImageUrl({
                  resource: "images",
                  fileName: ads.companyImg,
                })}
              >
                <img
                  className="h-14 w-14 rounded-lg hover:cursor-pointer"
                  src={getImageUrl({
                    resource: "images",
                    fileName: ads.companyImg,
                  })}
                  alt={ads.product}
                />
              </PhotoView>
            ) : (
              <img
                className="h-14 w-14 rounded-lg object-cover"
                src={`/defaultImage/default_img_1.png`}
                alt={ads.product}
              />
            )}
          </div>
        </PhotoProvider>
      );
    },
  },
  {
    id: "companyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    accessorKey: "company",
  },
  {
    id: "productName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ProductName" />
    ),
    accessorKey: "product",
  },
  {
    id: "link",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Link" />
    ),
    accessorKey: "link",
  },

  {
    id: "action",
    header: "Actions",
    cell: ({ row }) => {
      const ads = row.original;

      return <AdsActionCell ads={ads} />;
    },
  },
];
