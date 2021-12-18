let cart = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Pink Wonder Bottle',
        price: 299,
        inCart: 0,
    },
    {
        name: 'Blue Wonder Bottle',
        price: 299,
        inCart: 0,
    },
    {
        name: 'Green Wonder Bottle',
        price: 299,
        inCart: 0,
    },
    {
        name: 'Red Wonder Bottle',
        price: 199,
        inCart: 0,
    },
];

for (let i=0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
// ================== Check if there is anything in cart
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
// ================= Amount in Cart
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')
    

    productNumbers = parseInt(productNumbers);
    
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
    
}
// ================ Adding products in localstorage
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems !=null) {
        
        if(cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart +=1; 
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
    } 
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// ================ Total cost
function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');
    console.log("Totala kostnaden är", cartCost);
    console.log(typeof cartCost);
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);

    }

}

onLoadCartNumbers();