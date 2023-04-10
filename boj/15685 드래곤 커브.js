/**
 * 15685 드래곤 커브
 * 드래곤 커브는 3가지 속성으로 구성
 * 2차원 좌표 위에서 정의된다.
 * 1. 시작점
 * 2. 시작방향
 * 3. 세대
 * 
 * k세대 드래곤 커브는 k-1세대 드래곤 커브를 끝점을 기준으로
 * 시계방향 회전시킨다음 그것을 끝점에 붙인 것이다.
 * 
 * 100x100 격자위에 드래곤 커브가 N개있다.
 * 1x1인 정사각혀으이 4꼭지점이 모두 드래곤 커브의 일부인 정사각형의 개수를 구하는 프로그램 작성.
 * 
 * 커브갯수 N
 * 커브 정보 x, y, d, g가 주어진다.
 * x, y : 시작점
 * d : 방향 - [0, 1, 2, 3] = [우, 상, 좌, 하]
 * g : 세대
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3',
'3 3 0 1',
'4 2 2 1',
'4 2 1 3',
]
const N = Number(input.shift())
const BOARD = Array.from({ length: 101 }, () => Array.from({ length: 101 }, () => false));
const INFO = input.map(el => el.split(' ').map(Number)).sort((a, b) => a[3] - b[3]);

function rotateBoard(n, board, info) { 
  // 우 상 좌 하
  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];
  for (let i = 0; i < n; i++) {
    const [y, x, d, g] = info[i];
    board[x][y] = true;
    let [curX, curY, curD, curG] = [x, y, d, 0];
    let q = [[x, y]];
    while (curG <= g) { 
      if (curG === 0) { 
        const nx = curX + dx[curD];
        const ny = curY + dy[curD];
        board[nx][ny] = true;
        q.push([nx, ny]);
        curX = nx;
        curY = ny;
      }
      else { 
        const len = q.length - 1;
        for (let k = len; k >= 0; k--) { 
          const [prevX, prevY] = q[k];
          const nx = prevY - curY + curX;
          const ny = -1 * (prevX - curX) + curY;
          board[nx][ny] = true;
          q.push([nx, ny]);
        }
        curX = q[q.length - 1][0];
        curY = q[q.length - 1][1];
      }
      curG++;
      curD =(curD+1)%4
    }
  }
}
const getSquare = (board) => { 
  let cnt = 0;
  for (let i = 0; i < 100; i++) { 
    for (let j = 0; j < 100; j++) { 
      if (board[i][j] && board[i][j + 1] && board[i + 1][j] && board[i + 1][j + 1]) cnt++;
    }
  }
  return cnt;
}
const solution = (n, board, info) => { 
  rotateBoard(n, board, info);
  const answer = getSquare(board);
  return answer;
}

console.log(solution(N, BOARD, INFO))