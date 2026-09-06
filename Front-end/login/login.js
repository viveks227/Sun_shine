// Sabhi containers ko pehle hide karo, fir sirf desired container ko show karo
function hideAllForms() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("forgetContainer").style.display = "none";
}

function showLogin() {
    hideAllForms();
    document.getElementById("loginContainer").style.display = "block";
}

function showRegister() {
    hideAllForms();
    document.getElementById("registerContainer").style.display = "block";
}

function showForget() {
    hideAllForms();
    document.getElementById("forgetContainer").style.display = "block";
}