const g = document.querySelector(".green");
const r = document.querySelector(".red");
const b = document.querySelector(".blue");
const textp = document.getElementById("text");

g.onclick = function () {
  textp.style.color = "green";
};

r.onclick = function () {
  textp.style.color = "red";
};

b.onclick = function () {
  textp.style.color = "blue";
};