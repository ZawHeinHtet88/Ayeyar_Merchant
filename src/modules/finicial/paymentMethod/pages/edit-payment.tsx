import BackButton from "@/components/ui/back-btn";
import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router";
import { useGetPaymentQuery } from "../hooks/queries";
import { PaymentForm } from "../ui/components/form";

const EditPayment = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPaymentQuery(id ?? "");

  if (isLoading) return "loading...";

  return (
    <div className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[
          { label: "Payments", href: "/dashboard/financial/payments" },
          { label: "Edit", href: "/dashboard/financial/payments/edit/" + id },
        ]}
      />
      <Card>
        <CardHeader>
          <CardTitle className=" flex items-center gap-2">
            <BackButton />
            <span>Edit Payment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PaymentForm mode="edit" payment={data?.data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditPayment;
