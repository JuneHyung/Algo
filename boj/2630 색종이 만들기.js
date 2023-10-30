/**
 * 2630 색종이 만ㄷ르기
 * 하양 파랑 갯수 세기
 * N은 2 4 8 16 32 64 128 중 하나
 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(input.shift())
const BOARD = input.map(el=>el.split(' ').map(Number));
const solution = (n, board) => {
  const ansewr = [0, 0];
  const search = (n, x, y) => {
    let total = 0;
    for(let i=0; i<n; i++){
      for(let j=0; j<n; j++){
        total += board[x+i][y+i]; 
      }
    }
    if(total===0) count[0]++;
    else if (total=== n*n) count[1]++;
    else{
      n /= 2;
      search(n, x, y);
      search(n, x+n, y);
      search(n, x, y+n);
      search(n, x+n, y+n);
    }
  }
  
  search(n ,0, 0);
  return ansewr.join('\n')
}
console.log(solution(N, BOARD))