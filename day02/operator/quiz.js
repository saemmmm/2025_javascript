const num = window.prompt("100000~99999 숫자 입력");
window.console.log(parseInt((num / 100) % 10));

const year = +window.prompt("몇 년생인지 입력하세요.");
const result = year <= 2006 ? "성인입니다." : "미성년자입니다.";
window.console.log(result);
