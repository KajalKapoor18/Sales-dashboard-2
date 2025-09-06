// src/utils/fetchSales.ts
export async function fetchSalesData(): Promise<{ year: number; sales: number }[]> {
    const res = await fetch("/api/sales"); // change to your API if external
    if (!res.ok) {
      throw new Error("Failed to fetch sales data");
    }
    return res.json();
  }
  