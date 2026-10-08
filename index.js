const button = document.getElementById("generator");
const num = document.getElementById("num");

let x;
let y;
x = Number(x);
y = Number(y);
button.onclick = function () {
    x = Math.floor(Math.random()*6) + 1;
    num.textContent = x;
}