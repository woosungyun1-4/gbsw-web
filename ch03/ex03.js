const obj1 = {a:5, b:8};
const obj2 = obj1;

obj2.a=10

let a = 10;
let b = a;

a=15;

console.log(obj1);
/*
참조형 데이터의 경우 복사 시, 값 복사가 아닌, 참조값의 복사가 일어나기때문에
원본 데이터를 변경시, 나머지에도 영향을 준다.
*/