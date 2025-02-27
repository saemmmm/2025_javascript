// 기본: num, str, bool, null, undefined
// 참조: arr, obj, function

const bakery = {
  sale: 0,
  sellBread: function () {
    console.log("빵 팔기!");
    this.sale = this.sale + 1000;
  },
};
console.log(bakery.sale);
bakery.sellBread();
bakery.sellBread();
bakery.sellBread();
console.log(bakery.sale);

const cgv = {
  movies: [
    { name: "미키 17", price: 10000 },
    { name: "퇴마록", price: 9000 },
    { name: "캡틴 아메리카", price: 8000 },
  ],
  sale: 0,
  sellTicket: function (x) {
    if (0 <= x && x <= 2) {
      console.log(`${this.movies[x].name}영화가 판매되었습니다!`);
      this.sale = this.sale + this.movies[x].price;
    } else console.log("해당 번호의 영화는 존재하지 않습니다!");
  },
  checkSale: function () {
    console.log(`총 매출:${this.sale}`);
  },
};

cgv.sellTicket(0);
cgv.sellTicket(0);
cgv.sellTicket(0);
cgv.checkSale();

const car = {
  speed: 0,
  up: function () {
    this.speed = this.speed + 1;
  },
  down: function () {
    if (this.speed == 0) {
      this.speed = 0;
    } else {
      this.speed = this.speed - 1;
    }
  },
  showSpeed: function () {
    console.log(`현재 시속:${this.speed}`);
  },
};
