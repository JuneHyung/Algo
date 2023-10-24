/**
 * 1629 곱셈
 * A를 B번 곱한수를 C로 나눈 나머지를 구하는 프로그램 작성
 * A, B, C는 모두 2,147,483,647 이하의 자연수
 * 1. 틀림. (범위초과)
 * (A*B) mod C = ((A mod C) * (B mod C)) mod C
 * 
 * A^B는 
 * B가 짝수면 A^(B/2) * A^(B/2)로 나타낼 수 있다.
 * A^B%C = ((A^(B/2)%C) * (A^(B/2)%C))
 * 
 * B가 홀수면 A^B를 A^[B/2] * A^[B/2]*A
 * A^B%C = ((A^(B/2)%C) * (A^(B/2)%C) * (A%C))%C가 성립.
 * 
 * example
 * 짝수 : 2^10%7 = ((2^5)%7) * ((2^5)%7) % 7 = (32%7)^2%7 = 4^2%7 = 2
 * 홀수 : 2^9%7 = ((2^4%7) * (2^4%7) * (2%7))%7 = ((16%7)^2 * 2)%7 = 4*2%7=1
 * 
 * https://sweetdev.tistory.com/807
 * 다시 풀어보기.
 */

// const fs = require('fs')
// const input=fs.readFileSync('/dev/stdin').toString().trim();
const input = '10 11 12';
const [A, B, C] = input.split(' ').map(BigInt)

const solution = (a, b, c) =>{
  // console.log(a, b, c)
  if(b===1n) return a%c; // b가 1이면 바로 a%c 리턴

  const half = solution(a, b/2n, c) % c;

  if(b%2n) return (half*half*(a%c))%C
  return (half*half) %c
}

console.log(solution(A, B, C).toString())
