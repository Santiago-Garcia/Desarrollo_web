function mostrarCarrito() {
            let carrito = JSON.parse(localStorage.getItem('cart')) || [];
            let carritoDiv = document.getElementById('carrito');
            let totalSpan = document.getElementById('total');
            let total = 0;

            carritoDiv.innerHTML = '';

            carrito.forEach(product => {
                let productoDiv = document.createElement('div');
                productoDiv.innerHTML = `<p>${product.name} - $${product.price} - Cantidad: ${product.quantity}</p>`;
                carritoDiv.appendChild(productoDiv);

                total += product.price * product.quantity;
            });

            totalSpan.textContent = `$${total}`;
        }

        function finalizarCompra() {
            localStorage.removeItem('cart');
Swal.fire({
position: 'top-end',
icon: 'success',
title: 'Your work has been saved',
showConfirmButton: false,
timer: 1500
});
            mostrarCarrito();
        }

        mostrarCarrito();// JavaScript Document