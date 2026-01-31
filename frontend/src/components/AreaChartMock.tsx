import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Award } from "lucide-react";

const mockData = [
  { mes: "Ene", certificaciones: 8 },
  { mes: "Feb", certificaciones: 12 },
  { mes: "Mar", certificaciones: 15 },
  { mes: "Abr", certificaciones: 18 },
  { mes: "May", certificaciones: 23 },
  { mes: "Jun", certificaciones: 28 },
];

export default function AreaChartMock() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col border border-gray-100 hover:border-purple-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Award className="w-5 h-5 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          Certificaciones Ambientales
        </h3>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={mockData}
            margin={{ top: 5, right: 25, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} width={40} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="certificaciones"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.6}
              name="Certificaciones Emitidas"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
