"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetAllRevenueAndOrdersQuery } from "../../hooks/queries";
import { format } from "date-fns";

export const description = "An area chart with icons";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
    icon: TrendingDown,
  },
  orders: {
    label: "Orders",
    color: "var(--chart-2)",
    icon: TrendingUp,
  },
} satisfies ChartConfig;

export function RevenueOrderChart() {
  const { data } = useGetAllRevenueAndOrdersQuery();

  const { chartData } = data || { chartData: [] };

  return (
    <Card className="border-card">
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle>Revenue & Orders</CardTitle>
          <CardDescription>Monthly performance overview</CardDescription>
        </div>
        {/* <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            Revenue
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            Orders
          </div>
        </div> */}
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickFormatter={(value) => {
                if (Math.abs(value) >= 1_000_000_000)
                  return `${value / 1_000_000_000}B`;
                if (Math.abs(value) >= 1_000_000)
                  return `${value / 1_000_000}M`;
                if (Math.abs(value) >= 1_000) return `${value / 1000}k`;
                return value;
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="var(--color-revenue)"
              fillOpacity={0.4}
              stroke="var(--color-revenue)"
              stackId="a"
            />
            <Area
              dataKey="orders"
              type="natural"
              fill="var(--color-orders)"
              fillOpacity={0.4}
              stroke="var(--color-orders)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
           
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              {format(data?.timestamp ?? new Date(), "MMMM yyyy")}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
