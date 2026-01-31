from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any, Union

app = FastAPI(title="Chart Data API")

# Configurar CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Chart Data API - Use /api/chart-data to get chart data"}

@app.get("/api/chart-data")
def get_chart_data() -> Dict[str, List[Dict[str, Union[str, int]]]]:
    """
    Endpoint que retorna datos para un gráfico de línea
    Simula auditorías ambientales y emisiones reducidas durante un año
    """
    data = [
        {"month": "Enero", "auditorias": 12, "emisiones_reducidas": 450},
        {"month": "Febrero", "auditorias": 15, "emisiones_reducidas": 520},
        {"month": "Marzo", "auditorias": 14, "emisiones_reducidas": 480},
        {"month": "Abril", "auditorias": 18, "emisiones_reducidas": 610},
        {"month": "Mayo", "auditorias": 22, "emisiones_reducidas": 730},
        {"month": "Junio", "auditorias": 20, "emisiones_reducidas": 680},
        {"month": "Julio", "auditorias": 25, "emisiones_reducidas": 790},
        {"month": "Agosto", "auditorias": 27, "emisiones_reducidas": 820},
        {"month": "Septiembre", "auditorias": 24, "emisiones_reducidas": 760},
        {"month": "Octubre", "auditorias": 28, "emisiones_reducidas": 880},
        {"month": "Noviembre", "auditorias": 31, "emisiones_reducidas": 950},
        {"month": "Diciembre", "auditorias": 34, "emisiones_reducidas": 1020},
    ]
    
    return {"data": data}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
