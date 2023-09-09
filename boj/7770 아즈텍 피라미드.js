/**
 * 7770 아즈텍 피라미드
 * 모든면이 둘러싸인경우 가장 안정적인 피라미드다.
 * 이떄 개수가 주어지면 만들 수 있는 피라미드 높이 구하기
 */
// const fs = require('fs');
// const input =fs.readFileSync('/dev/stdin').toString().trim()
const input = '5';
const N = Number(input)
const solution = (n) =>{
  let cnt = 0, height = 0;
  while(cnt <= n){ // 계차수열
    cnt += 2*height*height + 2*height +1
    height++;
  }
  return height-1;
}
console.log(solution(N))