import { EditIcon, EyeIcon, Trash2Icon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  actionType: "view" | "edit" | "delete";
}

const ActionButton = ({ actionType, ...rest }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {actionType === "view" ? (
            <Button {...rest} size={"icon"} variant={"default"}>
              <EyeIcon />
            </Button>
          ) : actionType === "edit" ? (
            <Button {...rest} className="bg-orange-600 hover:bg-orange-500" size={"icon"} >
              <EditIcon />
            </Button>
          ) : (
            <Button {...rest} size={"icon"} variant={"destructive"}>
              <Trash2Icon />
            </Button>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p className="captilize">{actionType}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionButton;
