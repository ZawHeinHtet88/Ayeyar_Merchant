import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useGetAllTypeChartQuery } from "../../hooks/queries";
import { Separator } from "@/components/ui/separator";

export default function TypeChart() {
  const { data } = useGetAllTypeChartQuery();
  return (
    <Card className="border-card">
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
        <CardDescription>Product Category distribution</CardDescription>
      </CardHeader>
      <CardContent>
        {data?.data.map((category, i) => (
          <div key={i} className="flex justify-center items-center gap-2">
            <p className="w-[50%]">
              <div className="w-3 h-3 rounded-full bg-[#FF6384] inline-block mr-2"></div>
              {category.category}
            </p>
            <div className="flex-1 flex items-center gap-2">
              <Progress value={Number(category.percentage)} className=" text" />
              <span>{category.percentage}%</span>
            </div>
          </div>
        ))}
        <Separator className="my-10"/>
        <div className="flex">
          <div className="w-full flex items-center justify-center flex-col text-center">
            <p className="font-bold text-lg">{data?.categories}</p>
            <p className="text-foreground/60">Categories</p>
          </div>
          <div className="w-full flex items-center justify-center flex-col text-center">
            <p className="font-bold text-lg">{data?.coverage}</p>
            <p className="text-foreground/60">Converage</p>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
