const first = +window.prompt("첫 번째 숫자를 입력하세요.");
const second = +window.prompt("두 번째 숫자를 입력하세요.");
window.console.log(`합: ${first + second}
    차: ${first - second}`
    곱: ${first * second}`
    제곱: ${first ** second}`
    나누기: ${first / second}`
나누기 후 내림: ${parseInt(first + second)}`);


const num = +window.prompt("숫자를 입력하세요.");
const answer2 = num % 2 == 1 ? "홀수" : "짝수"
window.console.log(`${num}은 ${answer2}`)


const time = +window.prompt("숫자를 입력하세요.")
const minute = parseInt(time/ 60);
const seconds = time % 60;
window.console.log(`${minute}분 ${second}초`);