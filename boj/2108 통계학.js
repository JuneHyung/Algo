/**
 * 2108 통계학
 * N개 수를 대표하는 기본 통계값에는 다음과 같은게 있다. N을 홀수다.
 * 산술평균 : N개의 수들의 합을 N으로 나눈 값
 * 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
 * 최빈값 : N개의 수들 중 가장 많이 나타나는 값
 * 범위 : N개의 수들 중 최댓값과 최솟값의 차이
 * N개수가 주어졌을때 4가지 기본 통계값을 구하는 프로그램작성
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'-1',
'-2',
'-3',
'-1',
'-2',
]
const N = Number(input.shift())
const INFO = input.map(Number);

const solution = (n, info) => {
  
  const mid = Math.floor(n/2)

  // 종류별 갯수 세기
  const countMap = new Map();
  
  for(const num of info){
    countMap.set(num, countMap.get(num)+1 || 1)
  }

  const maxCnt = Math.max(...[...countMap].map(el=>el[1]));
  const maxArr = [...countMap].filter(el=>el[1]===maxCnt).map(el=>el[0]).sort((a,b)=>a-b);
  
  const arithmeticMean = Math.round(info.reduce((a,b)=>a+b, 0) / n) // 산술평균
  const median = info.sort((a,b)=>a-b)[mid] // 중앙값
  const mode = maxArr.length ===1 ? maxArr[0] : maxArr[1]; // 최빈값
  const range = info[n-1] - info[0] // 범위

  return [arithmeticMean, median, mode, range].join('\n')
}
console.log(solution(N, INFO))