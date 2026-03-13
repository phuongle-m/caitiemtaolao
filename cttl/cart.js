let cart = JSON.parse(localStorage.getItem("cart")) || []

let cartItems = document.getElementById("cart-items")
let total = 0

cart.forEach((item, index) => {

let tr = document.createElement("tr")

let name = document.createElement("td")
name.innerText = item.name

let price = document.createElement("td")
price.innerText = item.price

let removeTd = document.createElement("td")

let btn = document.createElement("button")
btn.innerText = "Remove"
btn.className = "cart-remove"

btn.onclick = () => {

cart.splice(index,1)

localStorage.setItem("cart", JSON.stringify(cart))

location.reload()

}

removeTd.appendChild(btn)

tr.appendChild(name)
tr.appendChild(price)
tr.appendChild(removeTd)

cartItems.appendChild(tr)

total += item.price

})

document.getElementById("total").innerText = total