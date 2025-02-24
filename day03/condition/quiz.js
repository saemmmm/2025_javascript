const month = +window.prompt("월을 입력하세요.");
if (3 <= month && month <= 5) {
  window.console.log("봄");
} else if (6 <= month && month <= 8) {
  window.console.log("여름");
} else if (9 <= month && month <= 11) {
  window.console.log("가을");
} else if (month == 12 || month == 1 || month == 2) {
  window.console.log("겨울");
} else {
  window.console.log("그런 계절 없어요!");
}

const age = +window.prompt("나이를 입력하세요.");
if (0 <= age && age <= 7) {
  window.console.log("유치원생");
} else if (8 <= age && age <= 13) {
  window.console.log("초등학생");
} else if (14 <= age && age <= 19) {
  window.console.log("중고등학생");
} else {
  window.console.log("성인");
}

const num = +window.prompt("숫자를 입력하세요.");
if (num > 0 && num % 2 == 1) {
  window.console.log("양의 홀수");
} else if (num > 0 && num % 2 == 0) {
  window.console.log("양의 짝수");
} else if (num < 0 && num % 2 == 1) {
  window.console.log("음의 홀수");
} else if (num < 0 && num % 2 == 0) {
  window.console.log("음의 짝수");
} else {
  window.console.log("0");
}
// const isPositive = num > 0;
// const isNegatice = num < 0;
// const isOdd = num % 2 == 1;
// const isEven = num % 2 == 0;
