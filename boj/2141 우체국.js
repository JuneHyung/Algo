/**
 * 2141 우체국
 * 수직선 상에 i번쨰 마을엔 A[i]명 사람이 살고 있다.
 * 우체국 하나를 세우려는데 각 사람들까지의 거리 의 합이 최소가 되는 위치에 우체국을 세울 것이다.
 * 합이 전체 전체 인원의 절반을 넘을때
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
  '1 1',
  '2 1',
  '3 1',
  '4 1',
]
const N = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, info) => {
  info.sort((a,b)=> a[0]-b[0])
  let peopleCnt = info.reduce((a,c)=>a+c[1], 0);
  let sum =0;
  for(let i=0;i<n;i++){
    sum+= info[i][1];
    if(peopleCnt /2 <= sum) return info[i][0];
  }
  return info[n-1][0];
}
console.log(solution(N, INFO))