/**
 * 15439 베라의 패션
 * 상의 N벌 하의 N벌이 있다.
 * i번쨰 상의와 i번째 하의는 모두 색상i를 가지고, N개색상은 모두 다르다.
 * 상의와 하의가 서로 다른 색상인 조합은 총 몇가지 일까?
 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
const N = Number(input);

const solution = (n) => {
  const result = n * (n-1);

  return result;
}

console.log(solution(N))