const solution = (board) => { 
  let n = board.length;
  let answer = 0;
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];
  const DFS = (x, y) => { 
    if (x === 6 && y === 6) answer++;
    else { 
      for (let k = 0; k < 4; k++) { 
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) { 
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
          [0, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 1, 0, 0, 0],
          [1, 1, 0, 1, 0, 1, 1],
          [1, 1, 0, 0, 0, 0, 1],
          [1, 1, 0, 1, 1, 0, 0],
          [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));