/**
 * 2738 행렬 덧셈
 * NxM 두 행렬 A, B가 주어졌을 때 두 행렬더하는 프로그램 작성
 * 
 * 첫줄 행렬크기 N, M
 * 둘줄부터 N개 줄에 행렬 A의 원소 M개
 * 이어 N개 줄에 행렬 B의 원소 M개
 * 
 * N, M은 100보다 작거나 같고 원소는 절대값이 100보다 작거나 같다.
 * 
 * N개 줄에 걸쳐 A와 B를 더한 행렬 출력. 각 원소는 공백으로 구분
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 3',
  '1 1 1',
  '2 2 2',
  '0 1 0',
  '3 3 3',
  '4 4 4',
  '5 5 100',
]
const [N, M] = input[0].split(' ').map(Number);
const matrixA = input.slice(1, N + 1).map(el => el.split(' ').map(Number))
const matrixB = input.slice(N + 1).map(el => el.split(' ').map(Number))

const solution = (n, m, matrixA, matrixB) => {
  const matrix = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      matrix[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }

  const result = matrix.map(row => row.join(' ')).join('\n');

  return result;
}

console.log(solution(N, M, matrixA, matrixB));