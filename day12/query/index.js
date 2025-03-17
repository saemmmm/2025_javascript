//자바스크립트로 html 생성, 스타일 꾸미기, 내용 넣기, 추가하기
//html[기본구조], css[스타일], js[이벤트, 동적]

//찾아줘 함수
const pikaButton = document.querySelector(".pika");
pikaButton.addEventListener("click", () => {
  alert("피카피카");
});

const pilButton = document.querySelector(".pil");
pilButton.addEventListener("click", () => {
  alert("파이리~");
});

const emojiButton = document.querySelector(".emoji");
emojiButton.addEventListener("click", () => {
  emojiButton.innerText = emojiButton.innerText == "😁" ? "😀" : "😁";
});
