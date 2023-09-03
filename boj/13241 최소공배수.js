/**
 * 13241 최소공배수
 * 두수의 최소공배수 구하기.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '1 1';
const [A, B] = input.split(' ').map(Number)

const solution = (a, b) => {
  const gcd = (a, b) => b>0? gcd(b, a%b) : a;
  const lcm = (a,b) => a*b / gcd(a,b);
  return lcm(a,b);
}
console.log(solution(A, B))