/**
 * 1654 랜선 자르기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 11',
'802',
'743',
'457',
'539',
]
const [K, N] = input.shift().split(' ').map(Number)
const INFO = input.map(Number)

const solution = (k, n, info) => {
  info.sort();
  let lt = 1;
  let rt = Math.max(...info);
  while(lt<=rt){
    let mid = Math.floor((lt+rt)/2);
    let sum = info.map(el=>Math.floor(el/mid)).reduce((a,c)=>a+c,0)
    if(sum >= n) lt = mid+1;
    else rt = mid-1;
  }
  return rt;
}

console.log(solution(K, N, INFO))