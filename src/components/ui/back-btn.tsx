import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Button variant={"ghost"} size={"icon"} onClick={() => navigate(-1)}>
            <ArrowLeft className="size-6" />
        </Button>
    );
};

export default BackButton;
