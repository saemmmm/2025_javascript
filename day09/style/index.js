// const btn = document.createElement("button");
// btn.innerHTML = "네이버";
// btn.style.backgroundColor = "green";
// document.body.appendChild(btn);

// 유저에게 원하는 버튼 배경색과 글씨색과 내용 동시에 받고(띄어쓰기)
const user = prompt("버튼 배경색, 글씨색, 내용 입력(띄어쓰기)").split(" ");

// 화면에 버튼을 만들어주기
const btn = document.createElement("button");
btn.style.backgroundColor = user[0];
btn.style.color = user[1];
btn.innerHTML = user[2];
document.body.appendChild(btn);
