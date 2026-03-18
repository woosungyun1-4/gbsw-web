const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    // 점수는 0 ~ 100 사이 범위
    // 60점 이상이면 합격
    // 60점 이하면 불합격
rl.question("점수를 입력하세요. : ", function (score) {
    if (score >= 90 && score <= 100)
    {
        console.log("장학 대상!")
    }
    else if (score >= 60 && score <= 90)
    {
        console.log("합격!")
    }
    else if (score < 60 && score >= 0 )
    {
        console.log("다시 공부해와라!")
    }
    else
    {
        console.log("제대로 입력하세요!")
    }
    rl.close();
});

