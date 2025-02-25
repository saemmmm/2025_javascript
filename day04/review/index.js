const beverage = +window.prompt("음료 종류 고르기(1~3)");
const money = +window.prompt("금액 투입");
if (beverage == 1 && money >= 3000) {
  window.console.log("아메리카노");
  window.console.log(`잔돈: ${money - 3000}`);
} else if (beverage == 2 && money >= 4000) {
  window.console.log("레몬에이드");
  window.console.log(`잔돈: ${money - 4000}`);
} else if (beverage == 3 && money >= 3500) {
  window.console.log("라떼");
  window.console.log(`잔돈: ${money - 3500}`);
} else {
  window.console.log("없는 종류의 음료이거나 금액이 부족합니다.");
}

const bus = +window.console.log("버스 노선 종류 선택(1~3)");
const age = +window.console.log("승객의 나이 입력");
const busName = ["시내버스", "광역버스", "마을버스"];
const busCost = [1200, 2000, 1000];
if (bus == 1 && age <= 7) {
  window.console.log(`${busName[bus]} 무료입니다.`);
} else if (8 <= age && age <= 19) {
  window.console.log(`${busName[bus]} 30% 할인 ${busCost[bus] * 0.7}입니다.`);
} else {
  window.console.log(`${busName[bus]} 정가 ${busCost[bus]}입니다.`);
}
