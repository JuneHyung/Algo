/**
 * 2615 오목
 */
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = [
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 2 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0',
  '0 1 2 0 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0',
  '0 0 1 2 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 1 2 2 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 1 1 0 1 2 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
];
const BOARD = input.map((el) => el.split(" ").map(Number));
const solution = (board) => {
  let stone = 0;
  let answer = [0, 0];

  const inRange = (x, y) => x >= 0 && y >= 0 && x < 19 && y < 19;

  const dx = [-1,0,1,1];
  const dy = [1,1,1,0];

  const check = (x, y, cur) => {
    for (let d = 0; d < 4; d++) {
      let nx = x+dx[d], ny=y+dy[d];
      let cnt = 1;
      
      while(true){
        if (inRange(nx, ny) && board[nx][ny] === cur) {
          cnt++;
          nx = nx+dx[d];
          ny = ny+dy[d];
        }else break;
      }
      if (cnt === 5) {
        let prevX = x-dx[d];
        let prevY = y-dy[d];
        if(inRange(prevX, prevY) && board[prevX][prevY]===cur) continue;
        stone = cur;
        answer[0]=x+1;
        answer[1]=y+1;
        return;
      }
    }
    return;
  };

  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      if (board[i][j] !== 0) {
        check(i, j, board[i][j]);
      }
    }
  }

  if(stone===0) return 0;
  else {
    return stone + "\n" + `${answer.join(" ")}`;
  }
};

console.log(solution(BOARD));
