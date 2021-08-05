function solution(n) {
    const answer = new Array(n).fill().map((_, i) => new Array(i + 1));
    
    let count = 0;
    let x = -1;
    let y = 0;
    while (n > 0) {
        for (let i = 0; i < n; i++) {
            count++;
            x++;
            answer[x][y] = count;
        }
        for (let i = 0; i < n - 1; i++) {
            count++;
            y++;
            answer[x][y] = count;
        }
        for (let i = 0; i < n - 2; i++) {
            count++;
            x--;
            y--;
            answer[x][y] = count;
        }
        n -= 3;
    }

    
    // let res = answer.reduce((answer, cur) => {
    //     console.log(`answer : ${answer}, cur : ${cur}`)
    //     return answer.concat(cur);
    // });

    return answer.flat();
}
let n = 4;
console.log(solution(n));