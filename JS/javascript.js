
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const newProduct = {
      name: productName,
      price: price,
      quantity: 1,
    };
    cart.push(newProduct);
  }

  localStorage.setItem('cart', JSON.stringify(cart));

Swal.fire({
position: 'top-end',
icon: 'success',
title: 'Producto agregado. Haga click en el icono del carrito para finalizar la compra',
showConfirmButton: false,
timer: 1500
})
}


