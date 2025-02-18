/**
 * 2587 대표값2
 * 평균은 주어진 모든 수의 합을 수의 개수로 나눈것
 * 중앙 값은 주어진 수를 순서대로 놓았을때 중앙에 놓인 값
 * 
 * 다섯개의 자연수가 주어질 때 평균과 중앙값을 구해라
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10',
'40',
'30',
'60',
'30',
]
const numList = input.map(Number);
const solution = (numList) => {
  const sortedList = numList.sort((a,b)=>a-b);

  const sum = sortedList.reduce((a,c)=>a+c,0);
  const len = sortedList.length;
  const mid = Math.floor(len/2);
  
  const average = sum / len;
  const middle = sortedList[mid];

  const result = [average, middle].join('\n')
  return result;
}

console.log(solution(numList));