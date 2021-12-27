const adminForm = document.querySelector(".admin-form")
const inputName = document.querySelector(".input-product-name").value;
const inputDesc = document.querySelector(".input-product-desc").value;
const inputPrice = document.querySelector(".input-product-price").value;
const inputImg = document.querySelector(".input-product-img").files[0];
const inputBtn = document.querySelector(".input-product-btn");

const newProducts = document.querySelector(".newproducts");



adminForm.addEventListener("submit", function(e) {
    e.preventDefault();
});

inputBtn.addEventListener("click", function() {
    const inputName = document.querySelector(".input-product-name").value;
    const inputDesc = document.querySelector(".input-product-desc").value;
    const inputPrice = document.querySelector(".input-product-price").value; 
    const inputImg = document.querySelector(".input-product-img").files[0];
    localStorage.setItem("newProduct", JSON.stringify({inputName, inputDesc, inputPrice, inputImg}));
    
    console.log(inputName)

    //nameDisplayCheck();
})

/*function nameDisplayCheck() {
    if(localStorage.getItem("newProduct")) {
        let newProduct = localStorage.getItem("newProduct");
        console.log(newProduct)
        document.querySelector(".newproducts")
    
        .innerHTML += `<div>${inputName} ${inputDesc} ${inputPrice}</div>`;
    }
}*/