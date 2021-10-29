var input = document.getElementsByTagName("input");
for (item of input) {
    item.required = true;
}

var pw = document.getElementById("password");
var cpw = document.getElementById("confirmpassword");
var mail = document.getElementById("email");
var cmail = document.getElementById("confirmemail");

function validate() {
    if (pw.value != cpw.value) {
        alert("Password dan Confirm Password tidak sama!")

    }
    if (mail.value != cmail.value) {
        alert("Email dan Confirm Email tidak sama!")
    }
}