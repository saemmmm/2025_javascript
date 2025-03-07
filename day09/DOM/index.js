// 내장 오브젝트: arr, obj, date, window, ...
// js: 브라우저를 조작하는 언어
// document: html을 관여하는 타입
// element 타입
// const div = document.createElement("div");
// // btn.innerText = "<button>짱짱버튼</button>";
// div.innerHTML = "<button>짱짱버튼</button>";
// document.body.appendChild(div);

// 유저에게 만들고 싶은 태그 물어보고,
// const userTag = prompt("만들고 싶은 태그 입력");
// // 유저에게 안에 넣고 싶은 내용 물어보고,
// const userContents = prompt("태그 안에 넣을 내용 입력");
// // html에 유저가 원하는 대로 태그 만들기!
// const tag = document.createElement(userTag);
// tag.innerText = userContents;

// document.body.appendChild(tag);

// 순회(정찰)
// [1, 3, 5, 7, 9].forEach((x) => {
//     console.log(x);
// });

// 유저에게 원하는 버튼 갯수를 물어보고, 버튼 안의 내용도 물어보고
const user_count = +prompt("버튼 갯수 입력");
const user_contents = prompt("버튼 내용 입력");
// 갯수만큼 버튼 만들기!
Array(btn_count)
  .fill(0)
  .forEach((x) => {
    const btn = document.createElement("button");
    btn.innerText = btn.contents;
    document.body.appendChild(btn);
  });
