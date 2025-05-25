/**
 * 1629 곱셈
 * A를 B번 곱한 수를 알고 싶다.
 * 구하려는 수가 매우 커질 수 있어 C로 나눈 나머지를 구하는 프로그램 작성
 * 
 * A, B, C 모두 2,147,483,647이하의 자연수
 * 
 * A를 B번 곱한 수를 C로 나눈 나머지를 출력.
 */
/**
 * 1. BigInt로 계산
 * 2. 검색 (A * B) mod C = (A mod C * B mod C) mod C
 */
// const fs =require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim()
const input = '10 11 12'
const [A, B, C] = input.split(' ').map(BigInt)
const solution = (a, b, c) => {
  let result = 1n;
  for(let i=0n;i<b;i++) result *= a;

  return (result%c).toString()
}

console.log(solution(A, B, C))

/**
 * 
 */