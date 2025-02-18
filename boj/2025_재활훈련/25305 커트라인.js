/**
 * 25305 커트라인
 * N명학생 중 점수가 가장높은 k명이 상을 받을 것이다. 상받는 커트라인이 몇점일까
 * 커트라인은 상받는 사람중 점수가 가장 낮은 사람
 */
// const fs = require('fs')
// const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 2',
'100 76 85 93 98',
]
const [N,k] = input[0].split(' ').map(Number)
const scoreList = input[1].split(' ').map(Number)

const solution = (n, k, scoreList) => {
  const sortedScoreList = scoreList.sort((a,b)=>b-a);
  return sortedScoreList[k-1]
}

console.log(solution(N, k, scoreList));