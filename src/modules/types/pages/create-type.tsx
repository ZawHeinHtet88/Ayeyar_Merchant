
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from "@/components/ui/drawer";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { TypeForm } from "../components/ui/form";

export const CreateTypeForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={"default"}>
          <PlusCircle /> Create type
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto">
          <TypeForm mode="create" handleOpen={setOpen}/>
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
