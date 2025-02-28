/**
 * 18870 좌표 압축
 * N개 좌표 x1, ... xn
 * 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
 * Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.
 * X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '5',
  '2 4 -10 4 -9',
]

const N = Number(input[0])
const posList = input[1].split(' ').map(Number);

const solution = (n, posList) => {
  const notDuplicated = [...new Set(posList)].sort((a,b)=>a-b);
  const idxMap = new Map();
  
  notDuplicated.forEach((el, idx)=>idxMap.set(el, idx));
  
  const result = posList.map(el=>idxMap.get(el)).join(' ');
  return result;
}

console.log(solution(N, posList));