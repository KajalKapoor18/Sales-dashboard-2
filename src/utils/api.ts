export type Sale = {
    year: number;
    value: number;
  };
  
  export async function fetchSales(): Promise<Sale[]> {
    const res = await fetch("http://localhost:3001/sales");
    if (!res.ok) {
      throw new Error("Failed to fetch sales data");
    }
    const data: Sale[] = await res.json();
    return data;
  }
  