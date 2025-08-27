import ActionButton from "@/components/ui/action-button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { toast } from "sonner";
import { useDeleteProdcutMutation } from "../../hooks/mutation";
import type { Product } from "../../types";

export default function ProductActionCell({ product }: { product: Product }) {
  const { mutateAsync, isSuccess } = useDeleteProdcutMutation();
  const queryClient = useQueryClient();
  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: ["products"] });
  }
  return (
    <AlertDialog>
      <div className="space-x-2">
        
          <Link to={`/dashboard/products/edit/${product.id}`}>
            <ActionButton actionType="edit" />
          </Link>
       
          <AlertDialogTrigger asChild>
            <ActionButton actionType="delete" />
          </AlertDialogTrigger>
       
      </div>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you 100% sure that you want to delete the product name with {product.name}?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant={"secondary"}>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              className="text-white"
              variant={"destructive"}
              onClick={async () => {
                const res = mutateAsync(product.id);
                toast.promise(
                  res,
                  {
                    loading: "Deleting",
                    success: (data) => `${data.message}`,
                  },
                  
                );
              }}
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
