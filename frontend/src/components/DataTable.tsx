import { TreePine } from "lucide-react";

export default function DataTable() {
  const tableData = [
    {
      proyecto: "Planta Solar XYZ",
      reduccion: 450,
      estado: "Certificado",
    },
    {
      proyecto: "Reciclaje Industrial",
      reduccion: 320,
      estado: "En Proceso",
    },
    {
      proyecto: "Gestión Hídrica",
      reduccion: 180,
      estado: "Certificado",
    },
    {
      proyecto: "Reforestación",
      reduccion: 890,
      estado: "Certificado",
    },
    {
      proyecto: "Eficiencia Energética",
      reduccion: 120,
      estado: "Pendiente",
    },
  ];

  const getStatusColor = (estado: string) => {
    switch (estado) {
      case "Pendiente":
        return "bg-yellow-100 text-yellow-700";
      case "En Proceso":
        return "bg-blue-100 text-blue-700";
      case "Certificado":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col border border-gray-100 hover:border-rose-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-rose-100 rounded-lg">
          <TreePine className="w-5 h-5 text-rose-600" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
          Proyectos Ambientales
        </h3>
      </div>
      <div className="overflow-y-auto flex-1 min-h-0">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-2 font-semibold text-gray-700">
                Proyecto
              </th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">
                Reducción CO₂
              </th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 px-2 text-gray-900">{row.proyecto}</td>
                <td className="py-3 px-2 text-center text-gray-700">
                  {row.reduccion} ton
                </td>
                <td className="py-3 px-2 text-center">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(row.estado)}`}
                  >
                    {row.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
