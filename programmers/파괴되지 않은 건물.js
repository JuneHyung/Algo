// const checkBuilding = (board, info) => {
//   const [type, r1, c1, r2, c2, degree] = info;
//   for (let i = r1; i <= r2; i++) {
//     for (let j = c1; j <= c2; j++) {
//       board[i][j] += type === 1 ? -degree : degree;
//     }
//   }
//   return board;
// }

// function solution(board, skill) {
//   var answer = 0;

//   for (let i = 0; i < skill.length; i++) {
//     const [type, r1, c1, r2, c2, degree] = skill[i];
//     board = checkBuilding(board, [type, r1, c1, r2, c2, degree]);
//   }
//   answer = board.map(el => el.filter(ele=>ele>0).length).reduce((acc,cur)=>acc+cur);
//   return answer;
// }

const makeImos = (imos, skill) =>{
  for(let i=0;i<skill.length;i++){
    const [type, r1, c1, r2, c2, degree] = skill[i];
    const status = type===1 ? -1 : 1;
    imos[r1][c1] += degree*status;
    imos[r2+1][c1] += degree*status*-1;
    imos[r1][c2+1] += degree*status*-1;
    imos[r2+1][c2+1] += degree*status;
  }
  return imos;
}

const fillRow = (imos, colLength, rowLength) => {
  for(let i=0;i<colLength;i++){
    for(let j=0;j<rowLength;j++){
      imos[i+1][j] += imos[i][j]; // 위에서 아래로 더하기
    }
  }
  return imos;
}

const fillCol = (imos, colLength, rowLength) => {
  for(let i=0;i<colLength;i++){
    for(let j=0;j<rowLength;j++){
      imos[i][j+1] += imos[i][j]; // 좌에서 우로 더햐기
    }
  }
  return imos;
}

const sumImos = (board, imos) => {
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
      board[i][j] += imos[i][j]; // board와 imos 더하기
    }
  }
  return board;
}
const solution = (board, skill) => {
  let answer = 0;
  let imos = Array.from({length: board.length+1}, ()=> Array(board[0].length+1).fill(0));
  imos = makeImos(imos, skill);
  imos = fillRow(imos, board.length, board[0].length);
  imos = fillCol(imos, board.length, board[0].length);
  board = sumImos(board, imos);

  answer = board.map(el => el.filter(ele=>ele>0).length).reduce((acc,cur)=>acc+cur);
  return answer;
}



const board = [[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]
const skill = [[1,0,0,3,4,4],[1,2,0,2,3,2],[2,1,0,3,1,2],[1,0,1,3,3,1]];
console.log(solution(board, skill));