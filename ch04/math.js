const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

// 피연산자 하나가 String인 경우
const str = "hi";
const numStr = "10";

console.log(str + b);
console.log(numStr + b);

console.log(numStr - b);
console.log(numStr * b);
console.log(numStr / b);
console.log(numStr % b);
console.log(numStr ** b);

// Number로 형변환 실패 시 NaN(Not a Number) 반환
console.log(str / b);