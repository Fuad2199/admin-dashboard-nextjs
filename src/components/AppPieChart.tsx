// src/components/AppPieChart.tsx
"use client";

import ChartPieDonutText from "@/shared/components/ui/ChartPieDonutText";
import { TrendingUp } from "lucide-react";


const AppPieChart = () => {
  return (
    <div>
      <div><ChartPieDonutText/></div>
      <div className="mt-4 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </div>
    </div>
  )
}

export default AppPieChart

