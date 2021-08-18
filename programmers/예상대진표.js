function solution(n,a,b){
    var answer = 0;
    while (a != b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
}
let n = 8;
let a = 4;
let b = 7;
console.log(solution(n, a, b));