/**
 * 24723 녹색거탑
 * 그림의 시야에 보이지 않는 블록은 없다.
 * 그림의 시야에 보이는 블록의 윗면만 이용해 녹색거탑을 내려올 수 있다.
 * 녹색거탑이 
 * N층이면, 총 
 * N개의 블록을 이용한 최단 경로로만 내려온다.
 * 녹색거탑을 내려올 때는 정상에서 시작해 노란색 바닥까지, 항상 인접한 아래층의 블록으로만 내려온다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '5'
const N = Number(input);

const solution = (N) => {
  const result = Math.pow(2, N);
  return result;
}
console.log(solution(N))