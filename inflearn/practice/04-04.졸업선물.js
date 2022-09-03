const solution = (m, arr) => {
    let answer = 0;
    arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let money = m - (arr[i][0] / 2 + arr[i][1]);
        let cnt = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;
            else {
                const sum = arr[j][0] + arr[j][1];
                if (sum > money) break;
                if (sum <= money) {
                    money -= sum;
                    cnt++;
                }

            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));