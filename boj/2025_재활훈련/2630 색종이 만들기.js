/**
 * 2630 색종이 만들기
 * 규칙에 따라 잘라서 다양한 크기를 가진 정사각형 모야으이 흰색 또는 파란색 색종이를 만드려한다.
 *
 * NxN (N=2^k, k= 1~7)
 * 전체 종이가 모두 같은 색으로 칠해져 있지않으면 가로와 세로로 중간 부분을 잘라 N/2 x N/2크기 색종이로나눈다.
 * 나눈 색종이가 또 같은 색이 아니면 같은 방법으로 4개 색종이로 나눈다.
 * 흰색 또는 파란색으로 칠해져있거나 하나의 정사각형 칸이 되어 더 이상 자를 수 없을 때 까지 반복.
 *
 * 하얀색 색종이와 파란색 색종이 개수 구하기.
 */
/**
 * 쿼드트리랑 같은방법으로 분할정복
 * 모두 같을떄 board의 값이 무엇이냐 따라 white나 blue값 +1
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['8', '1 1 0 0 0 0 1 1', '1 1 0 0 0 0 1 1', '0 0 0 0 1 1 0 0', '0 0 0 0 1 1 0 0', '1 0 0 0 1 1 1 1', '0 1 0 0 1 1 1 1', '0 0 1 1 1 1 1 1', '0 0 1 1 1 1 1 1'];
const N = Number(input[0]);
const BOARD = input.slice(1).map((el) => el.split(' ').map(Number));

const solution = (n, board) => {
  const checkAllSame = (x, y, len) => {
    const start = board[x][y];
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (board[i][j] !== start) return false;
      }
    }
    return true;
  };

  let white = 0;
  let blue = 0;

  const dfs = (x, y, len) => {
    if (checkAllSame(x, y, len)) {
      const start = board[x][y];
      start === 0 ? white++ : blue++;
      return;
    }

    const half = len / 2;

    dfs(x, y, half);
    dfs(x, y + half, half);
    dfs(x + half, y, half);
    dfs(x + half, y + half, half);
  };

  dfs(0, 0, n);
  return `${[white, blue].join('\n')}`;
};

console.log(solution(N, BOARD));
