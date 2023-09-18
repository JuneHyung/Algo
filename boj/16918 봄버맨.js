/**
 * 16918 봄버맨
 * rxc 직사각형 격자판 위에 살고 있다.
 * 폭탄 칸은 3초가 지난 후 폭발하고, 폭탄이 폭발한 후 폭탄이 있던 칸이 파괴되 빈칸이 되며, 인접한 4칸도 파괴된다.
 * 인접한칸에 폭탄이 있으면 인접한 폭탄은 폭발 없이 파괴된다.
 * 
 * 1. 가장 처음 봄버맨은 일부 칸에 폭탄을 설치한다.
 * 2. 다음 1초 동안 봄버맨은 아무것도 하지 않는다.
 * 3. 다음 1초동안 폭탄이 설치되지 않은 모든 칸에 폭탄을 설치함.
 * 모든 칸은 폭탄을 가지고 있게 된다.
 * 4. 1초 후에 3초전에 설치된 폭탄이 모두 폭발한다.
 * 3과 4를 반복한다.
 * N초 후 격자판 상태를 구하려한다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6 7 3',
'.......',
'...O...',
'....O..',
'.......',
'OO.....',
'OO.....',
]
const [R, C, N] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split(''))

const solution = (r, c, n, board) => {
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]
  const inRange = (x, y) => x>=0 && y>=0 && x<r && y<c;
  let timeBoard = Array.from({length: r},()=>Array.from({length: c},()=>0))
  
  // 초기세팅
  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
      if(board[i][j]!=='.') timeBoard[i][j] = 3;
    }
  }
  
  let time = 1;
  while(time<=n){

    if(time %2 ===0){
      for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
          if(board[i][j]==='.'){
            board[i][j] = 'O';
            timeBoard[i][j] = time+3;
          }
        }
      }
    } else{
      for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
          if(timeBoard[i][j]===time){
            board[i][j] = '.';
            for(let k=0;k<4;k++){
              const nx = i+dx[k];
              const ny = j+dy[k];
              if(inRange(nx,ny) && board[nx][ny]==='O' && timeBoard[nx][ny]!==time){
                board[nx][ny] = '.';
                timeBoard[nx][ny] = 'O';
              }
            }
          }
        }
      }
    }
    time += 1;
  }

  return board.map(el=>el.join('')).join('\n')
}
console.log(solution(R, C, N, BOARD))