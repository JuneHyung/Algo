/**
 * 등굣길
 * 좌 위에서 우하까지 갈꺼다.
 * 일부 물에 잠겼다.
 * 이를 피해서 목표지점까지 갈거다.
 * 오른쪽과 아래로만 움직여 갈 수 있는 개수를 1,000,000,007로 나눈 나머지를 리턴.
 */
const solution = (m, n, puddles) => {
  const board = Array.from({length:n},()=>Array.from({length:m},()=>0));
  board[0][0] = 0;

  for(const [x,y] of puddles) board[y-1][x-1] = -1;
  
  // col
  for(let i=1;i<n;i++){ 
    if(board[i][0]===-1) break;
    board[i][0] = 1;
  }
  // row
  for(let i=1;i<m;i++){ 
    if(board[0][i]===-1) break;
    board[0][i] = 1;
  }

  // sum
  for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
      if(board[i][j]===-1) continue;
      else if(board[i][j-1]===-1) board[i][j] = board[i-1][j];
      else if(board[i-1][j]===-1) board[i][j] = board[i][j-1];
      else board[i][j] = (board[i-1][j] + board[i][j-1])%1000000007
    }
  }
  return board[n-1][m-1];
}

const m = 4;
const n = 3; const puddles = [[2,2,0]]
console.log(solution(m, n, puddles))

/**
0  1  1  1
1 -1  1  2
1  1  2  4
 */