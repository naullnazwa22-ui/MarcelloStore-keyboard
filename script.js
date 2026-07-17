let currentPrice = 0;
let currentProduct = "";
let paymentMethod = "";

function openPopup(nama,harga){

    currentProduct = nama;
    currentPrice = harga;

    document.getElementById("popup").style.display="flex";

    document.getElementById("popupTitle").innerHTML=nama;

    document.getElementById("popupPrice").innerHTML=
    "Harga : Rp "+harga.toLocaleString("id-ID");

    document.getElementById("qty").value=1;

    updateTotal();

}

function closePopup(){

    document.getElementById("popup").style.display="none";

}

function plusQty(){

    let qty=document.getElementById("qty");

    qty.value++;

    updateTotal();

}

function minusQty(){

    let qty=document.getElementById("qty");

    if(qty.value>1){

        qty.value--;

    }

    updateTotal();

}

function updateTotal(){

    let qty=document.getElementById("qty").value;

    let total=currentPrice*qty;

    document.getElementById("totalPrice").innerHTML=

    "Total : Rp "+total.toLocaleString("id-ID");

}

function choosePayment(method){

paymentMethod=method;

let info=document.getElementById("paymentInfo");

if(method=="dana"){

info.innerHTML=`

<h4>DANA</h4>

<p>089656441135</p>

<p>a.n Marcello Store</p>

`;

}

if(method=="gopay"){

info.innerHTML=`

<h4>GoPay</h4>

<p>089656441135</p>

<p>a.n Marcello Store</p>

`;

}

if(method=="qris"){

info.innerHTML=`

<h4>Scan QRIS</h4>

<img src="img/payment/barcode.jpg" class="popup-qris">

`;

}

}

function confirmOrder(){

let nama=document.getElementById("customerName").value;

let hp=document.getElementById("customerPhone").value;

let alamat=document.getElementById("customerAddress").value;

let qty=document.getElementById("qty").value;

let total=currentPrice*qty;

alert(

"Pesanan Berhasil!\n\n"+

"Produk : "+currentProduct+

"\nJumlah : "+qty+

"\nTotal : Rp "+total.toLocaleString("id-ID")+

"\nPembayaran : "+paymentMethod+

"\n\nTerima kasih "+nama

);

}

function searchProduct(){

    let input=document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    let products=document
    .querySelectorAll(".product-card");

    products.forEach(product=>{

        let name=product
        .querySelector("h3")
        .innerText
        .toLowerCase();

        if(name.includes(input)){

            product.style.display="block";

        }

        else{

            product.style.display="none";

        }

    });

}

    function addToCart(name, price, image){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    let item = cart.find(product => product.name === name);


    if(item){

        item.qty++;

    }else{

        cart.push({

            name:name,
            price:price,
            image:image,
            qty:1

        });

    }

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

updateCartCount();

alert("Produk berhasil ditambahkan!");

}

function updateCartCount(){

    function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalQty = cart.reduce((total, item) => total + item.qty, 0);

    document.getElementById("cart-count").innerText = totalQty;

    }
}

window.onload = updateCartCount;

function loadCheckout(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    let summary = document.getElementById("summary");

    let total = 0;


    summary.innerHTML="";


    cart.forEach(item=>{


        total += item.price * item.qty;


        summary.innerHTML += `

        <p>
        ${item.name} 
        (${item.qty}x)
        -
        Rp ${item.price * item.qty}
        </p>

        `;


    });



    document.getElementById("total").innerHTML =
    total.toLocaleString("id-ID");


}
