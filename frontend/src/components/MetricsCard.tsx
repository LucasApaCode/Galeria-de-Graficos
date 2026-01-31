import { Sparkles } from "lucide-react";

export default function MetricsCard() {
  const metrics = [
    {
      label: "Emisiones Reducidas",
      value: "8,450 ton",
      change: "+15.2%",
      positive: true,
    },
    {
      label: "Clientes Activos",
      value: "87",
      change: "+12.5%",
      positive: true,
    },
    {
      label: "Tasa de Certificación",
      value: "94.2%",
      change: "+3.1%",
      positive: true,
    },
    {
      label: "Ahorro Energético",
      value: "23.4%",
      change: "+8.7%",
      positive: true,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col border border-gray-100 hover:border-indigo-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Sparkles className="w-5 h-5 text-indigo-600" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
          Métricas de Impacto
        </h3>
      </div>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-3 last:border-b-0"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {metric.value}
                </p>
              </div>
              <span
                className={`text-sm font-semibold px-2 py-1 rounded ${
                  metric.positive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
