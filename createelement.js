// create elements

// const h1 = document.createElement("h1");
// h1.innerText = "Min Gar Lar Par ";
// console.log(h1);
// const p = document.createElement("p");
// p.innerText = "Hello World";
// const a = document.createElement("a");
// a.innerText = "Google";
// a.href = "https://www.google.com";
// a.target = "_blank";
// const img = document.createElement("img");
// img.src = "images/poe.jpg";

// //pull html

// document.body.append(h1);
// document.body.append(p);
// document.body.append(a);
// document.body.append(img);

// function createli(fruit) {
//   const li = document.createElement("li");
//   li.innerText = fruit;
//   return li;
// }

// const ul = document.createElement("ul");
// document.body.append(ul);

// ul.append(createli("apple"));
// ul.append(createli("orange"));
// ul.append(createli("mango"));
// ul.append(createli("banana"));

// const box = document.createDocumentFragment();
// const h1 = document.createElement("h1");
// h1.innerText = "Min Gar Lar Par ";
// const p = document.createElement("p");
// p.innerText = "Hello World";

// box.append(h1);
// box.append(p);

// // if (false) {
// //   document.body.append(box);
// // }

// false && document.body.append(box);

// (((((((((**********************************************************************************************************************)))))))))

const ul = document.querySelector("ul");

ul.previousElementSibling.innerText = "Gyms";
ul.previousSibling.data = "Gyms";

console.log(ul);
console.dir(ul.children);
console.dir(ul.childNodes);
