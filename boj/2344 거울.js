/**
 * 2344 거울
 * 세로N 가로 M박스에 거울이 있다.
 * 구멍은 좌측 상단부터 시계 반대방향으로 1, 2, ... 번호가 붙어있다.
 * 2x3경우
 *  10 9 8
 * 1       7
 * 2       6
 *  3  4  5
 * 거울의 모양은 /
 * 각 구멍으로 빛을 쐈을 때 나가게 되는 구멍을 구하는 프로그램 작성.
 * 순환되는 경우는 없는듯 하다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2 3',
  '0 1 0',
  '0 1 1',
]
const [N, M] = input[0].split(' ').map(Number)
const INFO = input.slice(1).map(el => el.split(' ').map(Number));

const solution = (n, m, info) => {
  const answer = [];
  const board = Array.from({ length: n + 2 }, () => Array.from({ length: m + 2 }, () => 0));
  let dir = -1;
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      board[i][j] = info[i - 1][j - 1]
    }
  }


  // 면
  // l b r t
  // 이동 방향 
  // r t l b
  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];

  const switchDir = (dir) => {
    if(dir===0) return 1;
    else if(dir===1) return 0;
    else if(dir===2) return 3;
    else if(dir===3) return 2;
  }

  const inRange = (x, y) => x>0 && y>0 && x<n+1 && y<m+1

  // board 출구 번호 세팅 - 반시계방향
  const initExitNumber = () => {
    let idx = 1;
    for (let i = 1; i < n + 1; i++) { // left
      board[i][0] = idx;
      idx++;
    }
    for (let i = 1; i < m + 1; i++) { // bottom
      board[n+1][i] = idx; 
      idx++;
    }
    for (let i = n; i >0; i--) { // right
      board[i][m+1] = idx;
      idx++;
    }
    for (let i = m; i >0; i--) { // top
      board[0][i] = idx;
      idx++;
    }
  }

  // 출구로 이동
  const moveToExit = (q, dir) => {
    while(q.length!==0){
      const [cx, cy] = q.shift();
      if(board[cx][cy]===1){ dir = switchDir(dir); }

      const [nx, ny] = [cx+dx[dir], cy+dy[dir]];

      if(!inRange(cx,cy)){
        answer.push(board[cx][cy]);
        break;
      } else{
        q.push([nx, ny]);
      } 
    }
  } 

  // 방향별로 try
  const getExitNumber = (dNumber) => {
    let dir = dNumber;
    switch(dir){
      case 0: // left
        for (let i = 1; i < n + 1; i++) {
          const q = [[i, 1]];
          moveToExit(q, dir);
          dir=0;
        }
        break;
      case 1: // bottom
        for (let j = 1; j < m + 1; j++) {
          const q = [[n, j]];
          moveToExit(q, dir);
          dir=1;
        }
        break;
      case 2: // right
        for (let i = n; i > 0; i--) {
          const q = [[i, m]];
          moveToExit(q, dir);
          dir=2;
        }
        break;
      case 3: // top
        for (let j = m; j > 0; j--) {
          const q = [[1, j]];
          moveToExit(q, dir);
          dir=3;
        }
        break;
    }
  }

  initExitNumber();
  for(let dir = 0; dir<4; dir++) getExitNumber(dir)
  
  return answer.join(' ');
}

console.log(solution(N, M, INFO))