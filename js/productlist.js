

let productPage = document.querySelectorAll('');

let productList = [
    {
        name: 'Pink Wonder Bottle',
        price: 299,
        volume: '600 ml',
        description: 'The Wonder Bottle is a 600 ml stainless steel thermal bottle that will keep its content warm and cold for longer than the average waterbottle can'
            + 'It comes with an understated carrying handle to keep it easy on-the-go and a various choice of colors'
            + 'Which one will be your new favorite to keep you hydrated all day every day?',
        material: 'Produced in Sweden in stainless steel' + 'BPA-free & toxin free',
        features: 'Capacity to keep both warm and cold beverages',
        inCart: 0,
        img: '/img/product_pic13.png',
    },

    {
        name: 'Blue Wonder Bottle',
        price: 299,
        volume: '600 ml',
        description: 'The Wonder Bottle is a 600 ml stainless steel thermal bottle that will keep its content warm and cold for longer than the average waterbottle can'
            + 'It comes with an understated carrying handle to keep it easy on-the-go and a various choice of colors'
            + 'Which one will be your new favorite to keep you hydrated all day every day?',
        material: 'Produced in Sweden in stainless steel' + 'BPA-free & toxin free',
        features: 'Capacity to keep both warm and cold beverages',
        inCart: 0,
        img: '/img/product_pic10.png',
    },
    {
        name: 'Green Wonder Bottle',
        price: 299,
        volume: '600 ml',
        description: 'The Wonder Bottle is a 600 ml stainless steel thermal bottle that will keep its content warm and cold for longer than the average waterbottle can'
            + 'It comes with an understated carrying handle to keep it easy on-the-go and a various choice of colors'
            + 'Which one will be your new favorite to keep you hydrated all day every day?',
        material: 'Produced in Sweden in stainless steel' + 'BPA-free & toxin free',
        features: 'Capacity to keep both warm and cold beverages',
        inCart: 0,
        img: '/img/product_pic11.png',
    },
    {
        name: 'Red Wonder Bottle',
        price: 299,
        volume: '600 ml',
        description: 'The Wonder Bottle is a 600 ml stainless steel thermal bottle that will keep its content warm and cold for longer than the average waterbottle can'
            + 'It comes with an understated carrying handle to keep it easy on-the-go and a various choice of colors'
            + 'Which one will be your new favorite to keep you hydrated all day every day?',
        material: 'Produced in Sweden in stainless steel' + 'BPA-free & toxin free',
        features: 'Capacity to keep both warm and cold beverages',
        inCart: 0,
        img: '/img/product_pic12.png'
    },
];

function showProducts() {
    let productItems = localStorage.getItem("productDisplay");
    let totalCartCost = localStorage.getItem('totalCost');
    productItems = JSON.parse(productItems);
    let productContainer = document.querySelector(".cart-products");
    

    console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="productPages">
                <span>${item.name}</span>
                <span>${item.price} kr</span>
                <span>${item.inCart} st</span>
                <span>${item.inCart * item.price} kr</span>
            </div>
            
            `;
        });

        productContainer.innerHTML += `
        <div class="cartTotal">
            <span>Total Cart Price ${totalCartCost}</span>
        </div>
        `;

    }
}