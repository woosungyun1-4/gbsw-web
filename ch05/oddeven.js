const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("정수를 입력하세요. : ", function (num) {
    if (num % 2 == 0) // 짝수인지?
    {
        console.log("짝수!");
    }
    else if (num % 2 == 1) // 홀수인지?
    {
        console.log("horse!");
    }
    else // 정수인지
    {
        console.log("제대로 입력해!")
    }
    rl.close();
})