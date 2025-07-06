# ¿Cómo trackear eventos de ecommerce en Shopify con Google Analytics 4 (GA4)? - OPCION 3

## 3) Conexión a GA4 usando Google Tag Manager (GTM)

Conectar una tienda de Shopify con Google Tag Manager (GTM) requiere insertar dos fragmentos de código generados por tu cuenta de GTM dentro del tema de tu tienda. Específicamente, uno va dentro de la etiqueta <head> y otro dentro de la etiqueta <body> del archivo theme.liquid.

### ¿Qué necesitas?
- Una cuenta activa de GA4 (google analytics 4)
- Una cuenta activa de GTM (google tag manager)
- Acceso al editor del tema en tu tienda de Shopify

### ¿Cómo funciona?
Una vez instalados los códigos, GTM podrá capturar los eventos del sitio web y podrá gestionarlos mediante etiquetas. Estas etiquetas enviarán los datos como eventos hacia GA4.

### Recomendación para evitar duplicación de eventos
Para capturar eventos de ecommerce, es necesario instalar la aplicación Google & YouTube en tu tienda de Shopify. Esta app te pedirá vincular una propiedad de GA4 para enviar los eventos automáticamente.

Se recomienda usar dos propiedades de GA4:

- Propiedad 1 (G-XXXXXXX1): conectada a la app Google & YouTube para recibir los eventos automáticos de ecommerce.
- Propiedad 2 (G-XXXXXXX2): configurada desde GTM para recibir eventos personalizados.

Esto evita que se dupliquen eventos en una sola propiedad.


### ¿Qué eventos puedes capturar desde GTM?
Si no has instalado la app Google & YouTube, solo podrás capturar eventos básicos como:

- Vistas de página
- Clics en botones
- Scrolls


### Limitaciones
**⚠️ No es posible medir eventos dentro del checkout ni el evento de "purchase" directamente desde GTM en tiendas Shopify.**
Esto se debe a que Shopify restringe el acceso al entorno del checkout en planes que no son Shopify Plus.


### ¿Existe alguna solución alternativa?
Sí. Aunque no es la opción más recomendable, existe una forma de enviar el evento de "purchase" desde GTM creando un píxel personalizado mediante client events en Shopify e insertando un snippet en el theme.liquid del tema.

La idea consiste en construir manualmente el objeto de compra (payload) y guardarlo en el localStorage bajo la clave "lastPurchase" (esto lo realiza el píxel personalziado). Luego, un fragmento de código (***snippet***) insertado en ```theme.liquid``` se ejecuta en cualquier página donde GTM esté activo y realiza lo siguiente:

  - Revisa si hay un "lastPurchase" en localStorage.
  - Si lo encuentra, lo empuja al dataLayer.
  - Finalmente, lo elimina del localStorage para evitar duplicaciones.

Requisitos para implementar esta solución:
  - Crear un píxel personalizado mediante client events en Shopify. [Ver código](../../scripts/purchase-local-storage.js)
  - Crear e insertar un snippet en el archivo theme.liquid de tu tienda. [Ver código](../../scripts/snippet-push-purchase-event.js)

### Sin embargo, se recomienda usar:

- La propiedad conectada con la app Google & YouTube
- O la propiedad que recibe eventos mediante código personalizado (client_events o píxeles manuales)

Ambas opciones ofrecen una forma más directa y confiable de medir la conversión.



