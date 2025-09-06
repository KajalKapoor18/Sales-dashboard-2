"use client";

import { useState } from "react";
import SalesChart from "../molecules/SalesChart";
import Input from "../atoms/Input";

const mockData = [
  { year: "2022", sales: 45000 },
  { year: "2023", sales: 70000 },
  { year: "2024", sales: 90000 },
];

export default function ChartContainer() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState("");

  const filteredData = threshold
    ? mockData.filter((item) => item.sales >= Number(threshold))
    : mockData;

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button onClick={() => setChartType("bar")} className="btn">
          Bar
        </button>
        <button onClick={() => setChartType("line")} className="btn">
          Line
        </button>
        <button onClick={() => setChartType("pie")} className="btn">
          Pie
        </button>
        <Input value={threshold} onChange={setThreshold} />
      </div>
      <SalesChart type={chartType} data={filteredData} />
    </div>
  );
}
