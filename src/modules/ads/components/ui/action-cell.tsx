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
import { useDeleteAdsMutation } from "../../hooks/mutation";
import type { Ads } from "../../types";
import { EditAdsForm } from "../../pages/edit-ads";

export default function AdsActionCell({ ads }: { ads: Ads }) {
  const { mutateAsync, isSuccess } = useDeleteAdsMutation();
  const queryClient = useQueryClient();
  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: ["ads"] });
  }
  return (
    <AlertDialog>
      <div className="space-x-2">
        <EditAdsForm ads={ads} />
        <AlertDialogTrigger asChild>
          <ActionButton actionType="delete" />
        </AlertDialogTrigger>
      </div>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you 100% sure that you want to delete the ads name with{" "}
            {ads.product}?
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
                const res = mutateAsync(ads?._id);
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
