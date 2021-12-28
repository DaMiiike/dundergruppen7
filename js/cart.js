let cart = document.querySelectorAll('.add-cart');

let cartProducts = [
    {
        name: 'Pink Wonder Bottle',
        price: 299,
        inCart: 0,
        img: '/img/product_pic13.png',
    },
    {
        name: 'Blue Wonder Bottle',
        price: 299,
        inCart: 0,
        img: '/img/product_pic10.png',
    },
    {
        name: 'Green Wonder Bottle',
        price: 299,
        inCart: 0,
        img: '/img/product_pic11.png',
    },
    {
        name: 'Red Wonder Bottle',
        price: 199,
        inCart: 0,
        img: '/img/product_pic12.png',
    },
];

for (let i=0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(cartProducts[i]);
        totalCost(cartProducts[i]);
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
// ================ Adding products to cart in localstorage
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
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    let totalCartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-products");
    
    
    console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
<<<<<<< HEAD
            <span>${item.name}</span>
            <span>${item.price} kr</span>
            <span>${item.inCart} st</span>
            <span>${item.inCart * item.price} kr</span>
=======
                <img src="${item.img}"/>
                <span>${item.name}</span>
                <span>${item.price} kr</span>
                <span>${item.inCart} st</span>
                <span>${item.inCart * item.price} kr</span>
>>>>>>> main
            </div>
            
            `;
        });
        
        productContainer.innerHTML += `
        <div class="cartTotal">
<<<<<<< HEAD
        <span>Total Cart Price ${totalCartCost}</span>
=======
            <span>Total Cart Price ${totalCartCost} kr</span>
>>>>>>> main
        </div>
        <a href="checkout.html">
        <button class="buyNow cart-purchase-btn">Purchase</button>
        </a>
        `;
        
    }
}


onLoadCartNumbers();
displayCart();

function userInfo() {
    let h1 = document.querySelector(".products-container");
    h1.innerHTML = "Thank you for your purchase! 🥳";
  }
  let userButton = document.querySelector("button");
  userButton.addEventListener("click", userInfo);