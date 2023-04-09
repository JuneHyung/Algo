/**
 * 1926 그림
 * 도화지에 그림이 그려져 있을 때 그림의 갯수와 그림 중 가장 넓은 것의 넓이를 출력.
 * 그림은 가로세로로 1로 연결된 것.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1 1',
  '0',
]
const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.map(el => el.split(' ').map(Number));

const solution = (n, m, board) => { 
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
  const pictures = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < m;
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) { 
      if (!visited[i][j] && board[i][j] === 1) { 
        const q = [[i, j]];
        visited[i][j] = true;
        let width = 1;
        while (q.length !== 0) { 
          const [curX, curY] = q.shift();
          for (let k = 0; k < 4; k++) { 
            const nx = curX + dx[k];
            const ny = curY + dy[k];
            if (inRange(nx, ny) && !visited[nx][ny] && board[nx][ny]===1) { 
              visited[nx][ny] = true;
              q.push([nx, ny]);
              width++;
            }
          }
        }
        pictures.push(width);
      }
    }
  }
  const answer = [pictures.length];
  let max = pictures.length === 0 ? 0 : Math.max(...pictures);
  answer.push(max)
  return answer.join('\n')
}

console.log(solution(N, M, BOARD))