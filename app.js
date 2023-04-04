// class Person{
//     name    = "aung ko hein";
//     age     = 22;
//     run(){
//         console.log("Hello class")
//     }
// }

// console.log(person)

// const person = new Person();

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.run())

// class Student{
//     // Name , age , gender , major

//     constructor(name,age,gender,major){
//         this.name   = name;
//         this.age    = age;
//         this.gender = gender;
//         this.major  = major
//     }
// }

// const st1 = new Student("Aung Aung",20,"Male","Myanmar");
// const st2 = new Student("Ma Ma",21,"Female","English");
// const st3 = new Student("Hla Hla",22,"Female","Physics");

// console.log(st1);
// console.log(st2);
// console.log(st3);

// const st1 = new Student();

// st1.name    = "Aung Aung";
// st1.age     = 22;
// st1.gender  = "male";
// st1.major   = "Myanmar"
// st1.learn   = function(){
//     return `${this.name}` +" "+ "can learn Everything";
// };

// console.log(st1.learn())

// const st2 = new Student();

// st2.name    = "Ma Ma";
// st2.age     = 21;
// st2.gender  = "female";
// st2.major   = "English"

// console.log(st2)

// class A{
//     a = "aaa";
// }

// class B extends A{
//     b= "bbb";
// }

// const a = new A();

// console.log(a);

// const b = new B();

// console.log(b);

// class Student{
//     // Name , age , gender , major
//     constructor(name,age,grnder,major){
//         this.name = name;
//         this.age  = age;
//         this.grnder = grnder;
//         this.major  = major
//         this.birthyear = 2022 - `${this.age}`;
//         this.subject = ["mya","eng","math","che","phy",major];
//         this.nameprefit = this.grnder === "male" ? "mg" : "ma";
//     };
//     leran(){
//         return this.name + "can learn" + this.subject ;
//     }
// };

// const st1 = new Student(
//             "Ma Ma",
//             17,
//             "female",
//             "bio"
// );

// const st2 = new Student(
//     "Aung Aung",
//     16,
//     "male",
//     "bio"
// );

// const st3 = new Student(
//     "Zaw Zaw",
//     16,
//     "male",
//     "eco"
// );

// const st4 = new Student(
//     "Kyaw Kyaw",
//     17,
//     "male",
//     "bio"
// );

// const st5 = new Student(
//     "Hla Hla",
//     18,
//     "Female",
//     "eco"
// );

// console.log(st1.leran())
// console.log(st2)
// console.log(st3)
// console.log(st4)
// console.log(st5)

// class monitor extends Student{
//     room = "Grade A"
// }

// const ga1 = new monitor(
//     "Kyaw Ye",
//     18,
//     "male",
//     "bio"
// );

// console.log(ga1);

// class A{
//     a = "aaa";
// };

// class B extends A{
//     b = "bbb";
// };

// class C extends B{
//     c = "ccc";
// }

// const c = new C();

// console.log(c);

// class X {
//     run(){
//         console.log("Hello x")
//         return this;
//     };
//     run2(){
//         console.log("Hello y")
//         return this;
//     };
//     run3(){
//         console.log("Hello z")
//         return this;
//     };
// };

// const x = new X();

// x.run().run2().run3();

// const d = new Date();

// console.log(d);

// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());

// console.log(d.getDate());
// console.log(d.getDay());

// const str = new String("min ga lar par");

// // console.dir(str);

// console.log(str);

// console.log(str.length);

// // console.log(str.substr(2,8)); deprecated

// console.log(str.substring(0,16));
// console.log(str.search("ga"))
// console.log(str.replace("ar","sr"))
// console.log(str.toLocaleUpperCase().replaceAll("ar","sr"))

// const nnt = "   Hello World   "
// console.log(nnt.length)

// console.log(nnt.trim().length)
// console.log(nnt.padStart(30,"0"))
// console.log(nnt.padEnd(30,"0"))

// console.log(nnt.trim().split(" "))

const numb = 235.4456;

const numc = "235.4456";

// console.log(numb)

// console.log(numb.toString())

// console.log(numb.toFixed(3))

// console.log(numb.toPrecision(5))

// console.log(Number(numc))

// console.log(Math.floor(Math.random()*10))

// console.log(eval(numc + numb));

// function run(x,y){
//     return y(x);
// };

// console.log(run(5,function(x){
//         return x + 4;
// }));

// console.log(run(5,function(x){
//     return x * 4;
// }));

const run1 = (_) => "this is function";

(_) => {
  console.log("hello");
  return "hello";
};

console.log(run1());
