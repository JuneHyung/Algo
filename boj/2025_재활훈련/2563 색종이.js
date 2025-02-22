/**
 * 2563 색종이
 * 가로 세로 100인 정사각형 모양 도화지가 있다.
 * 가로 세로 10인 색종이를 변이 평행하도록 붙인다.
 * 검은 영역의 넓이를 구하자.
 * 
 * 첫줄 색종이 수
 * 둘줄부터 색종이 붙인 위치
 * 좌측아래 꼭지점의 좌표가 주어진다.
 * 색종이 수는 100이하.
 * 도화지 밖으로 나가는 경우는 없다.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
  '3 7',
  '15 7',
  '5 2',
]
const N = Number(input[0]);
const infoList = input.slice(1).map(el => el.split(' ').map(Number));

const solution = (n, infoList) => {
  const board = Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => 0));

  for (const [r, c] of infoList) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board[r + i][c + j] = 1;
      }
    }
  }

  const flattedBoard = board.flat();
  const sum = flattedBoard.reduce((a, c) => a + c, 0)

  return sum;
}

console.log(solution(N, infoList));