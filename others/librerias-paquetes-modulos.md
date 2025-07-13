# Jerarquía
```plaintext
Librería
 └── Paquete (archivo __init__.py )
      ├── Módulo (archivo .py)
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
| 10 | os                      | 📌 Acceso al sistema operativo: rutas, variables, entorno, etc.  (no se installa, viene incluído con pyhton      |
| 11 | google-cloud-bigquery  | Cliente oficial para conectarse y consultar BigQuery desde Python.              |
| 12 | pandas-gbq             | Permite leer y escribir datos entre pandas y BigQuery fácilmente.               |
| 13 | sqlalchemy              | Conexión a bases de datos SQL mediante un ORM flexible.                         |
| 14 | pyarrow                 | Lectura/escritura de formatos columnares (usado en BigQuery y Parquet).         |
| 15 | jupyter                 | Ejecutar y editar notebooks interactivos en el navegador.                       |


---

# Paquetes y subpaquetes
Un paquete es una carpeta que contiene uno o más módulos, y permite organizar el código de forma jerárquica. Para que una carpeta se considere un paquete, debe contener un archivo especial llamado __init__.py (aunque puede estar vacío).


ejemplo - paquete principal
```plaintext
mi_libreria/                 ← librería (carpeta raíz del proyecto)
└── mi_paquete/              ← paquete principal
    ├── __init__.py          ← indica que esta carpeta es un paquete
    ├── modulo1.py           ← módulo directo
    └── modulo2.py           ← módulo directo
```


ejemplo paquete principal y subpaquetes
```plaintext
mi_libreria/                 ← librería (carpeta raíz del proyecto)
└── mi_paquete/              ← paquete principal
    ├── __init__.py          ← indica que esta carpeta es un paquete
    ├── modulo1.py           ← módulo directo
    ├── modulo2.py           ← módulo directo
    ├── subpaquete1/         ← subpaquete
    │   ├── __init__.py      ← indica que esta carpeta es un subpaquete
    │   ├── modulo_a.py      ← módulo dentro del subpaquete
    │   └── modulo_b.py      ← módulo dentro del subpaquete
    └── subpaquete2/         ← otro subpaquete
        ├── __init__.py      ← indica que esta carpeta es un subpaquete
        ├── modulo_x.py      ← módulo dentro del subpaquete
        └── modulo_y.py      ← módulo dentro del subpaquete
```


---


# Ejemplo principales


## ejemplo 1 - pandas
```plaintext
pandas (Librería)
 └── pandas (Paquete principal)
      ├── __init__.py          ← Paquete principal
      ├── core/ (Subpaquete)
      │    ├── __init__.py     ← Subpaquete
      │    ├── frame.py (Módulo)
      │    └── DataFrame() (Clase)
      ├── io/ (Subpaquete)
      │    ├── __init__.py     ← Subpaquete
      │    ├── parsers.py (Módulo)
      │    └── read_csv(), read_excel() (Funciones)
      └── plotting/ (Subpaquete)
           ├── __init__.py     ← Subpaquete
           └── _core.py (Módulo)
```
*Se importa solo el paquete principal
```python
import pandas as pd
```


## ejemplo 2 - numpy
```
numpy (Librería)
 └── numpy (Paquete principal)
      ├── __init__.py          ← Paquete principal
      ├── core/ (Subpaquete)
      │    ├── __init__.py     ← Subpaquete
      │    ├── numeric.py (Módulo)
      │    └── array(), zeros(), ones() (Funciones)
      ├── random/ (Subpaquete)
      │    ├── __init__.py     ← Subpaquete
      │    ├── _generator.py (Módulo)
      │    └── random(), choice(), normal() (Funciones)
      └── linalg/ (Subpaquete)
           ├── __init__.py     ← Subpaquete
           └── solve(), inv(), det() (Funciones)
```
*Se importa solo el paquete principal
```python
import numpy as np
```


## ejemplo 3 - seaborn 
```
seaborn (Librería)
 └── seaborn (Paquete principal)
      ├── __init__.py          ← Paquete principal
      ├── categorical.py (Módulo)
      │    └── boxplot(), violinplot(), barplot() (Funciones)
      ├── relational.py (Módulo)
      │    └── scatterplot(), lineplot() (Funciones)
      ├── distributions.py (Módulo)
      │    └── histplot(), kdeplot() (Funciones)
      └── matrix.py (Módulo)
           └── heatmap(), clustermap() (Funciones)
