function clearN() {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("mesg").value = "";
}

function validateContact(event) {
    if (event) {
        event.preventDefault();
    }
    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    var subject = document.getElementById("subject");
    var mesg = document.getElementById("mesg");
    if (name.value.trim() === "") {
        alert("Please enter your name");
        name.focus();
        return false;
    }
    if (mail.value.trim() === "") {
        alert("Please enter your email");
        mail.focus();
        return false;
    }
    if (subject.value.trim() === "") {
        alert("Please enter subject");
        subject.focus();
        return false;
    }
    if (mesg.value.trim() === "") {
        alert("Please enter your message");
        mesg.focus();
        return false;
    }
    alert("Message sent successfully!");
    clearN();
    return false;
}
function validateNewsletter() {
    var email = document.getElementById("newsletterEmail");
    if (email.value.trim() === "") {
        alert("Please enter your email address");
        email.focus();
        return;
    }
    alert("Subscribed successfully!");
    email.value = "";
}

document.addEventListener("click", function (event) {
    var btn = event.target.closest(".productBottom button");
    if (!btn) {
        return;
    }
    var card = btn.closest(".productCard");
    var productName = "Product";
    if (card) {
        var title = card.querySelector("h3");
        if (title) {
            productName = title.innerText.trim();
        }
    }
    
    var qty = prompt("Select quantity for " + productName + ":", "1");
    if (qty === null) {
        return;
    }
    qty = parseInt(qty);
    if (isNaN(qty) || qty <= 0) {
        alert("Please enter a valid quantity");
        return;
    }
    
    alert("Product: " + productName + "\nQuantity: " + qty + "\nAdded to cart successfully!");
    var cartIcon = document.querySelector(".fa-shopping-cart");
    var badge = cartIcon && cartIcon.parentElement ? cartIcon.parentElement.querySelector(".badge") : document.querySelector("a[title='View Cart'] .badge");
    if (badge) {
        var count = parseInt(badge.innerText) || 0;
        badge.innerText = count + qty;
    }
});
