// document.querySelector("div h1").textContent = "Refresh Me";

var p1 = Math.ceil(Math.random()*6);
var p2 = Math.ceil(Math.random()*6);

if (p1 > p2) {
    document.querySelector("div h1").textContent = "Player 1 wins";
}
else if (p2 > p1) {
    document.querySelector("div h1").textContent = "Player 2 wins";
}
else {
    document.querySelector("div h1").textContent = "it's a tie";
}

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+p1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+p2+".png");