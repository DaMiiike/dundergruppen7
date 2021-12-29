const adminForm = document.querySelector(".admin-form");
const inputName = document.querySelector(".input-product-name").value;
const inputDesc = document.querySelector(".input-product-desc").value;
const inputPrice = document.querySelector(".input-product-price").value;
const inputBtn = document.querySelector(".input-product-btn");
const newProducts = document.querySelector(".newproducts");


let inputList = JSON.parse(localStorage.getItem("newProduct")) || [];


inputBtn.addEventListener("click", function() {
    const inputName = document.querySelector(".input-product-name").value;
    const inputDesc = document.querySelector(".input-product-desc").value;
    const inputPrice = document.querySelector(".input-product-price").value; 
    
    let newProduct = {
        name: inputName,
        description: inputDesc,
        price: inputPrice,
        };

        inputList.push(newProduct);
 
    localStorage.setItem("newProduct", JSON.stringify(inputList));
    
   
})

