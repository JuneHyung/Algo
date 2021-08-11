function solution(s) {
    let arr = s.split(" ");
    let answer = Math.min(...arr) + " " + Math.max(...arr)
    
    return answer;
}
let s = '1 2 3 4 10';
console.log(solution(s));