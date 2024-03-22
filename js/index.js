const contenedorTarjetas = document.getElementById("productos-container");
const notificacion = document.getElementById("notificacion");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos) {
  productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList = "tarjeta-producto"
    nuevaBicicleta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Bicicleta 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click", () => {
      agregarAlCarrito(producto);
      mostrarNotificacion();
    });
  });
}

// function mostrarNotificacion() {
//     notificacion.classList.remove("oculto");
//     setTimeout(() => {
//         notificacion.classList.add("oculto");
//     }, 2000); // Mostrar la notificación durante 2 segundos
// }
function mostrarNotificacion() {
  alertify.success('Agregado con éxito');
}

crearTarjetasProductosInicio(bicicletas);
