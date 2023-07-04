// JavaScript Document

function comprar() {
	let validado = false
do{
	let productoseleccionado = prompt ("ingrese el producto que desea comprar")
	if (productoseleccionado === "silicona","reloj","auriculares") {
	validado = true
		alert ("el prosucto que usted va a comprar es " + productoseleccionado)
	
	}

 else{
	 alert("el producto que eligio no existe o no esta disponible")
 }
}while (!validado)
}
comprar()