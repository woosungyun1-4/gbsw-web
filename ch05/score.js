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
    if (score > 100 || score < 0)
    {
        console.log("범위를 벗어났습니다.");
    }
    else if (score > 90)
    {
        console.log("A 학점");
    }
    else if (score > 80)
    {
        console.log("B 학점");
    }
    else if (score > 70)
    {
        console.log("C 학점");
    }
    else if (score > 60)
    {
        console.log("D 학점");
    }
        else if (score <= 60)
    {
        console.log("F 학점");
    }
    else
    {
        console.log("범위를 벗어났습니다.");
    }
    rl.close();
})