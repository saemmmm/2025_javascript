function lucky(x) {
  return `${x}라서 럭키비키잖아~`;
}
// const a = lucky("곧 수업 끝");
// console.log(a);

function makeSmile(x) {
  return `😁${x}😁`;
}
// const b = makeSmile("집에 가고 싶다!");
// console.log(b);

function makeDouble(x) {
  return x * 2;
}
// const c = makeDouble(4);
// console.log(c);

// 4. x가 홀수면 두 배 돌려주고, 짝수면 세 배 돌려주기
function four(x) {
  // return x % 2 ? x * 2 : x * 3;
  if (x % 2) {
    return x * 2;
  } else {
    return x * 3;
  }
}

// 5. x가 3의 배수 또는 5의 배수이면 제곱을 돌려주고, 아니면 10 더해서 돌려주기
function five(x) {
  // return x % 3 == 0 || x % 5 == 0 ? x ** 2 : x + 10;
  if (x % 3 == 0 || x % 5 == 0) {
    return x ** 2;
  } else {
    return x + 10;
  }
}

// 6. x, y가 들어오면 x의 y 제곱해서 돌려주기
function six(x, y) {
  return x ** y;
}

// 7. 배열이 들어오면 첫 번째 인덱스에서 사탕으로 바꿔주기
function seven(x) {
  x[0] = "candy";
  return x;
}
