/**
 * 1676 팩토리얼 0의 개수
 * N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올때 까지 0의 개수를 구하는 프로그램 작성
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '10'
const N = Number(input)

const solution = (n) => {
  let answer = 0;
  if(n===0) return answer;

  for(let i=1;i<=n;i++){
    if(i%5===0) answer++;
    if(i%25===0) answer++;
    if(i%125===0) answer++;
  }

  return answer;
}

console.log(solution(N))
