// JavaScript Document

function comprar() {
	const productos = [
		{ nombre: "disco", precio: 350 },
		{ nombre: "reloj", precio: 5000 },
		{ nombre: "auriculares", precio: 2800 },];

	let validado = false;
	do {
		let productoseleccionado = prompt("Ingrese el producto que desea comprar");

		const productoEncontrado = productos.find(
			(producto) => producto.nombre === productoseleccionado.toLowerCase()
		);
		if (productoEncontrado) {
			validado = true;
			alert("El producto que usted va a comprar es " + productoEncontrado.nombre + " por un valor de $" + productoEncontrado.precio);
		} else {
			alert("El producto que eligió no existe o no está disponible");
		}
	} while (!validado);
}
comprar();