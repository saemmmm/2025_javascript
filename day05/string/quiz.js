// 1.
const q1 = prompt("문장 입력").split(" ");
console.log(q1);

// 2.
const coffee = prompt("커피 입력");
if (coffee.includes("hot")) {
  console.log("뜨거운 커피");
} else if (coffee.includes("ice")) {
  console.log("차가운 커피");
} else {
  console.log("미지근한 커피");
}

// 3.
const word = prompt("단어 입력");
const q3 = word == word.toUpperCase() ? word.toLowerCase : word.toUpperCase;
console.log(q3);
