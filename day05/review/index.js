// const num = +prompt("숫자를 입력하세요.");
// if (num % 2 == 1) {
//   console.log("홀수입니다.");
// } else {
//   console.log("짝수입니다.");
// }

// function oddEven(x) {
//   return x % 2 ? "홀수" : "짝수";
// }

// function dessert(x) {
//   return x == "icecream" || x == "coffee" ? "디저트" : "음식";
// }

// const cgv = {
//   movie: [
//     { name: "액션 영화", price: 10000 },
//     { name: "로맨틱 코미디", price: 8000 },
//     { name: "공포 영화", price: 9000 },
//   ],
//   popcorn: [
//     { name: "치즈 팝콘", price: 6000 },
//     { name: "캬라멜 팝콘", price: 5000 },
//     { name: "일반 팝콘", price: 5000 },
//   ],
// };

// const userMovie = +prompt("영화 선택(1~3)") - 1;
// const userPopcorn = +prompt("팝콘 선택(1~3)") - 1;

// console.log(`
//     구매한 영화: ${cgv.movie[userMovie].name}
//     구매한 팝콘: ${cgv.popcorn[userPopcorn].name}
//     총 금액: ${cgv.movie[userMovie].price + cgv.popcorn[userPopcorn].price}
//     `);

// function zodiac(year) {
//   const animal = [
//     "원숭이띠",
//     "닭띠",
//     "개띠",
//     "돼지띠",
//     "쥐띠",
//     "소띠",
//     "호랑이띠",
//     "토끼띠",
//     "용띠",
//     "뱀띠",
//     "말띠",
//     "양띠",
//   ];
//   return animal[year % 12];
// }

const a = prompt("e 또는 i?");
const b = prompt("s 또는 n?");
const c = prompt("f 또는 t?");
const d = prompt("p 또는 j?");

const mbti = {
  e: "외향적",
  i: "내향적",
  s: "감각적",
  n: "직관적",
  f: "감성적",
  t: "이성적",
  p: "즉흥적",
  j: "계획적",
};
console.log(
  `당신의 성격은 ${mbti[a]}, ${mbti[b]}, ${mbti[c]}, ${mbti[d]}입니다!`
);
