import BackButton from "@/components/ui/back-btn";
import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "../components/ui/form";

const CreateProduct = () => {
    return (
        <div className="flex flex-col gap-4">
            <BreadCrumps
                breadcrumbs={[
                    { label: "Products", href: "/dashboard/products" },
                    { label: "Create", href: "/dashboard/products/create" },
                ]}
            />
            <Card>
                <CardHeader>
                    <CardTitle className=" flex items-center gap-2">
                        <BackButton />
                        <span>Create Product</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductForm mode="create" />
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateProduct;
