/**
 * 2609 최대 공약수와 최소공배수
 * 두 수를 받아 최대공약수와 최소공배수를 리턴.
 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [A, B] = input.split(' ').map(Number);

const solution = (a, b) => {
  const gcd = (a,b) => b>0 ? gcd(b, a%b) : a;
  const lcm = (a,b) => a*b/gcd(a,b);

  return [gcd(a,b), lcm(a,b)].join('\n')
}

console.log(solution(A, B))