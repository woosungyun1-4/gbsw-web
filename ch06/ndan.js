const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("단 수를 입력하세요. : ", function (dan) {
    for (let n = 1; n < 10; n++)
    {
        console.log(`${dan} x ${n} = ${dan *n}`);
    }

    rl.close();
})