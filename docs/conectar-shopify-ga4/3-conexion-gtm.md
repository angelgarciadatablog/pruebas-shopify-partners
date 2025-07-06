# ¿Cómo trackear eventos de ecommerce en Shopify con Google Analytics 4 (GA4)? - OPCION 3

## 3) Conexión a GA4 usando Google Tag Manager (GTM)


Conectar una tienda de shopify con Google Tag Manager (GTM) requiere que se inserte dos códigos de seguimiento (brindado por la cuenta de GTM) en la web, en el caso de shopify, se tiene que insertar en la parte de theme liquid, en la etiqueta <head> y la etiqueta <body>


### ¿Qué necesitas?
- Una cuenta activa de GA4 (google analytics 4)
- Una cuenta activa de GTM (google tag manager)
- Acceso al editor del tema en tu tienda de Shopify

### ¿Cómo funciona?
Ese código va a trackear los eventos del sitio web en la plataforma de GTM y luego serán enviados a GA4 por medio de etiquetas (que se convertirán en eventos)

### Requerimientos
Para poder trackear eventos de ecommerce vas a necesitar conectar la aplicación "google & youtube", sin embargo, esta conección te va a pedir una propiedad de google analytics 4 para enviar los eventos de ecommerce.   
**Se recomienda tener una propiedad de GA4 (propiedad 1 - GXXXXX1) para recibir los eventos automáticos de ecommerce y otra propiedad aparte de GA4 (propiedad 2 - (GXXXXX2) para recibir los eventos creados desde GTM). Esto es para evitar que se dupliquen los eventos en una sola propiedad de GA4.**


### ¿Qué eventos puedes capturar?
Si previamente no has conectado la aplicación "google & youtube" en tu tienda, no podras capturar eventos de ecommerce y solo te limitarás a recibir eventos básicos como vistas de páginas, clicks, entre otroas.


### Limitaciones
**Solo puedes capturar eventos hasta antes de la página del checkout, es decir, no se puede medir el mismo checkout ni purchase desde desde GTM directamente**


### Solución alternativa para medir el evento de purchase desde GTM para enviarlo a GA4
No es recomendable usar esta opción, es preferible medir el purchase con la propiedad de GA4 conectada con la aplicación de "google y youtube" o con la propiedad que recibía eventos desde un código personalizado (client_events) (pixel personalizado). Debido a que ambas se recibe el evento de una manera más directa.  
Esta es solo una alternativa para practicar GTM -> Revisar la solución prupuesta:

