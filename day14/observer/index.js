const box = document.querySelector(".box");
const circle = document.querySelector(".circle");

const observer = new IntersectionObserver((entry) => {
  entry.forEach((x) => {
    if (x.isIntersecting) {
      console.log("들어왔다~!");
    }
  });
});

observer.observe(box);

const observer1 = new IntersectionObserver((x) => {
  x.forEach((y) => {
    if (y.isIntersecting) {
      y.target.classList.add("pink");
    }
  });
});

observer1.observe(circle);
