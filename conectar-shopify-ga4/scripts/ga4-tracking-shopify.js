
// 📦 Conexión personalizada de eventos de ecommerce desde Shopify a GA4 con gtag.js 
// Este script captura eventos de comercio electrónico en Shopify como vistas de producto,
// adiciones al carrito, inicio de checkout, información de pago y compras completadas.
// Los eventos se envían directamente a una propiedad específica de Google Analytics 4 utilizando gtag.js, 
// sin necesidad de Google Tag Manager.


// Cargar la biblioteca de gtag.js
//console.log("Cargando script de GTM");
const script = document.createElement('script');
script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-3DYPXLJLLM');
script.setAttribute('async', '');
document.head.appendChild(script);
//console.log("Script de GTM cargado");


// Inicializar gtag y dataLayer
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
//console.log("Función gtag definida");
gtag('js', new Date());
gtag('config', 'G-3DYPXLJLLM');
//console.log("Configuración inicial de GTM completada");


// Evento: Vista de producto
analytics.subscribe("product_viewed", (event) => {
  //console.log("Evento product_viewed disparado", event);
  if (event.data && event.data.productVariant && event.context && event.context.document) {
    const { productVariant } = event.data;
    const imageUrl = productVariant.image ? `https:${productVariant.image.src}` : '';
    gtag("event", "view_item", {
      currency: productVariant.price.currencyCode,
      value: productVariant.price.amount,
      url: event.context.document.location.href,
      item_image: imageUrl,
      items: [
        {
          item_id: productVariant.sku,
          item_name: productVariant.product.title,
          item_variant: productVariant.title,
          currency: productVariant.price.currencyCode,
          item_brand: productVariant.product.vendor,
          price: productVariant.price.amount,
          item_category: productVariant.product.type || '',
          item_image: imageUrl,
        }
      ]
    });
  }
});


// Evento: Producto agregado al carrito
analytics.subscribe("product_added_to_cart", (event) => {
  //console.log("Evento product_added_to_cart disparado", event);
  if (event.data && event.data.cartLine && event.data.cartLine.merchandise) {
    const { merchandise, quantity } = event.data.cartLine;
    const imageUrl = merchandise.image ? `https:${merchandise.image.src}` : '';
    let totalPrice = merchandise.price.amount * quantity;
    gtag("event", "add_to_cart", {
      currency: merchandise.price.currencyCode,
      value: totalPrice.toFixed(2),
      items: [
        {
          item_name: merchandise.product.title,
          item_id: merchandise.sku,
          item_variant: merchandise.title,
          currency: merchandise.price.currencyCode,
          item_brand: merchandise.product.vendor,
          price: merchandise.price.amount,
          quantity: quantity,
          item_category: merchandise.product.type || '',
          item_image: imageUrl
        }
      ]
    });
  }
});


// Función auxiliar para eventos de checkout
function ga4CheckoutEvents(event) {
  //console.log("Generando payload para evento de checkout", event);
  let checkout = event.data.checkout;
  let lineItems = [];

  for (const checkoutLineItem of event.data.checkout.lineItems){
    const imageUrl = checkoutLineItem.variant.image ? `https:${checkoutLineItem.variant.image.src}` : '';
    lineItems.push({
      item_id: checkoutLineItem.variant.sku,
      item_name: checkoutLineItem.title,
      item_variant: checkoutLineItem.variant.title,
      currency: checkoutLineItem.variant.price.currencyCode,
      item_brand: checkoutLineItem.variant.product.vendor,
      price: checkoutLineItem.variant.price.amount,
      quantity: checkoutLineItem.quantity,
      item_category: checkoutLineItem.variant.product.type || '',
      item_image: imageUrl
    });
  }

  let payload = {
    currency: checkout.totalPrice.currencyCode,
    value: checkout.totalPrice.amount,
    items: lineItems
  };
  
  //console.log("Payload generado para evento de checkout", payload);
  return payload;
}


// Evento: Inicio del checkout
analytics.subscribe("checkout_started", (event) => {
  //console.log("Evento checkout_started disparado", event);
  gtag("event", "begin_checkout", ga4CheckoutEvents(event));
});


// Evento: Información de pago enviada
analytics.subscribe("payment_info_submitted", (event) => {
  //console.log("Evento payment_info_submitted disparado", event);
  gtag("event", "add_payment_info", ga4CheckoutEvents(event));
});


// Evento: Compra completada
analytics.subscribe("checkout_completed", (event) => {
  console.log("Evento checkout_completed disparado", event);
  let payload = ga4CheckoutEvents(event);
  let checkout = event.data.checkout;

  payload.transaction_id = checkout.order?.id || checkout.token;
  payload.shipping = checkout.shippingLine?.price.amount || checkout.shipping_line?.price.amount || 0;
  payload.tax = checkout.totalTax?.amount || 0;
  
  gtag("event", "purchase", payload);
});

