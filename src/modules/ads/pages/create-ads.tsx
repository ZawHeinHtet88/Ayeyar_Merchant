
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { AdsForm } from "../components/ui/form";

export const CreateAdsForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={"default"}>
          <PlusCircle /> Create Ads
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto">
          <DrawerHeader>
            <DrawerTitle>Create a Ads</DrawerTitle>
          </DrawerHeader>
          <AdsForm mode="create" handleOpen={setOpen}/>
          <DrawerFooter className="px-0">
            <DrawerClose asChild>
              <Button className="w-full" type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
