const cursor = document.querySelector(".cursor");
const container = document.querySelector(".container");
const logo = document.querySelector(".header__w--logo");
const project1 = document.querySelector(".project1 .content");
const project2 = document.querySelector(".project2 .content");
const project3 = document.querySelector(".project3 .content");
const title__typing = document.querySelector(".title__typing");
const zoom = document.querySelector(".zoom");
// const menu = document.querySelector(".header__r--menu ")

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    duration: 0.2,
    x: e.pageX - cursor.clientWidth / 2,
    y: e.pageY - cursor.clientHeight / 2,
  });
});
title__typing.addEventListener("mousemove", (e) => {
  cursor.classList.add("zoom");
});
title__typing.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("zoom");
});
logo.addEventListener("mousemove", (e) => {
  cursor.classList.add("zoom");
});
logo.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("zoom");
});
project1.addEventListener("mousemove", (e) => {
  cursor.classList.add("zoom");
  project1.classList.add("scale");
  gsap.to(project1, {
    duration: 0.1,
    x: e.pageX / 20,
    y: e.pageY / 20,
    z: e.pageY / 20,
  });
});
project1.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("zoom");
  project1.classList.remove("scale");
});
project2.addEventListener("mousemove", (e) => {
  cursor.classList.add("zoom");
  project2.classList.add("scale");
  gsap.to(project2, {
    duration: 0.3,
    x: e.pageX / 20,
    y: e.pageY / 20,
    z: e.pageY / 20,
  });
});
project2.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("zoom");
  project2.classList.remove("scale");
});
project3.addEventListener("mousemove", (e) => {
  project3.classList.add("scale");
  cursor.classList.add("zoom");
  gsap.to(project3, {
    duration: 0.3,
    x: e.pageX / 20,
    y: e.pageY / 20,
    z: e.pageY / 20,
  });
});
project3.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("zoom");
  project3.classList.remove("scale");
});
// repomsive menu

const menu_ul = document.querySelector(".header__r--menu ul");
const close = document.querySelector(".header__r--menu .close_r");
const menu = document.querySelector(".header__r--menu .menu");
console.log(menu);
menu.addEventListener("click", (e) => {
  menu_ul.classList.toggle("hide");
});
close.addEventListener("click", (e) => {
  menu_ul.classList.toggle("hide");
});
// gsap animation laod

TweenMax.from(".header__w--logo", 1, {
  delay: 0.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from("main", 1, {
  delay: 0.1,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.staggerFrom(
  ".header__w--menu ul li ",
  1,
  {
    delay: 0.8,
    opacity: 0,
    y: 10,
    ease: Expo.easeInOut,
  },
  0.2
);
// TweenMax.staggerFrom(
//   ".content ul li ",
//   1,
//   {
//     delay: 0.8,
//     opacity: 0,
//     y: 10,
//     ease: Expo.easeInOut,
//   },
//   0.2
// );
