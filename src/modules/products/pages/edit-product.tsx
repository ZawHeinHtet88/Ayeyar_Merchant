import BackButton from "@/components/ui/back-btn";
import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "../components/ui/form";
import { useParams } from "react-router";
import { useGetProductQuery } from "../hooks/queries";

const EditProduct = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetProductQuery(id ?? "");

  if(isLoading) return "loading..."

  return (
    <div className="flex flex-col gap-4">
      <BreadCrumps
        breadcrumbs={[
          { label: "Products", href: "/dashboard/products" },
          { label: "Edit", href: "/dashboard/products/edit/" + id },
        ]}
      />
      <Card>
        <CardHeader>
          <CardTitle className=" flex items-center gap-2">
            <BackButton />
            <span>Edit Product</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm mode="edit" product={data?.data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProduct;
