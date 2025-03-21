const input = document.querySelector(".input");
const num = document.querySelector(".num");
const condition = document.querySelector(".condition");
const textLength = document.querySelector(".textLength");

document.addEventListener("input", () => {
  textLength.style.color =
    textLength.style.color == input.value.lenght > 8 ? "green" : "black";
});
