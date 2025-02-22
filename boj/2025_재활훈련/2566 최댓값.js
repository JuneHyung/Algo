/**
 * 2566 최댓값
 * 9x9 81개 자연수 또는 0이 주어질 때, 최대값을 찾고, 그 최대값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3 23 85 34 17 74 25 52 65',
  '10 7 39 42 88 52 14 72 63',
  '87 42 18 78 53 45 18 84 53',
  '34 28 64 85 12 16 75 36 55',
  '21 77 45 35 28 75 90 76 1',
  '25 87 65 15 28 11 37 28 74',
  '65 27 75 41 7 89 78 64 39',
  '47 47 70 45 23 65 3 41 44',
  '87 13 82 38 31 12 29 29 80',
]
const board = input.map(el => el.split(' ').map(Number));

const solution = (board) => {
  const flattedBoard = board.flat();

  const max = Math.max(...flattedBoard);
  const len = 81;

  let maxIdx = -1;
  for (let i = 0; i < len; i++) {
    const cur = flattedBoard[i];
    if (cur === max) maxIdx = i;
  }

  const r = Math.floor(maxIdx / 9) + 1;
  const c = (maxIdx % 9) + 1;

  const result = [max, `${r} ${c}`]

  return result.join('\n');
}

console.log(solution(board));