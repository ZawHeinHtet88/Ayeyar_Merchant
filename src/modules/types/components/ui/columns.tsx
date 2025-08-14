import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import type { Type } from "../../types";
import TypeActionCell from "./action-cell";
import { getImageUrl } from "@/utils/images";

export const columns: (
  pagintaion: Pagination | undefined
) => ColumnDef<Type>[] = (pagination) => [
  getRowNumberColumn(pagination),
  {
    id: "image",
    header: "Image",
    cell: ({ row }) => {
      const type = row.original;

      return (
        <PhotoProvider>
          <div className="flex gap-1">
            {type.image ? (
              <PhotoView
                src={getImageUrl({
                  resource: "images",
                  fileName: type.image,
                })}
              >
                <img
                  className="h-14 w-14 rounded-lg hover:cursor-pointer"
                  src={getImageUrl({
                    resource: "images",
                    fileName: type.image,
                  })}
                  alt={type.name}
                />
              </PhotoView>
            ) : (
              <img
                className="h-14 w-14 rounded-lg object-cover"
                src={`/defaultImage/default_img_1.png`}
                alt={type.name}
              />
            )}
          </div>
        </PhotoProvider>
      );
    },
  },
  {
    id: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    accessorKey: "name",
  },

  {
    id: "action",
    header: "Actions",
    cell: ({ row }) => {
      const type = row.original;

      return <TypeActionCell type={type} />;
    },
  },
];
