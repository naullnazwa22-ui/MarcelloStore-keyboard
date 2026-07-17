// ===============================
// CART SYSTEM
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Tambah produk ke keranjang
function addToCart(name, price, image) {

    const item = cart.find(product => product.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " berhasil ditambahkan ke keranjang!");
}

// Update jumlah icon keranjang
function updateCartCount() {

    const count = cart.reduce((total, item) => total + item.qty, 0);

    const badge = document.getElementById("cart-count");

    if (badge) {
        badge.innerText = count;
    }

}

updateCartCount();

// ===============================
// TAMPILKAN KERANJANG
// ===============================

function displayCart(){

    const container = document.getElementById("cartContainer");

    if(!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price * item.qty;

        container.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" width="120">

            <div>

                <h3>${item.name}</h3>

                <p>Rp ${item.price.toLocaleString()}</p>

                <button onclick="decreaseQty(${index})">-</button>

                ${item.qty}

                <button onclick="increaseQty(${index})">+</button>

                <br><br>

                <button onclick="removeItem(${index})">

                Hapus

                </button>

            </div>

        </div>

        <hr>

        `;

    });

    const grandTotal = document.getElementById("grandTotal");

    if (grandTotal) {
    grandTotal.innerHTML = "Total : Rp " + total.toLocaleString();
}

}

displayCart();

function increaseQty(index){

    cart[index].qty++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCartCount();

}

function decreaseQty(index){

    if(cart[index].qty>1){

        cart[index].qty--;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCartCount();

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCartCount();

}

function checkout(){

    window.location.href="checkout.html";

}