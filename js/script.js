function nameDisplayCheck() {

    const productContainer = document.querySelector(".newproducts")

    console.log(productContainer)

    if(localStorage.getItem("newProduct")) {
        let newProduct = JSON.parse(localStorage.getItem("newProduct"));
        console.log(newProduct)
        
    
        productContainer.innerHTML += `<div> ${newProduct.inputName} ${newProduct.inputDesc} ${newProduct.inputPrice}</div>`;
        

    }


}

nameDisplayCheck(); 