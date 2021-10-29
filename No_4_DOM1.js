document.getElementById("fill-me").innerHTML = "HALO!";
var p = document.getElementsByClassName("change-all-of-me");
for (element of p) {
    element.innerHTML = "HALO JUGA!";
}
var h2 = document.getElementsByTagName("h2");
for (element of h2) {
    element.innerHTML = "Apa Kabar!";
}

var box = document.getElementById("main");
var button1 = document.createElement("BUTTON");
button1.innerHTML = "Ini Button";
box.appendChild(button1);
var button2 = document.createElement("BUTTON");
button2.innerHTML = "Ini Juga Button";
box.appendChild(button2);
