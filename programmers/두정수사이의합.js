function solution(a, b) {
  let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      answer += i;
    }
  return answer;
}
let a = 3;
let b = 5;
console.log(solution(a, b));