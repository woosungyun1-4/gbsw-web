const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("나이를 입력하세요. : ", function (age) {
    // 성인 판별
    // 19세 이상인 경우 "성인입니다."
    // 19세 미만인 경우 "미성년자입니다."
    // 나이는 1~100살 이내 범위여야 합니다.

    if (age >= 19 && age <= 100)   // 19세 이상인지 판단 && 100살 이하인지 판단
    {
        console.log("성인입니다.");
    }
    else if (age < 19 && age >= 1) // 19세 미만인지 판단 && 1세 이상인지 판단
    {
        console.log("미성년자입니다.");
    }
    else                           // 원하는 값을 입력받지 못했을 때
    {
        console.log("저희는 1~100살인 사람만 판단 가능합니다.");
    }
    rl.close();
})