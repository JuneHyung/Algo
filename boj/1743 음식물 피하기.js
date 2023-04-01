/**
 * 1743 음식물 피하기
 * 
 * 통로에 음식물이 덜어져있다.
 * 음식물은 근처있는것 끼리 뭉쳐 큰 음식물 쓰레기가 된다.
 * 
 * 통로 세로길이 N
 * 통로 가로길이 M
 * 쓰레기 개수 K가 주어진다.
 * 
 * K줄에 음식물이 떨어진 좌표가 주어진다.
 * 음식물 중 가장 큰 음식물 크기를 구하라
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 4 5',
'3 2',
'2 2',
'3 1',
'2 3',
'1 1',
]
const [N, M, K] = input.shift().split(' ').map(Number);
const BOARD = Array.from({ length: N }, () => Array.from({ length: M }, () => '.'))
for (let k = 0; k < K; k++) { 
  const [r, c] = input.shift().split(' ').map(Number)
  BOARD[r-1][c-1] = '#';
}

const solution = (n, m, board) => { 
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
  const dx =[-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]
  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < m;
  const dfs = (cur) => { 
    const [curX, curY] = cur;
    visited[curX][curY] = true;
    for (let k = 0; k < 4; k++) { 
      const nx = curX + dx[k]
      const ny = curY + dy[k]
      if (inRange(nx, ny) && !visited[nx][ny] && board[nx][ny] === '#') { 
        cnt++;
        dfs([nx, ny]);
      }
    }
  }

  let answer = Number.MIN_SAFE_INTEGER;
  let cnt = 1;
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && board[i][j] === '#') { 
        cnt = 1;
        dfs([i, j]);
        answer = Math.max(answer, cnt);
        // console.log(answer)
      }
    }
  }
  return answer;
}

console.log(solution(N, M, BOARD))