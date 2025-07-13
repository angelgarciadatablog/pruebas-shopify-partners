<!-- 
  📦 Snippet de GTM para reenviar evento 'purchase' desde localStorage
  🔁 Este código debe insertarse en el archivo theme.liquid, justo antes de la etiqueta </body>
-->


<script>
// ✅ Espera a que GTM esté completamente listo para empujar la compra
(function() {

  // Función que revisa si hay una compra guardada en localStorage y la envía a GTM
  function pushPurchaseEvent() {
    const saved = localStorage.getItem("lastPurchase"); // Recupera el objeto guardado

    // Solo continúa si existe "lastPurchase" y el dataLayer está disponible
    if (saved && window.dataLayer) {
      try {
        const parsed = JSON.parse(saved); // Parsea el string JSON a objeto

        // Empuja el evento "purchase" al dataLayer
        window.dataLayer.push({ event: "purchase", ecommerce: parsed });

        console.log("✅ Evento 'purchase' reenviado desde localStorage a GTM:", parsed);

        // Elimina el item del localStorage para evitar que se envíe dos veces
        localStorage.removeItem("lastPurchase");
      } catch (e) {
        // Captura errores al parsear el JSON (por ejemplo, si está corrupto)
        console.error("❌ Error al parsear lastPurchase:", e);
      }
    } else {
      // Si no hay datos o el dataLayer aún no está disponible
      console.log("ℹ️ No se empujó purchase: faltan datos o dataLayer");
    }
  }

  // Espera a que el documento esté completamente cargado
  if (document.readyState === "complete") {
    // Si ya cargó, espera 500ms y ejecuta la función
    setTimeout(pushPurchaseEvent, 500);
  } else {
    // Si aún no cargó, espera al evento load y luego 500ms más
    window.addEventListener("load", function() {
      setTimeout(pushPurchaseEvent, 500);
    });
  }

})();
</script>
