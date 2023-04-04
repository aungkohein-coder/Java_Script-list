// function add(x, y) {
//   console.log(arguments);
//   return x + y;
// }

// console.log(add(12, 25));

// const add1 = function (x, y) {
//   return x + y;
// };

// console.log(add1(12, 22));

// const add2 = (x, y) => x + y;

// console.log(add2(12, 2));

// const add3 = new Function("x", "y", "return x+y");

// console.log(add3(32, 33));

// console.log(add());
// console.log(add.bind(null, 1, 2).call());

// function para(...x) {
//   console.log(x);
//   return "this is poppa";
// }

// console.log(para(1, 3, 4, 6, 7, 66, 55));

// function sum(x, y, ...nums) {
//   console.log(x);
//   console.log(y);
//   console.log(nums);
//   return nums.reduce((pv, cv) => pv + cv);
// }

// console.log(sum(2, 3, 5, 7, 4));

// const arr = [1, 2, 4, 5];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// const [a, b, c, d] = arr;
// console.log(a, b, c, d);

const obj = {
  a: "AAA",
  b: "BBB",
  c: "CCC",
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

// const [a, b, c, d] = arr;
// console.log(a, b, c, d);

const { a, b, c } = obj;
