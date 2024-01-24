document.getElementById("head").innerHTML = "Introduction to Javascript";
/*
action is performed by the user. //button click
event will be triggered // onclick
subsequent method will be executed
*/
function bulbOn() {
    console.log("bulbOn");
    document.getElementById("img").src = "bulbon.gif";
    document.getElementById("img").alt = "Bulb On";
    document.getElementById("head").style.color = "Yellow";
    document.getElementById("p1").style.display = "initial";
}
function bulbOff() {
    console.log("bulbOff");
    document.getElementById("img").src = "bulboff.gif";
    document.getElementById("img").alt = "Bulb Off";
    document.getElementById("head").style.color = "gray";
    document.getElementById("p1").style.display = "none";
}
