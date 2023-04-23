/**
 * 3085 사탕게임
 * NxN크기에 사탕을 채워 놓고, 사탕 색은 모두 같지 않을 수 있따.
 * 색이다른 인접한 두 칸을 고른다.
 * 서로 교환한다.
 * 같은 색으로 이루어진 가장 긴 연속부분(행 또는 열)을 고른다음 그 사탕을 모두 먹는다.
 * 사탕이 채워진 상태가 주어졌을때 먹을 수 있는 최대 개수를 구하라.
 *
 * 보드 크기 N
 * 사탕 색상 빨강 C , 파랑 P, 초록 Z, 노랑 Y로 주어진다.
 *
 * 상근이가 먹을 수 있는 사탕의 최대 수를 출력.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['5', 'YCPZY', 'CYZZP', 'CCPPP', 'YCYZC', 'CPPZZ'];

const N = Number(input.shift());
const BOARD = input.map((el) => el.split(''));

const getMaxCnt = (n, board) => {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let rowCnt = 1;
    let colCnt = 1;
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] === board[i][j + 1]) {
        rowCnt++;
      } else {
        cnt = Math.max(cnt, rowCnt);
        rowCnt = 1;
      }

      if (board[j][i] === board[j + 1][i]) {
        colCnt++;
      } else {
        cnt = Math.max(cnt, colCnt);
        colCnt = 1;
      }
    }
    // console.log(cnt, rowCnt, colCnt);
    cnt = Math.max(cnt, rowCnt, colCnt);
    if (cnt === n) break;
  }
  return cnt;
};

const solution = (n, board) => {
  let answer = -1;

  // 위치 바꾸기
  function swapPosition(lt, rt) {
    const [ltX, ltY] = lt;
    const [rtX, rtY] = rt;
    let beforeLeft = board[ltX][ltY];
    board[ltX][ltY] = board[rtX][rtY];
    board[rtX][rtY] = beforeLeft;
  }

  // row 바꾸기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] !== board[i][j + 1]) {
        swapPosition([i, j], [i, j + 1]);
        const max = getMaxCnt(n, board);
        answer = Math.max(answer, max);
        swapPosition([i, j + 1], [i, j]);
      }
      if (answer === n) break;
    }
  }

  // col 바꾸기
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== board[i + 1][j]) {
        swapPosition([i, j], [i + 1, j]);
        const max = getMaxCnt(n, board);
        answer = Math.max(answer, max);
        swapPosition([i + 1, j], [i, j]);
      }
      if (answer === n) break;
    }
  }
  return answer;
};

console.log(solution(N, BOARD));
