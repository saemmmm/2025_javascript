// // 데이터 타입 종류

// // 문자 타입: "", ``, ''
// // 숫자 타입: 아라비아 숫자

// const name = "이은샘";
// const age = 25;
// const birth = 2001;
// const coffee = "아샷추";

// // 더하기에 문자 타입이 들어가면 모두 문자 취급함

// window.console.log(age + birth); // 2026
// window.console.log(coffee + age); // 아샷추25
// window.console.log(age + coffee + birth);

// const age1 = "17";
// const age2 = "19";
// window.console.log(age1 + age2); // 1719

// prompt는 문자 취급
const age = window.prompt("숫자 입력");
const number_age = Number(age);
window.alert(`${number_age}의 10을 더한 값은 : ${number_age + 10}`);
