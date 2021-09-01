function solution(n){
    return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b),0);
}
let n = 013;
console.log(solution(n));