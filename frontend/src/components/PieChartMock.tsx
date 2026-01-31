import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Building2 } from "lucide-react";

const mockData = [
  { name: "Industrial", value: 450 },
  { name: "Corporativo", value: 320 },
  { name: "Público", value: 280 },
  { name: "Agroindustrial", value: 220 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

export default function PieChartMock() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-112.5 flex flex-col border border-gray-100 hover:border-amber-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-amber-100 rounded-lg">
          <Building2 className="w-5 h-5 text-amber-600" />
        </div>
        <h3 className="text-xl font-bold bg-linear-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
          Clientes por Sector
        </h3>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mockData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {mockData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
