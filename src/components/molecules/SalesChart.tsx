"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type SalesData = {
  month: string;
  sales: number;
};

const data: SalesData[] = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 500 },
  { month: "Apr", sales: 200 },
  { month: "May", sales: 700 },
  { month: "Jun", sales: 600 },
];

const COLORS = [
  "#8884d8", // Jan
  "#82ca9d", // Feb
  "#ffc658", // Mar
  "#ff7f50", // Apr
  "#0088FE", // May
  "#00C49F", // Jun
];

export default function SalesChart() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState<number>(0);

  const filteredData = data.filter((d) => d.sales >= threshold);

  return (
    <div className="p-4 bg-white shadow rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Sales Chart</h2>

      {/* Controls */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setChartType("bar")}
          className={`px-4 py-2 rounded-lg ${
            chartType === "bar" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Bar
        </button>
        <button
          onClick={() => setChartType("line")}
          className={`px-4 py-2 rounded-lg ${
            chartType === "line" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Line
        </button>
        <button
          onClick={() => setChartType("pie")}
          className={`px-4 py-2 rounded-lg ${
            chartType === "pie" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Pie
        </button>

        {/* Threshold input */}
        <input
          type="number"
          placeholder="Min Sales"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Chart */}
      <div className="w-full h-80">
        <ResponsiveContainer>
          {chartType === "bar" ? (
            <BarChart data={filteredData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          ) : chartType === "line" ? (
            <LineChart data={filteredData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
            </LineChart>
          ) : (
            <PieChart>
              <Pie
                data={filteredData}
                dataKey="sales"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {filteredData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
