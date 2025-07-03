# ¿Qué es el Datalayer?

Imagina que tu sitio web es una oficina y las herramientas de análisis como Google Analytics o Facebook Pixel son diferentes departamentos que necesitan ser informados cuando algo importante sucede.
- El dataLayer (capa de datos) es como el sistema de mensajería interna o el tablón de anuncios de esa oficina. Es un lugar central y estandarizado donde se publican los mensajes importantes.
- El comando dataLayer.push() es la acción de enviar un nuevo mensaje a ese sistema de mensajería. Es como si un empleado fuera al tablón de anuncios y colgara una nueva nota para que todos la vean.

### Definición Técnica dataLayer.push()
dataLayer.push() es un comando de JavaScript que se utiliza para "empujar" o añadir información estructurada a un objeto llamado dataLayer.
El dataLayer es esencialmente un arreglo (una lista) de JavaScript que sirve como una capa intermediaria entre tu sitio web y tus herramientas de marketing o análisis, especialmente Google Tag Manager (GTM).

### ¿Cómo Funciona y Por Qué es Tan Importante?
Su función principal es desacoplar tu sitio web de las herramientas de seguimiento.

- SIN dataLayer:
Si quieres enviar información a Google Analytics y a Facebook, tendrías que instalar y configurar dos códigos de seguimiento diferentes en tu web. Si mañana quieres añadir un tercero, tienes que volver a modificar el código de tu web. Es ineficiente y desordenado.

- CON dataLayer:
Tu Sitio Web Informa cuando algo importante ocurre (como un clic, una compra o un inicio de sesión), tu sitio web no habla directamente con Google Analytics.
Simplemente publica un mensaje en el dataLayer: dataLayer.push({'event': 'purchase', 'value': 99.50});
(Traducción: "¡Acaba de ocurrir una compra por $99.50!") Google Tag Manager Escucha: GTM está constantemente monitoreando el dataLayer. Cuando ve que se ha añadido un nuevo mensaje (gracias al .push()), lo lee.
GTM Actúa: Basado en el contenido de ese mensaje (especialmente la clave 'event'), GTM decide qué hacer. Por ejemplo: "¡He visto el evento 'purchase'! Según mis reglas, debo enviar el valor de la compra a Google Analytics y también notificar al Píxel de Facebook".

Ejemplo:
```javascript
dataLayer.push({
    'event': 'login',
    'new_client': 'true',
    'demo': 'true'     
});
```
- Acción: dataLayer.push()
- Mensaje enviado: Un objeto {...} que contiene tres datos.
- Evento clave: 'event': 'login'. Esto es lo que GTM usará como "activador" o "disparador".
- Información adicional: 'new_client': 'true' y 'demo': 'true'. Estos son detalles extra que GTM puede leer y enviar a donde sea necesario.

### En Resumen
dataLayer.push() es el comando que usas en el código de tu web para enviar datos de eventos y variables a la capa de datos (dataLayer), que actúa como un puente de comunicación para que Google Tag Manager pueda recoger esa información y distribuirla a todas tus herramientas de análisis y marketing de forma ordenada y centralizada.

