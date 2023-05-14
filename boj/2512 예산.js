/**
 * 2512 예산
 * 정해진 총액 이하에서 가능한 한 최대의 총 예산을 배정한다.
 * 모든 요청이 배정될 숭 ㅣㅆ는 경우 요청한 금액을 그대로 배정.
 * 없으면 특정 정수 상한액을 계산해 그 이상인 예산 요청에는 모두 상한액을 배정함.
 * 상한액 이하 요청에 대해서는 요청한 금액 그대로 배정.
 */
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'120 110 140 150',
'485',
]
const N = Number(input.shift())
const ARR = input.shift().split(' ').map(Number)
const M = Number(input.shift())
const solution = (n, arr, m) =>{
  arr.sort((a,b)=>a-b)
  let lt = 1;
  let rt = arr[n-1];
  while(lt <= rt){
    const mid = Math.floor((lt+rt)/2);
    const sum = arr.reduce((acc, cur)=>acc + (cur<=mid ? cur : mid) , 0);
    if(sum<=m) lt = mid+1;
    else rt = mid-1;
  }
  const answer = rt;
  return answer;
}
console.log(solution(N, ARR, M))