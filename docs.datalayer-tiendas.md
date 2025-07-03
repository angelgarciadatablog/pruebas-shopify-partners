# ¿Todas las plataformas de ecommerce envían dataLayer? 

No, no todas las plataformas de eCommerce envían un dataLayer de forma nativa. Algunas como VTEX o Magento lo incluyen por defecto, mientras que otras como Shopify o PrestaShop requieren configuración manual o el uso de aplicaciones externas. La siguiente tabla compara las principales plataformas según su compatibilidad con dataLayer, la facilidad de integración con Google Tag Manager (GTM) y si requieren herramientas adicionales para lograr un seguimiento completo.


| Plataforma           | ¿DataLayer nativo? | Nivel de dificultad   | ¿Permite GTM? | ¿Necesita apps o plugins?         | Observaciones clave                                                                 |
|----------------------|--------------------|------------------------|---------------|------------------------------------|--------------------------------------------------------------------------------------|
| **Shopify**          | ❌ No              | Medio–Alto             | ✅ Sí         | ✅ Apps como Analyzify, Elevar     | Muy estable, pero cerrado sin edición de código                                      |
| **WooCommerce**      | ⚠️ Parcial         | Medio                  | ✅ Sí         | ✅ Plugins como GTM4WP             | Muy flexible si conoces WordPress                                                    |
| **VTEX**             | ✅ Sí              | Medio                  | ✅ Sí         | ❌ (ya integrado)                  | Usa su propio `dataLayer`, bien estructurado para GA4                                |
| **PrestaShop**       | ❌ No              | Medio–Alto             | ✅ Sí         | ✅ Módulos como Tag Manager Pro    | Requiere trabajo técnico o módulos pagos                                             |
| **Tiendanube/TiendaUp** | ❌ No          | Bajo                   | ⚠️ Limitado   | ✅ App GTM limitada                 | Ideal para empezar, pero muy limitada para personalización avanzada                 |
| **Magento**          | ✅ Sí              | Alto                   | ✅ Sí         | ⚠️ A veces requiere módulos extra | Robusta, pensada para empresas grandes (sobre todo Adobe Commerce)                  |
