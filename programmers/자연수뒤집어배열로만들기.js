function solution(n) {
    return n.toString().split('').map(el=>parseInt(el)).reverse();
}
let n=12345;
console.log(solution(n));