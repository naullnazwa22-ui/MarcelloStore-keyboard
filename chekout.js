let cart = JSON.parse(localStorage.getItem("cart")) || [];

const summary = document.getElementById("summary");
const totalText = document.getElementById("total");

let total = 0;

cart.forEach(item => {

    total += item.price * item.qty;

    summary.innerHTML += `
        <p>
            ${item.name} (${item.qty}x)
            - Rp ${(item.price * item.qty).toLocaleString()}
        </p>
    `;

});

totalText.innerHTML = total.toLocaleString();

function checkout(){

    const nama = document.getElementById("nama").value;
    const hp = document.getElementById("hp").value;
    const alamat = document.getElementById("alamat").value;
    const pembayaran = document.getElementById("pembayaran").value;

    if(!nama || !hp || !alamat){

        alert("Lengkapi data pembeli!");

        return;

    }

    localStorage.setItem("customerName", nama);
    localStorage.setItem("customerPhone", hp);
    localStorage.setItem("customerAddress", alamat);
    localStorage.setItem("paymentMethod", pembayaran);

    window.location.href = "invoice.html";

}