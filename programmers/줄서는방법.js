// function solution(n, k) {
//     let people = [];
//     for (let i = 1; i <= n; i++) {
//         people.push(i);
//     }
//     dfs(people, n, 0);
//     console.log(answers);
//     var answer = answers[k - 1];
//     return answer;
// }
// let answers = [];
// function dfs(people, n,depth, arr=[]) {
//     if (depth == n ) answers.push([...arr]);
//         for (let i = 0; i < people.length; i++) {
//             if (!arr.includes(people[i])) {
//                 arr.push(people[i]);
//                 dfs(people, n, depth + 1, arr);
//                 arr.pop();
//             }
//         }
    
// };

function solution(n, k) {
    let answer = [];
    let people = [];
    for (let i = 1; i <= n; i++) {
        people.push(i);
    }
    let all = factorial(n);
    k--; // k번째 idx
    for (let i = 0; i < n; i++) {
        all /= n - i; // (n-1)!
        let idx = Math.floor(k / all);
        answer.push(people[idx]);
        people.splice(idx, 1);
        k %= all;
    }
    return answer
}
function factorial(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        num *= i
    }
    return num;
}

let n = 3;
let k = 5;
console.log(solution(n, k));
