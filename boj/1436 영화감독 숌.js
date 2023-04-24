/**
 * 1436 영화감독 숌
 * 666이 들어간 수를 종말의 수라 한다.
 * N이 주어질 떄 N번째 영화 제목을 출력
 */
// const fs = require('fs')
// const input=fs.readFileSync('/dev/stdin').toString().trim();
const input = '2'
const N = Number(input)
const solution = (n) => {
  let endNumber = 665;
  while(true){
    endNumber++;
    if(endNumber.toString().includes('666')){
      n--;
    }
    if(n===0) break;
  }
  return endNumber
}
console.log(solution(N))