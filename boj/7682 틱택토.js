/**
 * 7682 틱택토
 * 격자판은 3x3 처음엔 비어잇다.
 * 첫번째 사람이 X를 놓고 두번째사람이 O를 놓음.
 * 한 사람의 말이 가로, 세로, 대각선 방향으로 3칸을 이으면 게임은 끝남.
 * 게임판이 가득차도 끝남.
 * 게임판 상태가 주어지면, 틱택토 게임에서 발생할 수 있는 최종 상태인지 판별
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  'XOXOXOXO.',
  'XOXOXOX..',
  'end'
]
const solution = (info) => {
  const board = [[...info.slice(0, 3)], [...info.slice(3, 6)], [...info.slice(6, 9)]];

  const OCnt = info.filter((el) => el === "O").length;
  const XCnt = info.filter((el) => el === "X").length;
  
  if (XCnt - OCnt !== 1 && XCnt - OCnt !== 0) return "invalid";

  let OCheck = false;
  let XCheck = false;
  
  // O가 이겼는데 X가 더많은 경우 제외.
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === "O" && board[i][1] === "O" && board[i][2] === "O") {
      OCheck = true;
      if (XCnt > OCnt) return "invalid";
    }
    if (board[0][i] === "O" && board[1][i] === "O" && board[2][i] === "O") {
      OCheck = true;
      if (XCnt > OCnt) return "invalid";
    }
  }

  if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
    OCheck = true;
    if (XCnt > OCnt) return "invalid";
  }
  if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
    OCheck = true;
    if (XCnt > OCnt) return "invalid";
  }

  // X가 완성되면 O는 적어도 1개 적어야함.
  // X도 완성되고 O도 완성은 없다.
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === "X" && board[i][1] === "X" && board[i][2] === "X") {
      XCheck = true;
      if (OCheck || XCnt === OCnt) return "invalid";
    }
    if (board[0][i] === "X" && board[1][i] === "X" && board[2][i] === "X") {
      XCheck = true;
      if (OCheck || XCnt === OCnt) return "invalid";
    }
  }
  
  if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
    XCheck = true;
    if (OCheck || XCnt === OCnt) return "invalid";
  }
  if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
    XCheck = true;
    if (OCheck || XCnt === OCnt) return "invalid";
  }

  // 더 진행할 수 있는데 중간에 끝난경우
  if(!OCheck && !XCheck){
    for(let i=0;i<9;i++){
      if(info[i]==='.') return 'invalid';
    }
  }
  
  return 'valid'
};

while (true) {
  const line = input.shift().trim();
  if (line === "end") break;
  const INFO = line.split("");
  console.log(solution(INFO));
}
