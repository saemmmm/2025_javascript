// 기본타입: string, number, boolean, null, undefind
// 참조타입: array[], object

// key - value
// 문자, 정수 - 아무타입가능
// const coffee = {
//   name: "아메리카노",
//   price: 2500,
//   shots: 2,
//   hasCaffein: true,
//   ingredients: ["물", "커피콩"],
// };

// coffee["price"]; // 2500
// coffee.price; // 2500

// console.log(`샷 개수: ${coffee.shots} 성분: ${coffee.ingredients[1]}`);

// 자동차를 오브젝트 타입으로 만들기!
// 제작사
// 차이름
// 옵션
// 연식
// 연비
const car = {
  company: "벤츠",
  name: "지바겐",
  options: [열선핸들, 전동사이드스텝],
  year: 2025,
  fuel: 5.8,
};

// car.company
// car["company"]
// car.coffee // undifined
car.people = 4; // people: 4 추가
delete car.options;
car.fuel = 20; // fuel: 20
