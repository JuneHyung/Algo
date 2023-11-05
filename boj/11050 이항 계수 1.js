/**
 * 11050 이항 계수 1
 * N과 K가 주어졌을떄 이항계수를 구하는 프로그램 작성.
 * 
 * 이항계수는 이항식을 이항정리로 전개헀을 때 각 항의 개수
 * 주어진 크기의 집합에서 원하는 개수만큼 순서없이 뽑는 조합의 가지수.
 * 공식 : n! / (n-k)!k!
 */
// const fs =require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim()
const input = '5 2'
const [N, K] = input.split(' ').map(Number)

const solution = (n, k) => {
  const fact = (num) =>{
    let result = 1;
    while(num>0){ result*=num; num--;}
    return result;
  }

  const answer = fact(n) / (fact(n-k) * fact(k));
  return answer;
}
console.log(solution(N, K))