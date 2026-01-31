# Dashboard de Asesorías Ambientales

Dashboard responsive de visualización de datos para consultoría ambiental. Construido con React + TypeScript en el frontend y FastAPI en el backend.

## Stack Tecnológico

**Backend**

- FastAPI 0.115.6
- Python 3.x
- Uvicorn 0.34.0

**Frontend**

- React 19
- TypeScript 5.9.3
- Vite 7.2.4
- Tailwind CSS 4.1.18
- Recharts 3.7.0
- lucide-react

## Características

- 6 visualizaciones de datos (gráficos de línea, barras, circular, área, métricas y tabla)
- 1 gráfico conectado a API REST, 5 componentes con datos estáticos
- Layout responsive: 1 columna (móvil), 2 columnas (tablet), 3 columnas (desktop)
- Diseño moderno con gradientes, iconos profesionales y efectos hover
- API REST con documentación automática Swagger

## Instalación

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
python main.py
```

Servidor: `http://localhost:8000`  
Documentación: `http://localhost:8000/docs`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación: `http://localhost:5173`

## Estructura del Proyecto

```
├── backend/
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── RealTimeChart.tsx
│   │   │   ├── BarChartMock.tsx
│   │   │   ├── PieChartMock.tsx
│   │   │   ├── AreaChartMock.tsx
│   │   │   ├── MetricsCard.tsx
│   │   │   └── DataTable.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
└── README.md
```

## API Endpoint

**GET** `/api/chart-data`

Retorna datos mensuales de auditorías ambientales y emisiones reducidas (12 meses).

```json
{
  "data": [
    {
      "month": "Enero",
      "auditorias": 45,
      "emisiones_reducidas": 320
    }
  ]
}
```

## 🎯 Tema: Asesorías Estratégicas Ambientales

Todo el dashboard está contextualizado en consultoría ambiental:

- 🌿 Auditorías ambientales
- 💨 Reducción de emisiones
- 🏆 Certificaciones ISO y ambientales
- ♻️ Gestión de proyectos ecológicos
- 📊 Métricas de sostenibilidad

## 📱 Breakpoints

- **Móvil**: < 768px → 1 columna
- **Tablet**: 768px - 1023px → 2 columnas
- **Desktop**: ≥ 1024px → 3 columnas
