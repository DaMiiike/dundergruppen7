function userInfo() {
    let h1 = document.querySelector(".products-container");
    h1.innerHTML = "Thank you for your purchase! 🥳";
  }
  let userButton = document.querySelector("button");
  userButton.addEventListener("click", userInfo);