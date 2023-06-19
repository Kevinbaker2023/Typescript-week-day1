// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: object

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: no question mark on releaseYear

let prices = [100, 200, 300];
prices[0] = '$100';
// A: trying to change from number to string

function myFunc(a: number, b: number): number {}
// A: no return


// https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript
// var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// function Dad(){
//   //select some variable to combine "Dad"
//   return d1+a2+d2;
// }
// function Bee(){
//   //select some variable to combine "Bee"
//   return b1+e2+e2;
// }
// function banana(){
//   //select some variable to combine "banana"
//   return b2+a2+n2+a2+n2+a2;
// }

// //answer some questions if you finished works above
// function answer1(){
//   //the answer should be "yes" or "no"
//   return "no";
// }
// function answer2(){
//   //the answer should be "yes" or "no"
//   return "no";
// }
// function answer3(){
//   //the answer should be "yes" or "no"
//   return "yes";
// }

// https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript
// function helloWorld() {
//     let str = "Hello World!"
//     console.log(str)
//   }