const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("점수를 입력하세요. : ", function (score) {
    // 100 ~ 91 점 - A 학점
    // 81 ~ 90점 - B 학점
    // 71 ~ 80점 - C 학점
    // 61 ~ 70점 - D 학점
    // 0 ~ 60점 - F 학점
    // 그 외 - 범위를 벗어났습니다.
    // 스위치 형식으로 작성
    // 범위 지정 값을 받아서 판단해야 할 경우 switch는 비효율적임!
    switch(true)
    {
        case (score > 100 && score < 0):
        console.log("범위를 벗어났습니다.");
        break;

        case (score > 90):
        console.log("A 학점");
        break;

        case (score > 80):
        console.log("B 학점");
        break;

        case (score > 70):
        console.log("C 학점");
        break;

        case (score > 60):
        console.log("D 학점");
        break;

        case (score <= 60):
        console.log("F 학점");
        break;

        default:
        console.log("범위를 벗어났습니다.") 
        break;
    }
    rl.close();
})