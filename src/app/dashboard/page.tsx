import SalesChart from "@/components/molecules/SalesChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">📊 Sales Dashboard</h1>
      <SalesChart />
    </main>
  );
}
