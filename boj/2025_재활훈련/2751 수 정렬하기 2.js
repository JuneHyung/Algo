/**
 * 2751 수 정렬하기 2
 * N개 수가 주어졌을 때 오름차순 정렬하기
 */
// const fs = require('fs')
// const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, ...numList] = input.map(Number);

const solution = (n, numList) => numList.sort((a,b)=>a-b).join('\n')

console.log(solution(N, numList));