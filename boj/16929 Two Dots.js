/**
 * 16929 Two Dots
 * 각 칸은 색이 칠해진 공이 하나씩 있다.
 * 사이클을 찾자.
 * 
 * 사이클 정의
 * 모든 k개 점은 서로 다르다
 * k는 4보다 크거나 같다.
 * 모든 점의 색은 같다
 * 모든 1 ≤ i ≤ k-1에 대해서, di와 di+1은 인접하다. 
 * 또, dk와 d1도 인접해야 한다. 
 * 두 점이 인접하다는 것은 각각의 점이 들어있는 칸이 변을 공유한다는 의미이다.
 * 사이클이 존재하면 Yes, 없으면 No 출력.
 * 
 * 1. 0,0에서만 시작해 방문체크 => X => 전체순회 필요. 
 * 전체순회하면서 시작과 이동좌표들을 가지고 색이 같은지 방문했는지 체크하면서 dfs => 실패.
 * 2. 시작위치로 올떄 갯수가 4개이상인지 체크 => 사이클이려면 4개이상이어야함.
 * 3. endFlag추가
 * 
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 4',
'AAAA',
'ABCA',
'AADA',
]

const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.map(el => el.split(''));
let endFlag = false;
const inRange = (n, m, x, y) => x >= 0 && y >= 0 && x < n && y <m;
const dfs = (n, m, start, cur, board, visited, cnt) => { 
  const [sX, sY] = start;
  const [curX, curY] = cur;
  if (endFlag) return true;
  if (sX === curX && sY === curY && cnt >= 4 && visited[curX][curY]) {
    endFlag = true;
    return true;
  }
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  for (let k = 0; k < 4; k++) { 
    const nx = curX + dx[k];
    const ny = curY + dy[k];
    if (inRange(n, m, nx, ny) && board[nx][ny] === board[sX][sY] && !visited[nx][ny]) { 
      visited[nx][ny] = true;
      dfs(n, m, start, [nx, ny], board, visited, cnt + 1);
      visited[nx][ny] = false;
    }
  }  
  return false;
}
const solution = (n, m, board) => { 
  let answer = false;
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) { 
      answer = dfs(n, m, [i, j], [i, j], board, visited, 1)
      if (answer) break;
    }
    if (answer) break;
  }
  return answer ? 'Yes' : 'No'
}


console.log(solution(N, M, BOARD))