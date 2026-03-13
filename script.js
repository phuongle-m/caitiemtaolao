let cart = JSON.parse(localStorage.getItem("cart")) || []

const buttons = document.querySelectorAll(".add")
const cartItems = document.getElementById("cart-items")

let cartCount = cart.length

// update bag number
document.getElementById("bag-number").innerText = cartCount
document.getElementById("cart-count").innerText = cartCount

// load items into popup cart
cart.forEach(item => {

let li = document.createElement("li")
li.innerText = item.name + " - $" + item.price

cartItems.appendChild(li)

})

buttons.forEach(btn => {

btn.addEventListener("click", () => {

let product = btn.closest(".product")

let name = product.querySelector("h2").innerText

let priceText = btn.innerText
let price = parseInt(priceText.replace("ADD TO BAG - ",""))

let item = {
name: name,
price: price
}

cart.push(item)

localStorage.setItem("cart", JSON.stringify(cart))

cartCount++

document.getElementById("bag-number").innerText = cartCount
document.getElementById("cart-count").innerText = cartCount

let li = document.createElement("li")
li.innerText = name + " - $" + price

cartItems.appendChild(li)

let msg = document.createElement("div")

msg.className = "added-message"
msg.innerText = "Added to cart!"

let existing = document.querySelectorAll(".added-message").length
msg.style.bottom = 20 + existing * 50 + "px"

document.body.appendChild(msg)

setTimeout(()=>{
msg.remove()
},1500)

})

})

function openCart(){
document.getElementById("cart").style.display="block"
}

function closeCart(){
document.getElementById("cart").style.display="none"
}