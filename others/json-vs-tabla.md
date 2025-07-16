# Diferencias entre Tablas y Archivos JSON
En el mundo del análisis de datos, es común trabajar con tablas estructuradas (como CSV, Excel o bases de datos relacionales) y t
ambién con archivos JSON (típicos en APIs, logs o sistemas modernos como Shopify o Google Analytics). Aunque ambos almacenan datos, 
tienen estructuras muy distintas.

## 1. Estructura de los datos

| Característica     | Tabla tradicional            | JSON                              |
|--------------------|------------------------------|-----------------------------------|
| Tipo de estructura | Plana (filas y columnas)     | Jerárquica (clave-valor)          |
| Formato de los datos | Valores simples por celda    | Objetos, listas o valores simples |
| Profundidad        | Una sola capa                | Múltiples niveles anidados        |
| Homogeneidad       | Filas con mismas columnas    | Objetos con claves variables      |

---

## 2. Ejemplo visual

### Tabla

| id | nombre | producto | precio |
|----|--------|----------|--------|
| 1  | Angel  | Vestido  | 100    |
| 2  | Camila | Zapatos  | 200    |

### JSON equivalente

```json
[
  {
    "id": 1,
    "cliente": {
      "nombre": "Angel"
    },
    "producto": {
      "nombre": "Vestido",
      "precio": 100
    }
  },
  {
    "id": 2,
    "cliente": {
      "nombre": "Camila"
    },
    "producto": {
      "nombre": "Zapatos",
      "precio": 200
    }
  }
]
```

## 3. Conclusión
Las tablas son simples, fáciles de leer y procesar, pero limitadas para representar relaciones complejas.
Los JSON son más potentes para modelar datos del mundo real (como pedidos, productos, usuarios), pero requieren más trabajo para ser analizados en herramientas como Excel o pandas.
