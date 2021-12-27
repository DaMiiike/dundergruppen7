function nameDisplayCheck() {

    const productContainer = document.querySelector(".newproducts")

    console.log(productContainer)

    if(localStorage.getItem("newProduct")) {
        let newProduct = JSON.parse(localStorage.getItem("newProduct"));
        console.log(newProduct)
        
    
        productContainer.innerHTML += 
        `<div>
         <div>
          <img src="${newProduct.inputImg}" height="300px" />
          <p class="prod-text">
            <span style="font-weight: bold">${newProduct.inputName}</span><br />${newProduct.inputDesc}<br /><br /><span style="font-size: 25px; color: black;">${newProduct.inputPrice}</p>
          <br /><button class="buyNow add-cart">BUY NOW</button>
          <button class="btn-heart">&hearts;</button>
        </div>
        </div>`;

    }


}

nameDisplayCheck(); 

