/**
 * 2839 설탕배달
 * 정확히 N킬로 배달해야함.
 * 봉지는 3과 5가있다.
 * 최대한 적은 봉지 들고 갈거다.18kg은 3kg 6개보다 5kg 3개, 3kg 1개
 * 
 * N이 주어진다.
 * 정확히 Nkg이 안되면 -1 리턴
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '4'
const N = Number(input);

const solution = (n) => {
  
  let five = 0;
  let three = 0;
  while(n>0){
    if(n%5===0) {n-=5; five++;}
    else{n-=3; three++;}
  }

  const result = n===0 ? five+three : -1;
  return result;

}

console.log(solution(N));