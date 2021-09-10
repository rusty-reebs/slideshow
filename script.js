// script

const photo1 = document.getElementById("pic1");
const photo2 = document.getElementById("pic2");
const photo3 = document.getElementById("pic3");
const photo4 = document.getElementById("pic4");
const photo5 = document.getElementById("pic5");
const photo6 = document.getElementById("pic6");
const photo7 = document.getElementById("pic7");
const photo8 = document.getElementById("pic8");
const photo9 = document.getElementById("pic9");
const photo10 = document.getElementById("pic10");

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
];

const circles = document.querySelectorAll(".icon");
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    console.log(index);
    circles.forEach((circle) => {
      unfillCircles(circle);
    });
    fillCircle(circle);
    photos.forEach((photo) => {
      photo.classList.add("hide");
    });
    photos[index].classList.toggle("hide");
  });
});

const initialize = () => {
  document.getElementById("pic1").classList.toggle("hide");
  document.getElementById("circle1").classList.add("fas");
  document.getElementById("circle1").classList.add("fa-circle");
};

const nextSlide = () => {};

const unfillCircles = (circle) => {
  circle.classList.remove("fas");
  circle.classList.add("far"); // far is unfilled circle
  circle.classList.add("fa-circle");
};

const fillCircle = (circle) => {
  circle.classList.add("fas");
  circle.classList.add("fa-circle");
};

initialize();
