/**
 * 14502 연구소
 * 연구소는 NxM
 * 빈칸과 벽으로 이루어짐
 * 새로 세울 수 있는 벽의 수는 3이며, 반드시 3개를 세워야 한다.
 * 바이러스는 상하좌우 인접한 빈칸으로 퍼져나갈 수 있다.
 * 연구소의 지도가 주어졌을 때 얻을 수 이는 안전 영역 크기의 최대값
 * 
 * 첫 줄 : N,M 3이상 8이하
 * 0 : 빈칸, 1: 벽, 2: 바이러스
 * 2의 개수는 10보다 작거나 같다.
 * 
 * 1. 벽을 하나하나 세우면서 3개가 됐을 때 바이러스를 퍼뜨리고 안전구역 개수를 세어 answer를 업데이트
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7 7',
  '2 0 0 0 1 1 0',
  '0 0 1 0 1 2 0',
  '0 1 1 0 1 0 0',
  '0 1 0 0 0 0 0',
  '0 0 0 0 0 1 1',
  '0 1 0 0 0 0 0',
  '0 1 0 0 0 0 0',
];

const [N, M] = input.shift().split(' ').map(Number);
const BOARD = input.map(el => el.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const inRange = (n, m, x, y) => x >= 0 && y >= 0 && x < n && y < m;
// 바이러스 퍼뜨리기.
const spreadVirus = (n, m, board) => {
  let q = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 2) q.push([i, j]);
    }
  }
  
  while (q.length !== 0) {
    let [curX, curY] = q.shift();
    for (let k = 0; k < 4; k++) {
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if (inRange(n, m, nx, ny) && board[nx][ny] === 0) {
        board[nx][ny] = 2;
        q.push([nx, ny]);
      }
    }
  }
  return board;
}

// safeZone 넓이 구하기
const countSafeZone = (n, m, board) => {
  let cnt = 0;
  board = spreadVirus(n, m, board);

  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) { 
      if (board[i][j] === 0) cnt++;
    }
  }
  
  return cnt;
}

// 원본 board 복사
const copyBoard = (n, m, board) => {
  let result = Array.from({length:n},()=>Array.from({length:m},()=>0));
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) { 
      result[i][j] = board[i][j]
    }
  }
  return result;
}

const dfs = (n, m, board, cnt, answer) => { 
  if (cnt === 3) { 
    let copy = copyBoard(n, m, board);
    let safeZone = countSafeZone(n, m, copy);

    answer = Math.max(answer, safeZone);
    return answer;
  }
  
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) { 
      if (board[i][j] === 0) { 
        board[i][j] = 1;
        answer = dfs(n,m,board,cnt + 1, answer);
        board[i][j] = 0;
      }
    }
  }
  return answer;
}

const solution = (n, m, board) => { 
  const answer = dfs(n,m,board,0, 0)
  return answer;
}
console.log(solution(N, M, BOARD));