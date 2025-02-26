/**
 * 1018 체스판 다시 칠하기
 * MxN 크기 보드가 있다.
 * 어떤건 검은색 나머지는 흰색
 * 보드를 잘라 8x8보드를 만드려한다.
 * 각 칸이 검은색과 흰색중하나로 칠해져있고, 변을 공유하는 2개 사각형은 다른색으로 칠해져 있어야한다.
 * 8x8은 아무데서나 골라도되고, 다시 칠해야하는 정사각형 최소개수를 구하시오.
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
const [N, M] = input[0].split(' ').map(Number);
const BOARD = input.slice(1)

const solution = (n, m, board) => {
  
  const whiteStartBoard = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
  ];

  const blackStartBoard = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
  ];

  let result = Number.MAX_SAFE_INTEGER;

  const checkBoard = (x, y, targetBoard) => {
    let cnt = 0;
    console.log(x, y)
    for(let i=x;i<x+8;i++){
      for(let j=y;j<y+8;j++){
        cnt = board[i][j]!==targetBoard[i-x][j-y] ? cnt+1 : cnt;
      }
    }
    return cnt;
  }

  for(let i=0;i<N;i++){
    if(i+8>n) continue;
    for(let j=0;j<M;j++){
      if(j+8>m) continue;
      const whiteStartCnt = checkBoard(i, j, whiteStartBoard);
      const blackStartCnt = checkBoard(i, j, blackStartBoard);
      result = Math.min(result, whiteStartCnt, blackStartCnt);
    }
  }

  return result;
}

console.log(solution(N, M, BOARD));