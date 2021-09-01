function solution(x, n) {
  var answer = Array(n).fill(x).map((v, i) => (i+1)*v);
  return answer;
}
let x = 2;
let n = 5;
console.log(solution(x, n));