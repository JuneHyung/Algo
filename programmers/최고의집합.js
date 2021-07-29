function solution(n, s) {
    var answer = [];
    let a = Math.floor(s / n);
    let b = s%n;
    if (a==0) answer.push(-1);
    else {
        for (let i = 0; i < n; i++) {
            if (b == 0) {
                answer.push(a+1)
            } else {
                answer.push(a);
                b--;
            }
        }
    }
    return answer.sort();
}

let n = 2;
let s = 9;
console.log(solution(n, s));