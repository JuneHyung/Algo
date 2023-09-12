/**
 * N킬로 설탕을 배달하려한다.
 * 설탕은 3키로 5키로 두종류가있다.
 * 정확히 N키로 배달할 떄 몇 개를 가져가면 되는지구하기.
 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input)

const solution = (n) =>{
  let answer =0;
  while(n>0){
    if(n%5===0) n-=5;
    else n-=3;
    answer++;
  }
  return n===0 ? answer : -1;
}

console.log(solution(N))