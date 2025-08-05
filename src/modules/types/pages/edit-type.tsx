import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { TypeForm } from "../components/ui/form";
import type { Type } from "../types";

export const EditTypeForm = ({ type }: { type: Type }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size={"icon"} variant={"default"}>
          <Pencil />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto">
          <TypeForm mode="edit" type={type} handleOpen={setOpen} />
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
