let cart = []
let cartCount = 0

const buttons = document.querySelectorAll(".add")
const cartItems = document.getElementById("cart-items")

buttons.forEach((btn) => {

btn.addEventListener("click", () => {

    let name = btn.closest(".product").querySelector("h2").innerText
cart.push(name)

cartCount++

document.getElementById("bag-number").innerText = cartCount
document.getElementById("cart-count").innerText = cartCount

let li = document.createElement("li")
li.innerText = name

cartItems.appendChild(li)

})

})

function openCart(){
document.getElementById("cart").style.display = "block"
}

function closeCart(){
document.getElementById("cart").style.display = "none"
}