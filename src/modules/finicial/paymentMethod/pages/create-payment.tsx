import BackButton from "@/components/ui/back-btn";
import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PaymentForm } from "../ui/components/form";

const CreatePayment = () => {
  return (
    <div className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[
          { label: "Payment", href: "/dashboard/financial/payments" },
          { label: "Create", href: "/dashboard/financial/payments/create" },
        ]}
      />
      <Card>
        <CardHeader>
          <CardTitle className=" flex items-center gap-2">
            <BackButton />
            <span>Create Payment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PaymentForm mode="create" />
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePayment;
