function nameDisplayCheck() {

    const productInputContainer = document.querySelector(".newproducts")
  

    if(localStorage.getItem("newProduct")) {
        let newProduct = JSON.parse(localStorage.getItem("newProduct"));
        console.log("från script js", newProduct.name);
        console.log(Object.values(newProduct));

        Object.values(newProduct).map(newItem => {
          productInputContainer.innerHTML += 
          `<div>
           <div>
            <p class="prod-text">
              <span style="font-weight: bold">${newItem.name}</span><br />${newItem.description}<br /><br /><span style="font-size: 25px; color: black;">${newItem.price}kr</p>
            <br /><button class="buyNow add-cart">BUY NOW</button>
            <button class="btn-heart">&hearts;</button>
          </div>
          </div>`;

        });
      
    }
}
nameDisplayCheck(); 


