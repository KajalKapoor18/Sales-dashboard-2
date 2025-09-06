"use client";

import React, { useState } from "react";
import SalesChart from "../../components/molecules/SalesChart";

const mockSalesData = [
  { year: 2022, sales: 120 },
  { year: 2023, sales: 150 },
  { year: 2024, sales: 200 },
];

const DashboardPage: React.FC = () => {
  const [threshold, setThreshold] = useState<number>(0);

  // Filter the sales data based on threshold
  const filteredData = mockSalesData.filter((item) => item.sales >= threshold);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>

      {/* Filter input */}
      <div className="mb-6 flex items-center gap-4">
        <label htmlFor="threshold" className="font-medium">
          Minimum Sales:
        </label>
        <input
          id="threshold"
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Chart */}
      <SalesChart data={filteredData} />

      {/* Optional: show message if no data */}
      {filteredData.length === 0 && (
        <p className="mt-4 text-red-500">No sales data above this threshold.</p>
      )}
    </div>
  );
};

export default DashboardPage;
