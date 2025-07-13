# Jerarquía
```plaintext
Librería
 └── Paquete
      ├── Módulo
      │    └── Funciones, Clases, Variables
```

# Librería
Una librería es el nivel más alto dentro de la jerarquía de organización de código en Python.
Generalmente está compuesta por uno o varios paquetes y módulos, y agrupa funcionalidades diseñadas para resolver un tipo específico de problema 
(como hacer solicitudes web, análisis de datos, visualización, etc.).

## ¿Cómo se instalan?
Las librerías se instalan con el gestor de paquetes pip:
```python
pip install nombre_libreria
```

## ¿Dónde se instalan?
Si estás fuera de un entorno virtual, se instalan globalmente en tu sistema.  
Si estás dentro de un entorno virtual, se instalan solo en ese entorno. (Esto es muy útil para evitar conflictos entre proyectos que requieren versiones distintas de la misma librería).

## Algunos ejemplos

| Nº | Librería                | ¿Para qué sirve?                                                                 |
|----|--------------------------|----------------------------------------------------------------------------------|
| 1  | pandas                   | Manipulación de datos tabulares (DataFrames).                                   |
| 2  | numpy                    | Operaciones numéricas con arrays y matrices.                                     |
| 3  | matplotlib               | Gráficos básicos (líneas, barras, áreas, etc.).                                  |
| 4  | seaborn                 | Visualización estadística elegante y avanzada.                                  |
| 5  | plotly                   | Visualizaciones interactivas (útil para dashboards).                            |
| 6  | scikit-learn            | Machine Learning tradicional (clasificación, regresión, clustering).            |
| 7  | statsmodels             | Análisis estadístico, modelos y pruebas de hipótesis.                           |
| 8  | requests                | 📌 Para hacer solicitudes HTTP, como a la API de Shopify.             |
| 9  | python-dotenv          | 📌 Para cargar variables desde un archivo `.env`.                      |
| 10 | os                      | 📌 Acceso al sistema operativo: rutas, variables, entorno, etc.        |
| 11 | google-cloud-bigquery  | Cliente oficial para conectarse y consultar BigQuery desde Python.              |
| 12 | pandas-gbq             | Permite leer y escribir datos entre pandas y BigQuery fácilmente.               |
| 13 | sqlalchemy              | Conexión a bases de datos SQL mediante un ORM flexible.                         |
| 14 | pyarrow                 | Lectura/escritura de formatos columnares (usado en BigQuery y Parquet).         |
| 15 | jupyter                 | Ejecutar y editar notebooks interactivos en el navegador.                       |




