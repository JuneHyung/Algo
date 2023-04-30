/**
 * 2110 공유기 설치
 * 수직선 위에 N개 집이 있다.
 * 어디서나 와이파이를 즐기기위해 C개를 설치하려한다.
 * 최대한 많은 곳에서 사용하려 함.
 * 공유기는 한집에 하나씩 설치가능.
 * C개의 공유기를 N개집에 적당히 설치해서, 가장 인접한 두 공유기 사이의 거리를 최대로 하는 프로그램 작성.
 * 두 공유기 사이의 최대거리 출력
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 3',
'1',
'2',
'8',
'4',
'9',
]
const [N, C] = input.shift().split(' ').map(Number);
const HOUSE = input.map(Number).sort((a,b)=>a-b);
const isPossible = (n, c, house, mid) =>{
  let cnt = c-1;
  let prev = house[0];
  for(let i=1;i<n;i++){
    if(house[i] - prev >= mid){
      cnt--;
      prev = house[i];
    }
  }
  return cnt <= 0;
}
const solution = (n, c, house) =>{
  let lt = 1;
  let rt = house[n-1];
  while(lt<=rt){
    const mid = Math.floor((lt+rt)/2);
    if(isPossible(n, c, house, mid)) lt = mid+1;
    else rt=mid-1;
  }
  return rt;
}
console.log(solution(N, C, HOUSE));