/**
 * 2750 수 정렬하기
 * 오름차순 정렬하기
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'5',
'2',
'3',
'4',
'1',
]
const [N, ...rest] = input.map(Number);

const solution = (n, numList) => numList.sort((a,b)=>a-b).join('\n')

console.log(solution(N, rest));