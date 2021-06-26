const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
ctx.strokeStyle = "silver";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

let colorsArr = [
  "#e74c3c",
  "#8e44ad",
  "#f1c40f",
  "#e67e22",
  "black",
  "green",
  "#B33771",
  "#FC427B",
  "red",
];

for (i = 0; i < colorsArr.length; i++) {
  let btn = document.createElement("BUTTON");
  btn.value = colorsArr[i];
  btn.style.backgroundColor = colorsArr[i];
  btn.id = "but";

  btn.onclick = () => {
    ctx.strokeStyle = btn.value;
    console.log(ctx.strokeStyle);
  };

  document.getElementById("myDiv").appendChild(btn);
}

let range = document.querySelector(".number");
range.oninput = function () {
  ctx.lineWidth = this.value;
};
