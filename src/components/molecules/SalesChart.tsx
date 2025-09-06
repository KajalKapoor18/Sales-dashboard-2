"use client";

import { useState } from "react";
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
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 200 },
  { month: "Apr", sales: 278 },
  { month: "May", sales: 189 },
  { month: "Jun", sales: 239 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2", "#FF6F91"];

export default function SalesChart() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState<number>(0);

  // Filter sales above threshold
  const filteredData = data.filter((item) => item.sales >= threshold);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">📊 Sales Chart</h2>

      {/* Filter input */}
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Enter sales threshold"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="border p-2 rounded-md w-56"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setChartType("bar")}
            className={`px-4 py-2 rounded-md ${
              chartType === "bar" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType("line")}
            className={`px-4 py-2 rounded-md ${
              chartType === "line" ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            Line
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={`px-4 py-2 rounded-md ${
              chartType === "pie" ? "bg-pink-600 text-white" : "bg-gray-200"
            }`}
          >
            Pie
          </button>
        </div>
      </div>

      {/* Chart rendering */}
      <div className="w-full h-80">
        <ResponsiveContainer>
          {chartType === "bar" && (
            <BarChart data={filteredData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          )}

          {chartType === "line" && (
            <LineChart data={filteredData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
            </LineChart>
          )}

          {chartType === "pie" && (
            <PieChart>
              <Pie
                data={filteredData}
                dataKey="sales"
                nameKey="month"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {filteredData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
