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
import { toast } from "sonner";
import { useDeleteTypeMutation } from "../../hooks/mutation";
import { EditTypeForm } from "../../pages/edit-type";
import type { Type } from "../../types";

export default function TypeActionCell({ type }: { type: Type }) {
  const { mutateAsync, isSuccess } = useDeleteTypeMutation
  ();
  const queryClient = useQueryClient();
  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: ["ads"] });
  }
  return (
    <AlertDialog>
      <div className="space-x-2">
        <EditTypeForm type={type} />
        <AlertDialogTrigger asChild>
          <ActionButton actionType="delete" />
        </AlertDialogTrigger>
      </div>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you 100% sure that you want to delete the ads name with{" "}
            {type.name}?
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
                const res = mutateAsync(type?._id);
                toast.promise(res, {
                  loading: "Deleting",
                  success: (data) => `${data.message}`,
                });
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
