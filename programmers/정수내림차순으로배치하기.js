function solution(n) {
    return parseInt(n.toString().split('').sort((a,b)=>{return b-a}).join(''));
}
let n = 118372;
console.log(solution(n));