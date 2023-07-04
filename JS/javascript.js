// JavaScript Document

function comprar() {
	let validado = false;

	do {
		let productoseleccionado = prompt("Ingrese el producto que desea comprar");

		if (productoseleccionado === "disco") {
			validado = true;
			alert("El producto que usted va a comprar es " + productoseleccionado + " por un valor de $350");
		} else if (productoseleccionado === "reloj") {
			validado = true;
			alert("El producto que usted va a comprar es " + productoseleccionado + " por un valor de $5000");
		} else if (productoseleccionado === "auriculares") {
			validado = true;
			alert("El producto que usted va a comprar es " + productoseleccionado + " por un valor de $2800");
		} else {
			alert("El producto que eligió no existe o no está disponible");
		}
	} while (!validado);
}

comprar();
