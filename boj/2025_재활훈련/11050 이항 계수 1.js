/**
 * 11050 이항 계수 1
 * N과 K가 주어졌을 때 이항계수를 구하는 프로그램.
 * 
 * N은 1~10
 * 
 */
/**
 * 이항 계수
 * https://ko.wikipedia.org/wiki/이항_계수
 * 
 * 이항식을 이항 정리로 전개했을 때 각 항의 계수
 * 주어진 크기의 집합에서 원하는 개수만큼 순서없이 뽑는 조합의 가지수
 * n! / (k! * (n-k)!)
 */
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim();
const input = '7 2';
const [N, K] = input.split(' ').map(Number);

const solution = (n, k) => {
  const getFact = (num) => {
    let mul = 1;
    for(let i=1; i<=num;i++) mul*=i;
    return mul;
  }

  const result = getFact(n) / (getFact(k) * getFact(n-k))
  return result;

}

console.log(solution(N, K))