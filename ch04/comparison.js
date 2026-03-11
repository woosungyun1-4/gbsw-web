let a = 10;
let b = 20;

console.log(a > b); // false
console.log(a == b); // false
console.log(a != b); //true

console.log("A"<"B"); // true
console.log("ABCD" > "ABDC") // false

let size1 = 1024;
let size2 = "1024"

console.log(size1 == size2); // true
console.log(size1 === size2); // false

let age = 17;
/*
조건부 연산자 (삼항 연산자)
condition ? value1 : value2
condition이 true인 경우 value1 false일경우 value2 반환
*/
let result = (age >=19) ? "성인입니다." : "더 자라렴";
console.log(result);