/**
 * 2580
 * 1. 각각의 가로줄과 세로줄에는 1부터 9까지의 숫자가 한 번씩만 나타나야 한다.
 * 2. 굵은 선으로 구분되어 있는 3x3 정사각형 안에도 1부터 9까지의 숫자가 한 번씩만 나타나야 한다.
 * 
 * 스도쿠 판에 쓰여진 숫자 정보가 주어졌을 떄 빈 칸이 채워진 최종 모습을 출력.
 * 스도쿠 판을 규칙대로 채울 수 없는 경우는 주어지지 않는다.
 * 
 * 12095의 소스로 풀 수 있는 입력만 주어진다.
 */
/**
 * 
 * 0좌표만 모아서, 숫자를 1부터 9까지 하나씩 넣어보면서 가로, 세로, 사각형 체크하면서 재귀?
 * 종료 : 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '0 3 5 4 6 9 2 7 8',
'7 8 2 1 0 5 6 0 9',
'0 6 0 2 7 8 1 3 5',
'3 2 1 0 4 6 8 9 7',
'8 0 4 9 1 3 5 0 6',
'5 9 6 8 2 0 4 1 3',
'9 1 7 6 5 2 0 8 0',
'6 0 3 7 0 1 9 5 2',
'2 5 8 3 9 4 7 6 0',
]
const BOARD = input.map(el=>el.split(' ').map(Number))

const solution = (board) => {
  const n = 9;
  const zeroPos = [];

  let isSolved = false;

  const getZeroPos = () => {
    for(let i=0; i<9;i++){
      for(let j=0;j<9;j++){
        if(board[i][j] ===0) zeroPos.push([i, j]);
      }
    }
  }

  getZeroPos();
  // console.log(zeroPos)
  // console.log(zeroPos.length)

  const checkRow = (x, y, v) => {
    for(let i=0;i<9;i++){
      if(board[x][i]===v) return false;
    }
    return true;
  }
  const checkCol = (x, y, v) => {
    for(let i=0;i<9;i++){
      if(board[i][y]===v) return false;
    }
    return true;
  }
  const checkSquare = (x, y, v) => {
    const sx = Math.floor(x/3)*3;
    const sy =  Math.floor(y/3)*3;
    for(let i=sx;i<sx+3;i++){
      for(let j=sy;j<sy+3;j++){
        if(board[i][j]===v) return false;
      }
    }
    return true;
  }

  const saved = [];

  const dfs = (lv) => {
    if(isSolved) return true;
    if(lv===zeroPos.length) {
      saved.push(...board.map(el=>[...el]))
      isSolved = true;
      return;
    }

    const [x, y] = zeroPos[lv];

    for(let i=1; i<10;i++){
      if(checkRow(x, y, i) && checkCol(x, y, i) && checkSquare(x, y, i))
      {
        board[x][y] = i;
        dfs(lv+1);
        board[x][y] = 0;
      }
    }
  }

  dfs(0);

  // console.log(saved)
  
  const result = saved.map(el=>el.join(' ')).join('\n')

  return result;
}

console.log(solution(BOARD))



/**
  0 1 2 3 4 5 6 7 8 
0 1 3 5 4 6 9 2 7 8
1 7 8 2 1 3 5 6 4 9
2 4 6 9 2 7 8 1 3 5
3 3 2 1 5 4 6 8 9 7
4 8 7 4 9 1 3 5 2 6
5 5 9 6 8 2 7 4 1 3
6 9 1 7 6 5 2 3 8 4
7 6 4 3 7 8 1 9 5 2
8 2 5 8 3 9 4 7 6 1


0,0 : 0,0 ~ 2,2
0,3 : 0,3 ~ 2,5
0,6 : 0,6 ~ 2,8

3,0 : 3,0 ~ 5,2
3,3 : 3,3 ~ 5,5
3,6 : 3,6 ~ 5,8

6,0 : 6,0 ~ 8,2 
6,3 : 6,3 ~ 8,5
6,6 : 6,6 ~ 8,8
 */