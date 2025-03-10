//1. 유저에게 좋아하는 아이돌 그룹 멤버들을 입력받고,
const idols = prompt("좋아하는 아이돌 멤버 입력").split(" ");
// 아이돌 멤버의 버튼 만큼 화면에 만들기
idols.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
});

//2. 유저에게 좋아하는 색상 5가지 영어로 입력 받고,
const colors = prompt("좋아하는 색상 5가지 입력");
// 그 색상을 가진 버튼들을 화면에 만들기
colors.forEach((x) => {
  colorList.forEach((x) => {
    const btn = document.createElement("button");
    btn.style.backgroundColor = x;
    btn.innerText = "버튼";
    document.body.appendChild(btn);
  });
});