```
*Se importa solo el paquete principal
```python
import seaborn as sns
```



## ejemplo 4 - matplotlib
```
matplotlib (Librería)
 └── matplotlib (Paquete principal)
      ├── __init__.py          ← Paquete principal
      ├── pyplot.py (Módulo)
      │    └── plot(), show(), figure(), scatter() (Funciones)
      ├── patches.py (Módulo)
      │    └── Rectangle(), Circle(), Polygon() (Clases)
      ├── colors.py (Módulo)
      │    └── to_hex(), to_rgb(), Normalize() (Funciones/Clases)
      └── backends/ (Subpaquete)
           ├── __init__.py      ← Subpaquete
           └── backend_qt5agg.py (Módulo)
```
*Se importa solo un módulo del paquete principal
```python
from matplotlib import pyplot as plt
```




ejemplo 5 - plotly
```
plotly (Librería)
 └── plotly (Paquete principal)
      ├── __init__.py          ← Paquete principal
      ├── express/ (Subpaquete)
      │    ├── __init__.py     ← Subpaquete
      │    ├── _base.py (Módulo)
      │    └── scatter(), line(), bar() (Funciones)
      ├── graph_objects/ (Subpaquete)
      │    ├── __init__.py     ← Subpaquete
      │    ├── _figure.py (Módulo)
      │    └── Figure(), Scatter(), Bar() (Clases)
      └── io/ (Subpaquete)
           ├── __init__.py     ← Subpaquete
           └── write_html(), show() (Funciones)
```
*Se importa un subpaquete del paquete principal
```python
import plotly.express as px
```



---

## ¿Cómo se usa?
Una libreria puede tener uno o varios paquetes.
Se utiliza **import** para importar paquetes completos
Se utiliza **from** para importar algo específico (puede ser paquete, módulo, función, clase, etc.)


| Nº  | Librería               | ¿Tiene subpaquetes? | ¿Se importa solo el paquete principal?              | Ejemplo de uso                                     |
|-----|------------------------|---------------------|-----------------------------------------------------|----------------------------------------------------|
| 1   | pandas                 | ✅ Sí                | ✅ Sí, suele bastar con el principal                 | `import pandas as pd`                              |
| 2   | numpy                  | ✅ Sí                | ✅ Sí                                                | `import numpy as np`                               |
| 3   | matplotlib             | ✅ Sí (muchos)       | ❌ No, se importa solo lo necesario                  | `from matplotlib import pyplot as plt`             |
| 4   | seaborn                | ✅ Sí                | ✅ Sí                                                | `import seaborn as sns`                            |
| 5   | plotly                 | ✅ Sí (muchos)       | ❌ No, se importa por partes                        | `import plotly.express as px`                      |
| 6   | scikit-learn           | ✅ Sí (muchos)       | ❌ No, se importa por partes                        | `from sklearn.linear_model import LogisticRegression` |
| 7   | statsmodels            | ✅ Sí (muchos)       | ❌ No, se importa según necesidad                   | `from statsmodels.tsa.api import ExponentialSmoothing` |
| 8   | requests               | ❌ No (solo un paquete) | ✅ Sí                                             | `import requests`                                  |
| 9   | python-dotenv          | ❌ No (solo `dotenv`) | ✅ Sí, o solo función específica                    | `from dotenv import load_dotenv`                   |
| 10  | os (standard library)  | ❌ No (es un módulo) | ✅ Sí                                                | `import os`                                        |
| 11  | google-cloud-bigquery  | ✅ Sí (subpaquetes)  | ❌ No, se importa el cliente específico              | `from google.cloud import bigquery`                |
| 12  | pandas-gbq             | ✅ Sí                | ✅ Sí                                                | `import pandas_gbq`                                |
| 13  | SQLAlchemy             | ✅ Sí                | ✅ o parcial, depende del caso                      | `from sqlalchemy import create_engine`             |
| 14  | pyarrow                | ✅ Sí                | ✅ o parcial                                        | `import pyarrow.parquet as pq`                     |
| 15  | jupyter                | ✅ Sí (muchos)       | ⚠️ Generalmente no se importa manualmente            | (se ejecuta como entorno, no se importa en código) |


## Consideraciones
- Cuando llamas a una librería como pandas, numpy o seaborn (que tiene subpaquetes) no se necesita nombrar el subpaquete de la función que estás ejecutando
  ```python
  import pandas as pd #aquí se está importando toda la librería de pandas
  pd.read_csv() #aquí solo se llama a libreria.función
  ```
  
- Cuando llamas a una librería como matplotlib (que también tiene subpaquetes) si se necesita nombrar el subpaquete
  ```python
  from matplotlib import pyplot as plt #aquí se está importando solo el subpaquete pyplot con el alias plt 
  plt.plot() #aquí se llama a subpaquete.función
  ```

## ¿Para qué se usan?

