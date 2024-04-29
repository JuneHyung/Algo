/**
 * 14712 넴모넴모
 * 빈칸에 넴모를 놓고 2x2크기의 넴모들을 모두 없애는 것.
 * 지울수 있는 넴모가 없으면 그만둔다. 네모가 게임을 그만두었을 때 나올 수 있는 넴모 배치 갯수 구하기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = "2 2";
const INFO = input.split(' ').map(Number);
const solution = (info) => {
  const [n, m] = info;
  let answer = 0;
  const board = Array.from({length:n+1},()=>Array.from({length:m+1},()=>false));

  const check = (depth) => {
    if(depth < 4) return true;
    for(let i=0;i<n-1;i++){
      for(let j=0;j<m-1;j++){
        if(board[i][j] && board[i][j+1] && board[i+1][j] && board[i+1][j+1]) return false;
      }
    }
    return true;
  }

  const dfs = (depth, start) => {
    answer += check(depth) ? 1 : 0;

    if(depth===n*m) return;

    for(let i=start; i<n*m; i++){
      let r = Math.floor(i/m);
      let c = i%m;

      if(board[r][c]) continue;
      board[r][c] = true;
      dfs(depth+1, i+1);
      board[r][c] = false;
    }
  }
  dfs(0, 0);
  return answer;
}


console.log(solution(INFO))