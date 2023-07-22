const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const display = document.getElementById('disble')

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

function addToCart(){
    alert("Item is added to cart..")
}

// let cartItems = [];
// let cartTotal = 0;

// function addToCart(productName, productPrice) {
//   cartItems.push({ name: productName, price: productPrice });
//   cartTotal += productPrice;

//   updateCart();
// }

// function updateCart() {
//   const cartItemsElement = document.getElementById('cart-items');
//   const cartTotalElement = document.getElementById('cart-total');

//   cartItemsElement.innerHTML = '';
//   cartItems.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${item.name} - $${item.price}`;
//     cartItemsElement.appendChild(listItem);
//   });

//   cartTotalElement.textContent = cartTotal;
// }