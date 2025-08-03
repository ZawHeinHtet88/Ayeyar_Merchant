import BackButton from "@/components/ui/back-btn";
import BreadCrumps from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Merchantform } from "../components/ui/form";

const CreateMerchant = () => {
    return (
        <div className="flex flex-col gap-4">
            <BreadCrumps
                breadcrumbs={[
                    { label: "Merchants", href: "/dashboard/merchants" },
                    { label: "Create", href: "/dashboard/merchants/create" },
                ]}
            />
            <Card>
                <CardHeader>
                    <CardTitle className=" flex items-center gap-2">
                        <BackButton />
                        <span>Create Merchant</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Merchantform mode="create" />
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateMerchant;
