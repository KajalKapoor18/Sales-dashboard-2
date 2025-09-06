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
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Button from "../atoms/Button";

interface SalesChartProps {
  data: { year: number; sales: number }[];
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4">
        <Button onClick={() => setChartType("bar")}>Bar</Button>
        <Button onClick={() => setChartType("line")}>Line</Button>
        <Button onClick={() => setChartType("pie")}>Pie</Button>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        {chartType === "bar" ? (
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        ) : chartType === "line" ? (
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
          </LineChart>
        ) : (
          <PieChart>
            <Pie
              data={data}
              dataKey="sales"
              nameKey="year"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
