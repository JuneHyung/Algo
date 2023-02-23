/**
 * (r-2, c-1), (r-2, c+1), (r, c-2), (r, c+2), (r+2, c-1), (r+2, c+1)
 * 
 * r1, c1에서 r2, c2로 갈 수 있는 최소 이동횟수 구하기.
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = [
  '7',
'6 6 0 1',
]
// const input = [
//   '6',
// '5 1 0 5',
// ]
const N = Number(input.shift());
const [r1, c1, r2, c2] = input.shift().split(' ').map(Number);
const solution = (n, cur, end) => {
  // const board = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  const dx = [-2, -2, 0, 0, 2, 2];
  const dy = [-1, 1, -2, 2, -1, 1];
  
  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < n;
  let q = [[...cur, 0]];
  let answer = Number.MAX_SAFE_INTEGER;
  const bfs = (q) => { 
    while (q.length !== 0) { 
      const [curX, curY, cnt] = q.shift();
      if (curX === end[0] && curY === end[1]) { 
        answer = cnt;
        break;
      }
      for (let k = 0; k < 6; k++) { 
        const nx = curX + dx[k];
        const ny = curY + dy[k];
        if (inRange(nx, ny) && !visited[nx][ny]) { 
          visited[nx][ny] = true;
          q.push([nx, ny, cnt+1])
        }
      }
    }
  }
  visited[cur[0]][cur[1]] = true;
  bfs(q);
  return answer===Number.MAX_SAFE_INTEGER ? -1 : answer;
}
console.log(solution(N, [r1, c1], [r2, c2]))