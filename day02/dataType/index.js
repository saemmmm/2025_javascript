const side = window.prompt("한 변의 길이를 입력하세요.");
const number_side = Number(side);
window.console.log(
  `한 변의 길이가 ${number_side}인 정사각형의 둘레: ${number_side * 4} 넓이: ${
    number_side ** 2
  }`
);

const dollar = window.prompt("달러를 입력하세요.");
const parsedDollar = parseInt(dollar);
window.console.log(`${parsedDollar}달러는 ${parsedDollar * 1433}원입니다.`);

const year = window.prompt("출생년도를 입력하세요.");
const parsedYear = parseInt(year);
window.console.log(`${parsedYear}년생은 ${2026 - parsedYear}살입니다.`);

const first = +window.prompt("첫 번째 숫자 입력");
const second = +window.prompt("두 번째 숫자 입력");
window.console.log(`두 수의 합: ${first + second}`);
