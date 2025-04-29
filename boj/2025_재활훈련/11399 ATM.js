/**
 * 11399 ATM
 * N명 사람들이 줄 서있따.
 * i번 사람이 돈을 인출하는데 걸리는 시간은 P분이다.
 * 각 사람이 돈을 인출하는데 필요한 시간의 합의 최소값을 구하는 프로그램 작성
 */
/**
 * 낮은 순으로 정렬 후 합 구하기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input= [
  '5',
'3 1 4 3 2',
]
const N = Number(input[0])
const LIST = input[1].split(' ').map(Number);

const solution = (n, list) => {
  list.sort((a,b)=>a-b);

  let sum = 0;
  const result = list.reduce((a,c)=>{
    sum+=c;
    return a+sum;
  },0);

  return result;
}

console.log(solution(N, LIST));