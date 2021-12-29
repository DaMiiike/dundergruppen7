function nameDisplayCheck() {

    const productContainer = document.querySelector(".newproducts")
    

    console.log(productContainer)

    if(localStorage.getItem("newProduct")) {
        let newProduct = JSON.parse(localStorage.getItem("newProduct"));
        console.log(newProduct)
        
    
        productContainer.innerHTML += 
        `<div>
         <div>
          <p class="prod-text">
            <span style="font-weight: bold">${newProduct.inputName}</span><br />${newProduct.inputDesc}<br /><br /><span style="font-size: 25px; color: black;">${newProduct.inputPrice}kr</p>
          <br /><button class="buyNow add-cart">BUY NOW</button>
          <button class="btn-heart">&hearts;</button>
        </div>
        </div>`;

    }

}

nameDisplayCheck(); 


