const americanoBtn = document.querySelector(".americano");
americanoBtn.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":");
  total.innerText = `총 금액:${parseInt(money) + 2000}원`;
});

const latteBtn = document.querySelector(".latte");
latteBtn.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":");
  total.innerText = `총 금액:${parseInt(money) + 3000}원`;
});

const mintBtn = document.querySelector(".mint");
mintBtn.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":");
  total.innerText = `총 금액:${parseInt(money) + 3500}원`;
});

const total = document.querySelector(".total");

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  total.innerText = `총 금액:0원`;
});

const buyBtn = document.querySelector(".buy");
buyBtn.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":");
  alert(`구매하신 총 금액은 ${money}입니다!`);
});
