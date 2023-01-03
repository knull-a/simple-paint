let canvas = document.querySelector("#draw");
let ctx = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let color = document.querySelector("#color");
let backgroundColor = document.querySelector("#bg-color");
let width = document.querySelector("#width");

let isMobile = false;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  isMobile = true;
}

if (isMobile) {
  let mobile = document.querySelector(".mobile");
  let container = document.querySelector(".container");
  mobile.style.display = "block";
  container.style.display = "none";
}

canvas.width = innerWidth-300;
canvas.height = innerHeight-300;

ctx.lineJoin = "round";
ctx.lineCap = "round";

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

backgroundColor.addEventListener("input", () => canvas.style.backgroundColor = backgroundColor.value);
color.addEventListener("input", () => ctx.strokeStyle = color.value);
width.addEventListener("input", () => ctx.lineWidth = width.value);