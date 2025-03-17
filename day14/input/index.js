const input = document.querySelector(".input");
const textNum = document.querySelector(".textNum");
const condition = document.querySelector(".condition");

const lengthValid = (length) => (length > 10 ? "red" : "black");
const hasSpecialChar = (value, special) =>
  [...special].some((x) => value.includes(x)) ? "green" : "black";

input.addEventListener("input", () => {
  const { length } = input.value;
  textNum.innerText = length;
  textNum.style.color = lengthValid(length);
  condition.style.color = hasSpecialChar(input.value, "!@#^&*~");
});
