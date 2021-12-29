let wishlists = document.querySelectorAll(".btn-heart");
 
let wishlistProducts = [
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
       wishlistNumbers(wishlistProducts[i]);
})
}
 
function wishlistNumbers(product) {
   let productsNumbers = localStorage.getItem("wishlistNumbers");
   productsNumbers = parseInt(productsNumbers);
 
   if (productsNumbers) {
       localStorage.setItem("wishlistNumbers", productsNumbers + 1);
       
   } else {
       localStorage.setItem("wishlistNumbers", 1);
       
   }
 
   setWishItems(product);
 
}




function setWishItems(product) {
  
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
    let wishlistContainer = document.querySelector(".wishlistProducts");
    

    console.log(wishlistItems);
    if(wishlistItems && wishlistContainer) {
        wishlistContainer.innerHTML = '';
        
        Object.values(wishlistItems).map(item => {
            console.log(item)
            wishlistContainer.innerHTML += `
            <div class="wishlistproduct">
                <span>${item.name}</span>
            </div>
            
            `;
            
        })
    }
}

displayWishlist();