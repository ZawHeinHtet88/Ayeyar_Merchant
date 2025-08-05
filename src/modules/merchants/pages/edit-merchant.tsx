import BackButton from "@/components/ui/back-btn";
import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router";
import { Merchantform } from "../components/ui/form";
import { useGetMerchantQuery } from "../hooks/queries";

const EditMerchant = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetMerchantQuery(id ?? "");

  if(isLoading) return "loading..."

  console.log(data?.seller);
  

  return (
    <div className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[
          { label: "Merchants", href: "/dashboard/merchants" },
          { label: "Edit", href: "/dashboard/merchants/edit/" + id },
        ]}
      />
      <Card>
        <CardHeader>
          <CardTitle className=" flex items-center gap-2">
            <BackButton />
            <span>Edit Merchant</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Merchantform mode="edit" merchant={data?.seller} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditMerchant;
