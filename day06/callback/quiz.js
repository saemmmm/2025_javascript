// makeFood라는 함수를 만들고

const makeTaco = (x) => {
  console.log("1. 또띠아 준비");
  console.log("2. 야채 넣기");
  console.log(`3. ${x} 넣기`);
  console.log("4. 말기");
};

const makeRamen = (x) => {
  console.log("1. 물 끓이기");
  console.log("2. 스프 넣기");
  console.log("3. 면 넣기");
  console.log(`4. ${x} 넣기`);
};

const makeKimchiRice = () => {
  console.log("1. 밥 볶기");
  console.log("2. 김치 넣기");
  console.log("3. 참기름");
  console.log("4. 섞기");
};

const makeFry = () => {
  console.log("계란 꺼내기");
  console.log("계란 깨기");
  console.log("후라이 만들기");
};

const makeFood = (recipe) => {
  console.log("손 씻기");
  console.log("요리 준비");
  console.log("불 준비");
  recipe();
  console.log("요리 끝!");
};

makeFood(() => {
  makeTaco("🥩");
});

makeFood(() => {
  makeRamen("🧂");
});
