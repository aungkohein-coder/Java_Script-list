// const btn = document.querySelector("button");

// const alert = (event, x, y) => window.alert(x + y);

// // btn.onclick = alert;

// btn.addEventListener("click", alert.bind(null, event, 2, 5));

const title_h1 = document.querySelector("h1");

title_h1.addEventListener("mouseenter", (_) =>
  console.log("mouse enter event")
);
title_h1.addEventListener("mouseout", (_) => console.log("mouse out event"));
title_h1.addEventListener("mousemove", (_) => console.log("mouse move event"));

const input = document.querySelector("input");
const form = document.querySelector("form");

// input.addEventListener("keydown", (_) => console.log("this is keydown"));
// input.addEventListener("keyup", (_) => console.log("this is up"));
// input.addEventListener("keypress", (_) => console.log("this is press"));
// input.addEventListener("focus", (_) => console.log("this is focus"));
// input.addEventListener("blur", (_) => console.log("this is blur"));

input.addEventListener("change", (_) => console.log("this is change"));
form.addEventListener("submit", (_) => console.log("this is request"));

window.addEventListener("scroll", (_) => console.log("this is scroll"));

window.addEventListener("load", (_) => console.log("loaded complete"));
console.log("This is Clg");
console.log("This is Clg 1");
console.log("This is Clg 2");
console.log("This is Clg 3");
