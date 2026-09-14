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