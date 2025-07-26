import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { getRowNumberColumn } from "@/components/ui/data-table/get-row-number";
import type { Pagination } from "@/types/global";
import type { ColumnDef } from "@tanstack/react-table";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import type { Product } from "../../types";
import { getImageUrl } from "./../../../../utils/images";
import { Badge } from "@/components/ui/badge";
import ProductActionCell from "./action-cell";

export const columns: (
  pagintaion: Pagination | undefined
) => ColumnDef<Product>[] = (pagination) => [
  getRowNumberColumn(pagination),
  {
    id: "image",
    header: "Image",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <PhotoProvider>
          <div className="flex gap-1">
            {Array.isArray(product.optimize_images) &&
            product.optimize_images[0] ? (
              <PhotoView
                src={getImageUrl({
                  resource: "optimize",
                  fileName: product?.optimize_images[0],
                })}
              >
                <img
                  className="h-14 w-14 rounded-lg hover:cursor-pointer"
                  src={getImageUrl({
                    resource: "optimize",
                    fileName: product?.optimize_images[0],
                  })}
                  alt={product.name}
                />
              </PhotoView>
            ) : (
              <img
                className="h-14 w-14 rounded-lg object-cover"
                src={`/defaultImage/default_img_1.png`}
                alt={product.name}
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
    id: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    accessorKey: "category",
  },
  {
    id: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    accessorKey: "type",
  },
  {
    id: "tags",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tags" />
    ),
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="space-x-2">
          {product?.tags?.map((tag, i) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </div>
      );
    },
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

  {
    id: "action",
    header: "Actions",
    cell : ({row}) => {
      const product = row.original

      return <ProductActionCell product={product}/>
    }
  },
];
