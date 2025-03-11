// 9개의 버튼이 있음
// small, medium, large
// red, blue, green
// square, ellipse, circle

// box 높이와 넓이
// small, medium, large
// wh: 100, wh: 200, wh: 300

// box  모서리 둥근 정도
// square, ellipse, circle
// 0px, 10px, 9999px

const box = document.createElement("div");
document.body.appendChild(box);

const smallBtn = document.createElement("button");
smallBtn.innerText = "small";
smallBtn.addEventListener("click", () => {
  box.style.width = "100px";
  box.style.height = "100px";
});
document.body.appendChild(smallBtn);

const mediumBtn = document.createElement("button");
mediumBtn.innerText = "medium";
mediumBtn.addEventListener("click", () => {
  box.style.width = "200px";
  box.style.height = "200px";
});
document.body.appendChild(mediumBtn);

const largeBtn = document.createElement("button");
largeBtn.innerText = "large";
largeBtn.addEventListener("click", () => {
  box.style.width = "300px";
  box.style.height = "300px";
});
document.body.appendChild(largeBtn);

const redBtn = document.createElement("button");
redBtn.innerText = "red";
redBtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
document.body.appendChild(redBtn);

const blueBtn = document.createElement("button");
blueBtn.innerText = "blue";
blueBtn.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
document.body.appendChild(blueBtn);

const greenBtn = document.createElement("button");
greenBtn.innerText = "green";
greenBtn.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});
document.body.appendChild(greenBtn);

const squareBtn = document.createElement("button");
squareBtn.innerText = "square";
squareBtn.addEventListener("click", () => {
  box.style.borderRadius = "0px";
});
document.body.appendChild(squareBtn);

const ellipseBtn = document.createElement("button");
ellipseBtn.innerText = "ellipse";
ellipseBtn.addEventListener("click", () => {
  box.style.borderRadius = "10px";
});
document.body.appendChild(ellipseBtn);

const circleBtn = document.createElement("button");
circleBtn.innerText = "circle";
circleBtn.addEventListener("click", () => {
  box.style.borderRadius = "9999px";
});
document.body.appendChild(circleBtn);
