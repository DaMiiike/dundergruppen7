let wishlists = document.querySelectorAll(".btn-heart");
 
let products = [
   {
       name: "Pink Bottle",
       price: 299,
   },
   {
       name: "Blue Bottle",
       price: 299,
   },
   {
       name: "Green Bottle",
       price: 299,
   },
   {
       name: "Red Bottle",
       price: 299,
   }
];
 
for (let i=0; i < wishlists.length; i++) {
   wishlists[i].addEventListener("click", () => {
       wishlistNumbers(products[i]);
})
}
 
function wishlistNumbers(product) {
 
   let productNumbers = localStorage.getItem("wishlistNumbers");
  
   productNumbers = parseInt(productNumbers);
 
   if (productNumbers) {
       localStorage.setItem("wishlistNumbers", productNumbers + 1);
       
   } else {
       localStorage.setItem("wishlistNumbers", 1);
       
   }
 
   setItems(product);
 
 
}
 
function setItems(product) {
  
   let wishlistItems = localStorage.getItem("productsInWishlist");
   wishlistItems = JSON.parse(wishlistItems);

   if (wishlistItems != null) {
       if (wishlistItems[product.name] == undefined) {
           wishlistItems = {
               ...wishlistItems,
               [product.name]: product
           }
       }
       wishlistItems[product.name].inWishlist += 1;
      
   } else {
    product.inWishlist = 1;
   
    wishlistItems = {
        [product.name]: product
   }
  
   }
 
  
   localStorage.setItem("productsInWishlist", JSON.stringify(wishlistItems));
}
 
function displayWishlist() {
   let wishlistItems = localStorage.getItem("productsInWishlist");
   wishlistItems = JSON.parse(wishlistItems);
   let productContainer = document.querySelector(".products");

   if (wishlistItems && productContainer) {
       productContainer.innerHTML = "";
       Object.values(wishlistItems).map(item => {
           productContainer.innerHTML += `
           <div class="product">
           <span>${products.name}</span>
           </div>
           `
       })
   }
}


displayWishlist();
