import RealTimeChart from "./components/RealTimeChart";
import BarChartMock from "./components/BarChartMock";
import PieChartMock from "./components/PieChartMock";
import AreaChartMock from "./components/AreaChartMock";
import MetricsCard from "./components/MetricsCard";
import DataTable from "./components/DataTable";
import { Leaf } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700 shadow-xl overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Leaf className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white tracking-tight">
                Dashboard Ambiental
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        {/* Grid Responsive: 1 columna (móvil), 2 columnas (tablet), 3 columnas (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gráfico 1: CON datos reales del backend */}
          <RealTimeChart />

          {/* Gráficos 2-6: Mock/Estáticos */}
          <BarChartMock />
          <PieChartMock />
          <AreaChartMock />
          <MetricsCard />
          <DataTable />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-600">
            Desarrollado usando{" "}
            <span className="font-semibold text-blue-600">React</span> ·{" "}
            <span className="font-semibold text-blue-500">TypeScript</span> ·{" "}
            <span className="font-semibold text-emerald-500">Tailwind CSS</span>{" "}
            · <span className="font-semibold text-purple-500">Recharts</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
