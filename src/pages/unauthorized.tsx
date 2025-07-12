import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function UnauthorizedPage() {
  return (
    <div className="grid h-screen w-screen place-content-center">
      <h1 className="text-2xl font-bold">401 | Unauthorized Access</h1>
      <Button asChild className="my-2">
        <Link to="/dashboard" className="flex items-center gap-2">
          <ArrowLeft /> Go Back to Dashboard
        </Link>
      </Button>
    </div>
  );
}
