const isLogin = true;
const isAdmin = false;

console.log(isLogin && isAdmin); // false 

console.log(true || false); // true
console.log(false || false) // false

console.log(false || true && false); //false && 연산부터 함

let id = "asdf";
let pw = "1234";
let correctId = "addf";
let correctPw = "1234";


let result = (id === correctId && pw === correctPw) ? "로그인 완료!" : "나가라~";
console.log(result);

console.log(!true)
console.log(!null)

// ?? - Nullish 병합 연산자
// data ?? default 형식으로 사용
// -> data가 null이거나 undrfine인 경우 default를 반환

let email = 0;

let result2 = (email !== null && email !== undefined) ? "이메일 확인" : "이메일 입력되지 않음";
let result3 = (email ?? null) ? "이메일 확인" : "이메일 입력되지 않음";
console.log(result2);
console.log(result3);
console.log(null ?? "기본값");
console.log(undefined ?? "기본값");
console.log("안녕하세요" ?? "기본값");