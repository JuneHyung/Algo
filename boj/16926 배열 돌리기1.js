/**
 * 16926 배열 돌리기
 * r번 회전시킨 결과를 리턴.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 4 2',
'1 2 3 4',
'5 6 7 8',
'9 10 11 12',
'13 14 15 16',
]
const [N, M, R] = input[0].split(' ').map(Number)
const BOARD = input.slice(1).map(el=>el.split(' ').map(Number));

const solution = (n, m, r, board) => {
  let answer = '';

  function routate(arr) {
    let min = Math.min(n, m)

    let temp = new Array(n).fill(null).map(_ => new Array(m).fill(0));
    for (let limit = 0; limit < Math.floor(min / 2); limit++) {
  
      // 윗줄.
      for (let j = (m - 2) - limit; j >= 0 + limit; j--) {
        temp[0 + limit][j] = arr[0 + limit][j + 1];
      }
      // 왼쪽.
      for (let j = 1 + limit; j < n - limit; j++) {
        temp[j][0 + limit] = arr[j - 1][0 + limit];
      }
      // 아래
      for (let j = 1 + limit; j < m - limit; j++) {
        temp[(n - 1) - limit][j] = arr[(n - 1) - limit][j - 1];
      }
      // 오른쪽.
      for (let j = (n - 2) - limit; j >= 0 + limit; j--) {
        temp[j][(m - 1) - limit] = arr[j + 1][(m - 1) - limit];
      }
    } 
    return temp;
  }

  let ret = [...board];  
  for(let i=0; i<r; i++) {    
    ret = routate(board);
    board = [...ret];
  }
  ret.forEach(e => {
    answer += e.join(' ') + '\n';
  })
  
  return answer.trim()
}
console.log(solution(N, M, R, BOARD))
