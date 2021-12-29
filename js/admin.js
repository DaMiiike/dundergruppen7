const adminForm = document.querySelector(".admin-form")
const inputName = document.querySelector(".input-product-name").value;
const inputDesc = document.querySelector(".input-product-desc").value;
const inputPrice = document.querySelector(".input-product-price").value;
const inputBtn = document.querySelector(".input-product-btn");

const newProducts = document.querySelector(".newproducts");

adminForm.addEventListener("submit", function(e) {
    e.preventDefault();
});

inputBtn.addEventListener("click", function() {
    const inputName = document.querySelector(".input-product-name").value;
    const inputDesc = document.querySelector(".input-product-desc").value;
    const inputPrice = document.querySelector(".input-product-price").value; 
    localStorage.setItem("newProduct", JSON.stringify({inputName, inputDesc, inputPrice}));
    
    console.log(inputName)

})
