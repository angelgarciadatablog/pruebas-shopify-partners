# 🛠️ Primeros pasos con la API de Shopify

## 📌 ¿Qué necesitamos para usar la API de Shopify y exportar pedidos?
Debes crear una **aplicación personalizada** desde el panel de administración de tu tienda en Shopify.  
Esta app te permitirá obtener las credenciales necesarias para conectarte a la API REST de Shopify.

---

## 🤖 ¿Esta "aplicación" es una app real?
No exactamente. Es un **intermediario seguro** que habilita el acceso a los datos de tu tienda mediante autenticación privada.  
No necesita ser publicada ni subida a la tienda de apps.

---

## 🔐 ¿Qué elementos incluye la API?
Al crear tu app, Shopify te entrega:

- Un **Access Token** (para autenticación moderna)
- Una **API Key** y un **API Secret Key** (en caso uses autenticación básica, poco común hoy)

> ✅ Para consumir datos desde Python, usualmente basta con el **Access Token** incluido en los headers de tus requests.

---

## 📤 ¿Qué datos se pueden obtener desde la API?
Puedes consultar múltiples recursos, dependiendo de los **permisos (scopes)** que hayas activado al crear la app. Algunos ejemplos:

- Pedidos (`orders`)
- Productos (`products`)
- Clientes (`customers`)
- Envíos, devoluciones, pagos, etc.

---

## 🎯 ¿Puedo dar acceso solo a las órdenes?
Sí. Shopify permite configurar la app para acceder **solo a los recursos que elijas**.

> ⚠️ Aunque tu app tenga acceso a varios recursos, **cada uno se consulta de manera independiente**, indicando el recurso deseado en la URL de la API.

---

## 🌐 ¿Qué es el link o URL de la API?
Es la **dirección base** a la que se hace una petición HTTP (GET, POST, etc.) para obtener o enviar datos.

---

## 🧩 ¿Cómo se construye la URL de la API?

```plaintext
https://{NOMBRE_TIENDA}.myshopify.com/admin/api/{VERSION}/{RECURSO}.json


### 🔎 Desglose

| Componente             | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `{NOMBRE_TIENDA}`      | Nombre interno de tu tienda (por ejemplo, `imperfecta-sof`)                 |
| `myshopify.com/admin/api/` | Ruta fija usada para acceder a los recursos                                |
| `{VERSION}`            | Versión de la API (por ejemplo, `2025-07`). Cada versión dura 12 meses.     |
| `{RECURSO}.json`       | Recurso que deseas consultar (`orders.json`, `products.json`, etc.)         |
```

---

## 🧠 Recomendaciones

- Usa una **versión estable y actualizada** de la API (por ejemplo, `2025-07`)
- Consulta la [documentación oficial](https://shopify.dev/docs/api/admin-rest) para conocer los recursos disponibles y su estructura
- Evita usar versiones antiguas (`2024-04`, `2023-10`, etc.) porque pueden dejar de funcionar sin aviso
- Protege tu archivo `.env` usando `.gitignore` para no subir tus tokens a GitHub

---

## 🚧 Ejemplo de URL construida en Python

```python
SHOP_NAME = "imperfecta-sof"
API_VERSION = "2025-07"
BASE_URL = f"https://{SHOP_NAME}.myshopify.com/admin/api/{API_VERSION}"
ORDERS_ENDPOINT = f"{BASE_URL}/orders.json"
```
*Usamos f para crear una f-string, que permite insertar fácilmente variables dentro de una cadena de texto.

  
