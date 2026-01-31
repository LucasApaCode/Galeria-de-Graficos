import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

interface ChartDataPoint {
  month: string;
  auditorias: number;
  emisiones_reducidas: number;
}

export default function RealTimeChart() {
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/chart-data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener datos");
        }
        return response.json();
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Auditorías vs Emisiones Reducidas 2024
          </h3>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-gray-500">Cargando datos...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Auditorías vs Emisiones Reducidas 2024
          </h3>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col border border-gray-100 hover:border-blue-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <TrendingUp className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Auditorías vs Emisiones Reducidas 2024
        </h3>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 25, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="mes"
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis tick={{ fontSize: 12 }} width={40} />
            <Tooltip />
            <Legend
              wrapperStyle={{
                paddingTop: "10px",
                textAlign: "center",
                paddingLeft: "25px",
              }}
              align="center"
              verticalAlign="bottom"
              iconType="line"
            />
            <Line
              type="monotone"
              dataKey="auditorias"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Auditorías Realizadas"
            />
            <Line
              type="monotone"
              dataKey="emisiones_reducidas"
              stroke="#10b981"
              strokeWidth={2}
              name="Emisiones Reducidas (ton CO₂)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
