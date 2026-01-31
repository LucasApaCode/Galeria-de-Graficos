import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Recycle } from "lucide-react";

const mockData = [
  { categoria: "Energía Renovable", valor: 45 },
  { categoria: "Gestión de Residuos", valor: 38 },
  { categoria: "Huella de Carbono", valor: 52 },
  { categoria: "Agua y Recursos", valor: 29 },
  { categoria: "Biodiversidad", valor: 33 },
];

export default function BarChartMock() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col border border-gray-100 hover:border-emerald-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-100 rounded-lg">
          <Recycle className="w-5 h-5 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
          Proyectos por Área Ambiental
        </h3>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={mockData}
            margin={{ top: 5, right: 25, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="categoria" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} width={40} />
            <Tooltip />
            <Legend
              wrapperStyle={{
                paddingTop: "10px",
                paddingLeft: "25px",
                textAlign: "center",
              }}
            />
            <Bar dataKey="valor" fill="#10b981" name="Proyectos Activos" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
