/**
 * 15810 풍선 공장
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 8',
'5 7 3',
]
const [n, m] = input[0].split(' ').map(Number);
const members = input[1].split(' ').map(Number);

let answer = 0;
let st = 0;
let ed = 1e12;
while(st<=ed){
  const mid = Math.floor((st+ed)/2)

  let cnt = 0;
  for(let i=0;i<n;i++){
    cnt+= Math.floor(mid/members[i])
  }

  if(cnt >= m){
    ed = mid-1;
  }else{
    st = mid+1;
  }
}

console.log(st)
// console.log(solution(N, M, MEMBERS))