const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const lineType = 'round';
ctx.strokeStyle = 'silver';
ctx.lineJoin = lineType;
ctx.lineCap = lineType;
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));

let colorsArr = [
  '#e74c3c',
  '#8e44ad',
  '#f1c40f',
  '#e67e22',
  'black',
  'green',
  '#B33771',
  '#FC427B',
  'red',
];

for (i = 0; i < colorsArr.length; i++) {
  let btnOfColor = document.createElement('BUTTON');
  btnOfColor.value = colorsArr[i];
  btnOfColor.style.backgroundColor = colorsArr[i];
  btnOfColor.id = 'but';

  btnOfColor.onclick = () => {
    ctx.strokeStyle = btnOfColor.value;
  };

  document.getElementById('myDiv').appendChild(btn);
}

let range = document.querySelector('.number');
range.oninput = function () {
  ctx.lineWidth = this.value;
};
