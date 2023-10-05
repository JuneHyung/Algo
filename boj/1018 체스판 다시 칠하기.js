/**
 * 1018 체스판 다시 칠하기
 * MN개의 정사각형으로 나뉜 MxN크기 보드를 찾았다.
 * 8x8크기 체스판 만드려 한다.
 * 검흰은 번갈아가며 칠해져야한다.
 * 
 * 8x8크기의 체스판으로 잘라 몇개 정사각형을 다시 칠해야 곗다고 생각했다.
 * 다시 칠해야하는 정사각형의 최소 개수를 구하시오.
 * 
 * M가로 N세로
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10 13',
'BBBBBBBBWBWBW',
'BBBBBBBBBWBWB',
'BBBBBBBBWBWBW',
'BBBBBBBBBWBWB',
'BBBBBBBBWBWBW',
'BBBBBBBBBWBWB',
'BBBBBBBBWBWBW',
'BBBBBBBBBWBWB',
'WWWWWWWWWWBWB',
'WWWWWWWWWWBWB',
]
const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split(''))

const solution = (n, m,board) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const whiteBoard = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
  const blackBoard = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

  const check = (x, y) => {
    let white = 0, black = 0;

    for(let i=x;i<x+8;i++){
      for(let j=y;j<y+8;j++){
        if(board[i][j] !== whiteBoard[i-x][j-y]) white++;
        if(board[i][j] !== blackBoard[i-x][j-y]) black++;
      }
    }
    let min = Math.min(white, black)
    answer = Math.min(answer, min);
  }

  for(let i=0;i<=n-8;i++){
    for(let j=0;j<=m-8;j++){
      check(i,j)
    }
  }

  // console.log(whiteBoard)
  // console.log(blackBoard)
  // console.log();
  return answer;
}

console.log(solution(N, M, BOARD))