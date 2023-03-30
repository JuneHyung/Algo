/**
 * 2468 안전 영역
 * 물에 잠기고 난 후 인접한 한 덩어리를 안전영역 1개라고 한다.
 * 물에 잠기지 않는 안전 영역의 최대 개수를 계산하는 프로그램 작성
 * 
 * 첫줄부터 N과 높이 정보가 주어진다.
 * 최대개수를 출력
 * 
 * 1. 1씩 줄이면서 안전구역 갯수 세고, 최대값 리턴 => 틀림
 * 2. copyBoard할 때 처음 경우를 count안하게 되있어서 수정.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
'1 1',
'1 1',
]
const N = Number(input.shift())
const BOARD = input.map(el => el.split(' ').map(Number))

const getCopyBoard = (n, board, depth) => { 
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < n; j++) { 
      if (depth === 0) board[i][j] = board[i][j];
      else board[i][j] = board[i][j]-1<=0 ? 0 : board[i][j]-1;
    }
  }
  return board;
}

const inRange = (n, x, y) => x >= 0 && y >= 0 && x < n && y < n;

const dfs = (n, node, board, visited) => { 
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const [curX, curY] = node;
  
  for (let k = 0; k < 4; k++) { 
    const nx = curX + dx[k];
    const ny = curY + dy[k];
    if (inRange(n, nx, ny) && !visited[nx][ny] && board[nx][ny]!==0 ) { 
      visited[nx][ny] = true;
      dfs(n, [nx, ny], board, visited);
    }
  }
}

const solution = (n, board) => {
  const safeZone = [];
  let depth = 0;
  while (true) { 
    const copyBoard = getCopyBoard(n, board, depth);
    console.log(copyBoard);
    depth++;
    let cnt = 0;
    const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
    for (let i = 0; i < n; i++) { 
      for (let j = 0; j < n; j++) { 
        if (!visited[i][j] && copyBoard[i][j] !== 0) { 
          visited[i][j] = true;
          dfs(n, [i, j], copyBoard, visited)
          cnt++;
        }
      }
    }
    safeZone.push(cnt);
    if (cnt === 0) break;
  }
  console.log(safeZone);
  const answer = Math.max(...safeZone)
  return answer;
}

console.log(solution(N, BOARD))