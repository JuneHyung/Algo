/**
 * 17144 미세먼지 안녕
 * 미세먼지 제거를 위해 공기청정기 설치.
 * RxC 격자판
 * 공기청정기는 항상 1번열에 존재하며 두 행을 차지함
 * 
 * 1초동안 확산하고 청정기가 작동함.
 * 확산
 * 확산은 미세먼지가 있는 모든 칸에서 동시에 일어남.
 * r,c에서 4방향으로 확산함.
 * 인접방향에 공기청정기거나 칸이없으면 확산 X
 * 확산되는양은 (r,c) / 5, 소수점은 버림
 * (r,c)의 남은양은 (r,c) - ((r,c)/5)*확산방향 개수
 * 
 * 이동
 * 위쪽은 반시계방향
 * 아래쪽은 시계방향으로 순환함.
 * 바람방향대로 한칸씩 이동함.
 * 공기청정기로 들어가게 되면 모두 정화함.
 * 
 * T초후 남은 미세먼지양을 구하자.
 */

const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7 8 1',
'0 0 0 0 0 0 0 9',
'0 0 0 0 3 0 0 8',
'-1 0 5 0 0 0 22 0',
'-1 8 0 0 0 0 0 0',
'0 0 0 0 0 10 43 0',
'0 0 5 0 15 0 0 0',
'0 0 40 0 0 0 20 0',
]

const [R, C, T] = input.shift().split(' ').map(Number)
const BOARD = input.map(el => el.split(' ').map(Number));

const findCleaner = (r, c, board) => { 
  const result = []
  for (let i = 0; i < r; i++) { 
      if(board[i][0]===-1) result.push(i)
  }
  return result;
}


const findDust = (r, c, board) => { 
  const result = [];
  for (let i = 0; i < r; i++) { 
    for (let j = 0; j < c; j++) { 
      if(board[i][j]>0) result.push([i,j])
    }
  }
  return result;
}
const inRange = (x, y, r, c) => x >= 0 && y >= 0 && x < r && y < c;
const isCleaner = (x, y, tX, bX) => (x===tX && y===0) || (x===bX && y===0)

const spreadDust = (r, c, board, saved, tX, bX, dustList) => { 
  const dx = [-1,1,0,0]
  const dy = [0,0,-1,1]
  for (const [dustX, dustY] of dustList) { 
    let cnt = 0;
    let value;
    for (let k = 0; k < 4; k++) { 
      const nx = dustX + dx[k];
      const ny = dustY + dy[k];
      if (inRange(nx, ny, r, c) && !isCleaner(nx, ny, tX, bX)) { 
        value = Math.floor(board[dustX][dustY] / 5);
        saved[nx][ny] += value;
        cnt += 1;
      }
    }
    if (value|| value===0) saved[dustX][dustY] += board[dustX][dustY] - cnt * value;
    else saved[dustX][dustY] += board[dustX][dustY];
  }
  
}

const copyBoardToSaved = (r, c, board, saved) => { 
  for (let i = 0; i < r; i++) { 
    for (let j = 0; j < c; j++) { 
      board[i][j] = saved[i][j]
    }
  }
}

const cleanUp = (r, c, board, tX) => { 
  for (let i = tX - 1; i >= 0; i--) {  // 위 -> 아래
    if (i + 1 !== tX) board[i + 1][0] = board[i][0];
  }
  for (let i = 1; i < c; i++) {  // 우 -> 좌
    board[0][i - 1] = board[0][i];
  }
  for (let i = 1; i <= tX; i++) { // 아래 -> 위
    board[i - 1][c - 1] = board[i][c - 1];
  }
  for (let i = c - 2; i >= 0; i--) { // 좌 -> 우
    board[tX][i + 1] = board[tX][i];
  }
}
const cleanDown = (r, c, board, bX) => { 
  for (let i = bX + 1; i < r; i++) {  // 아래 -> 위
    if (i - 1 !== bX) board[i - 1][0] = board[i][0];
  }
  for (let i = 1; i < c; i++) {  // 우 -> 좌
    board[r-1][i - 1] = board[r-1][i];
  }
  for (let i = r-2; i >= bX; i--) { // 위 -> 아래
    board[i + 1][c - 1] = board[i][c - 1];
  }
  for (let i = c - 2; i >= 0; i--) { // 좌 -> 우
    board[bX][i + 1] = board[bX][i];
  }
}

const getDustCnt = (board) => {
  return board.map(el=>el.reduce((acc,cur)=>acc+cur, 0)).reduce((acc, cur)=> acc+cur, 0)
}
const solution = (r, c, time, board) => {
  const [tX, bX] = findCleaner(r, c, board)
  
  for (let t = 0; t < time; t++) { 
    const saved = Array.from({ length: r }, () => Array.from({ length: c }, () => 0));
    const dustList = findDust(r, c, board);
    spreadDust(r, c, board, saved, tX, bX, dustList);
    copyBoardToSaved(r, c, board, saved);
    // console.log(board);
    cleanUp(r, c, board, tX);
    cleanDown(r, c, board, bX);
  }
  const answer = getDustCnt(board);
  return answer;
}
console.log(solution(R, C, T, BOARD))