/**
 * 13241 최소공배수
 * 분류 : 수학, 정수론, 유클리드호제법
 * B에 0보다 큰 정수인 N을 곱해 정수 A를 만들 수 있다면, A는 B의 배수다.
 * 두 수에 대해 최소공배수를 구하는 프로그램 작성.
 * 
 * 한 줄에 A와 B가 공백으로 분리되어 주어진다.
 * 50%입력 중 A와 B는 1000(10^3)보다 작다.
 * 50%입력 중 A와 B는 1000(10^3)보다 크고, 100000000(10^8)보다 작다.
 * 
 * A와 B의 최소공배수를 한 줄에 출력.
 */
/**
 * 풀이 순서
 * 0. Number는 10^15까지 -> Number변환.
 * 1. A와 B를 받아 답을 도출하는 solution 함수 작성
 * 2. GCD 구하기
 * 3. LCM 구하기
 * 4. LCM 리턴
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '3 5';
const [A, B] = input.split(' ').map(Number);

const solution = (a, b) => {
  const getGCD = (a, b) => {
    const r = a % b;
    return r === 0 ? b : getGCD(b, r);
  }
  const GCD = getGCD(a, b);
  const LCM = a * b / GCD;
  return LCM;
}
console.log(solution(A, B));