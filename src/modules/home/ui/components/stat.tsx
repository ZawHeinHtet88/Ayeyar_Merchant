import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, type LucideProps } from "lucide-react";

type StatProps = {
  title: string;
  icon: React.ComponentType<LucideProps>; // 👈 Lucide icon type
  data:
    | {
        value: number;
        percentageChange?: number; // optional, if not all stats have this
      }
    | undefined; // refine this later if you know the shape
};

export default function Stat({ title, icon: Icon, data }: StatProps) {
  return (
    <Card className="border-card h-[120px]">
      <CardContent>
        <div className="flex items-center">
          <div className="flex-1 space-y-1">
            <p className="text-sm text-primary">{title}</p>
            <p className="font-semibold text-lg">
              {data?.value.toLocaleString()}
            </p>

            <p className="text-sm text-primary/70">
              <ArrowUp className="inline w-5" />
              <span className="text-green-500">
                {data?.percentageChange}%
              </span>{" "}
              vs last month
            </p>
          </div>

          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <Icon className="w-5 h-5" /> {/* 👈 use it like this */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
