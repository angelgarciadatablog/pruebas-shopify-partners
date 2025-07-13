# ¿Cómo realizar un llamado de datos a la API de Shopify con Python?

Este documento explica paso a paso cómo realizar una solicitud (request) a la API de Shopify utilizando Python y el paquete `requests`.

---

## 1. Instalar el paquete `requests`

Abre tu terminal y ejecuta:

```bash
pip install requests
```

---

## 2. Importar los módulos necesarios

```python
import requests
from dotenv import load_dotenv
import os
```

> 🛡️ La librería `python-dotenv` se utiliza para manejar credenciales sensibles como el nombre de la tienda y el token de acceso.

---

## 3. Cargar las variables desde un archivo `.env`

Tu archivo `.env` debería verse así:

```
SHOP_NAME=imperfecta-sof
API_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

En tu script:

```python
load_dotenv()

shop_name = os.getenv("SHOP_NAME")
api_token = os.getenv("API_TOKEN")
```

---

## 4. Definir la versión de la API que deseas usar

```python
api_version = "2025-07"
```

Puedes consultar la versión más reciente aquí:  
[Shopify API Versioning](https://shopify.dev/docs/api/usage/versioning)

---

## 5. Construir la URL base

```python
base_url = f"https://{shop_name}.myshopify.com/admin/api/{api_version}"
```

---

## 6. Crear la URL del endpoint que deseas consultar

Por ejemplo, para consultar las órdenes:

```python
orders_endpoint = f"{base_url}/orders.json"
```

> 📌 Los recursos o endpoints disponibles incluyen:  
> - `orders.json`  
> - `products.json`  
> - `customers.json`  
> - entre otros, según la [documentación oficial de Shopify](https://shopify.dev/docs/api/admin-rest)

---

## 7. Realizar la solicitud GET

```python
headers = {
    "X-Shopify-Access-Token": api_token
}

response = requests.get(orders_endpoint, headers=headers)

# Verificamos el código de respuesta
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"Error {response.status_code}: {response.text}")
```

---

## 🧠 Notas adicionales

- El prefijo `f` en las cadenas `f"..."` indica que se trata de una *f-string*, una forma de formatear cadenas en Python donde se pueden insertar variables directamente dentro del texto.
- Asegúrate de que el token tenga los permisos adecuados en la app privada o personalizada de Shopify.
- Puedes usar Postman para probar primero tus endpoints antes de integrarlos en código.

---

## 📎 Recursos útiles

- [Documentación oficial de Shopify REST Admin API](https://shopify.dev/docs/api/admin-rest)  
