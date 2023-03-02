/**
 * 2573 빙산
 * 바다 : 0
 * 숫자 : 높이
 * 
 * 1년마다 동서남북에 붙은 바닷물(0)의 수만큼 녹는다.
 * 빙산이 두덩어리 이상으로 분리되는 최초의 시간을 구하자.
 * 만일 전부 다 녹기전에 두 덩어리 이상으로 분리 되지 않으면 0을 출력한다.
 * 
 * inRange지우고, checkAllZero추가, n,m전역변수 사용등으로 해서 시간초과 해결.
 * checkAllZero가 핵심이였던거 같음.
 */
// const fs = require('fs')
// const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const input = [
  '5 7',
'0 0 0 0 0 0 0',
'0 2 4 5 3 0 0',
'0 3 0 2 5 2 0',
'0 7 6 2 4 0 0',
'0 0 0 0 0 0 0',
]
const [N, M] = input.shift().split(' ').map(Number);
const BOARD = input.map(el=>el.split(' ').map(Number));


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const checkIsland = (board) => {
  let cnt = 0;
  const visited= Array.from({length:N}, ()=>Array.from({length:M}, ()=>false));
  for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
      if(board[i][j]!==0 && !visited[i][j]){
        const q = [[i, j]];
        visited[i][j] = true;
        while(q.length!==0){
          const [curX, curY] = q.shift();
          for(let k=0;k<4;k++){
            const nx = curX + dx[k];
            const ny = curY + dy[k];
            if(nx>=0 && ny>=0 && nx<N && ny<M && !visited[nx][ny] && board[nx][ny]!==0){
              visited[nx][ny] = true;
              q.push([nx,ny]);
            }
          }
        }
        cnt++;
      }
    }
  }

  return cnt>1;
}
const checkAllZero = (board) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};
const meltIsland = (board) =>{
  const saved= Array.from({length:N}, ()=>Array.from({length:M}, ()=>0));

  for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
      if(board[i][j]!==0){
        for(let k=0;k<4;k++){
          const nx = i + dx[k];
          const ny = j + dy[k];
          if(nx>=0 && ny>=0 && nx<N && ny<M && board[nx][ny] ===0 ) saved[i][j]++;
        }
      }
    }
  }

  for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
      if(board[i][j]!==0) board[i][j] = board[i][j]-saved[i][j] <=0 ? 0 : board[i][j]-saved[i][j];
    }
  }
}

const solution = (board) =>{
  let time = 0;
  while(true){
    if(checkIsland(board)) break;
    if(checkAllZero(board)){
      time=0;
      break;
    }
    meltIsland(board);
    time++;
  }
  return time;
}

console.log(solution(BOARD))