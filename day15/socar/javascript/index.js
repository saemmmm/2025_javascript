const header = document.querySelector("header");
const logoImage = document.querySelector(".logo > img");
const upbar = document.querySelector(".upBar");
const downbar = document.querySelector(".downBar");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const { scrollY } = window;
  if (scrollY > 0) {
    logoImage.src = "https://www.socar.kr/images/logo-blue.svg";
    header.classList.add("act");
    upbar.classList.add("blue");
    downbar.classList.add("blue");
    upbar.classList.remove("white");
    downbar.classList.remove("white");
  } else {
    logoImage.src = "https://www.socar.kr/images/logo-w.svg";
    header.classList.remove("act");
    upbar.classList.add("white");
    downbar.classList.add("white");
    upbar.classList.remove("blue");
    downbar.classList.remove("blue");
  }
});

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  upbar.classList.toggle("upbarX");
  downbar.classList.toggle("downbarX");
});

window.addEventListener("wheel", (e) => {
  const { deltaY } = e;
  if (deltaY > 0) {
    header.classList.add("onHidden");
    header.classList.remove("onShow");
  } else {
    header.classList.add(".onShow");
    header.classList.remove(".onHidden");
  }
});

const ob = new IntersectionObserver((entries) => {
  entries.forEach((v) => {
    if (v.isIntersecting) {
      v.target.style.opacity = "1";
      v.target.style.tranform = "translateX(0px)";
    }
  });
});

const a = document.querySelectorAll(".concept__card > h2");
const b = document.querySelectorAll(".concept__card > p");
const c = document.querySelectorAll(".concept__card > .photo");

a.forEach((v) => ob.observe(v));
b.forEach((v) => ob.observe(v));
c.forEach((v) => ob.observe(v));

const banner = document.querySelector(".banner");
const skewer = document.querySelector(".skewer");

const ob1 = new IntersectionObserver((entries) => {
  entries.forEach((v) => {
    if (v.isIntersecting) {
      skewer.style.transform = "skew(-30deg) translateX(0px)";
    }
  });
});

ob1.observe(banner);
