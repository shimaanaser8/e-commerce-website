// open & close Cart

var cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}

// add product to cart
let cartItems = [];
const cartContainer = document.querySelector(".cart");
const cartCount = document.querySelector(".count_item"); 
const cartTotal = document.querySelector(".total"); 
const cartList = document.querySelector(".cart_items");


function updateCart() {
    cartList.innerHTML = ""; 
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        totalPrice += item.price;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart_item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button class="remove_item" data-index="${index}">Remove</button>
        `;
        cartList.appendChild(cartItem);
    });

    cartCount.textContent = cartItems.length; 
    cartTotal.textContent =  totalPrice.toFixed(2);

    document.querySelectorAll(".remove_item").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            cartItems.splice(index, 1);
            updateCart();
        });
    });
}

document.querySelectorAll(".fa-cart-plus").forEach((button) => {
    button.addEventListener("click", function () {
        const product = this.closest(".product");
        const name = product.querySelector(".name_product a").innerText;
        const price = parseFloat(product.querySelector(".price span").innerText.replace("$", ""));
        const image = product.querySelector(".img_product img").src;

        cartItems.push({ name, price, image });
        updateCart();
    });
});

function open_cart() {
    cartContainer.style.display = "block";
}

function close_cart() {
    cartContainer.style.display = "none";
}

document.querySelector(".cart_icon").addEventListener("click", open_cart);


// move to thanks page
function validateForm() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;

    if (email === "" || name === "" || address === "" || phone === "") {
        alert("Please fill in all fields.");
        return false; 
    }

    if (phone.length < 10) {
        alert("Please enter a valid phone number (at least 10 digits).");
        return false;
    }

    window.location.href = "thank.html";
    return false;
}