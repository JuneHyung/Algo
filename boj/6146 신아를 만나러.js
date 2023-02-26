/**
 * 6146 신아를 만나러
 * 키파는 0,0에 위치.
 * 웅덩이가 N개있다.
 * 집위치는 X, Y
 * 웅덩이는 A, B에 위치함.
 * A와 B는 -500 ~ 500
 * 물 웅덩이를 밟지않으면서 이동할수 있는 최소 ㄱ리.
 * X,Y N이 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '1 2 7',
'0 2',
'-1 3',
'3 1',
'1 1',
'4 2',
'-1 1',
'2 2',
]
const [X, Y, N] = input.shift().split(' ').map(Number);
const BOARD = Array.from({ length: 1002 }, () => Array.from({ length: 1002 }, () => 0));
const VISITED = Array.from({ length: 1002 }, () => Array.from({ length: 1002 }, () => false));
for (let i = 0; i < N; i++) { 
  let [a, b] = input.shift().split(' ').map(Number);
  a += 500;
  b += 500;
  BOARD[a][b] = 1;
}

const solution = (x, y, n, board,visited) => { 
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let q = [[500, 500, 0]];
  visited[500][500] = true;
  const goalX = x + 500;
  const goalY = y + 500;
  let answer = Number.MAX_SAFE_INTEGER;

  const inRange = (x,y) => { 
    return x >= 0 && y >= 0 && x < 1002 && y < 1002;
  }

  while (q.length !== 0) { 
    
    const [curX, curY, cnt] = q.shift();
    if (curX === goalX && curY === goalY) {
      answer = Math.min(answer, cnt);
    }
    for (let k = 0; k < 4; k++) { 
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if (inRange(nx, ny) && board[nx][ny] === 0 && !visited[nx][ny]) { 
        visited[nx][ny] = true;
        q.push([nx, ny, cnt + 1]);
      }
    }
  }
  return answer;
}

console.log(solution(X, Y, N, BOARD, VISITED))