
/* variables */
const precio = 400000;
let precioSpan = document.querySelector("#precio-inicial");
precioSpan.innerHTML = precio;
let valortotalSpan = document.querySelector("#valor-total");
let pedido  = 0;
let cantidad= 0;

/*funciones*/
function ActualizarPedidoPrecio(pedido,precio){
    return pedido * precio;
}
function sumar() {
    pedido += 1;
    cantidad = document.querySelector("#cantidad");
    cantidad.innerHTML = pedido;
    valortotalSpan.innerHTML = ActualizarPedidoPrecio(pedido,precio);
    return 0;
}
function restar() {
    if (pedido > 0) {
        pedido -= 1;
    }
    cantidad = document.querySelector("#cantidad");
    cantidad.innerHTML = pedido;
    valortotalSpan.innerHTML = ActualizarPedidoPrecio(pedido,precio);
    return 0;
}