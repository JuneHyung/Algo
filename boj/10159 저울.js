/**
 * 10159 저울
 * 무게가 서로 다른 N개 물건이 있다. 잘못된 입력은 x
 * 물건 N개와 일부 물건쌍과의 비교 결과가 주어질 때 , 각 물건에 대해 그물건과 비교결과를 알 수 없는 물건 개수를 출력
 * 물건개수 N
 * 측정된 물건 개수 M
 * 비교 결과가 주어지는데 앞의 물건이 뒤 물건보다 무겁다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
'5',
'1 2',
'2 3',
'3 4',
'5 4',
'6 5',
]
const N = Number(input.shift());
const M = Number(input.shift());
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, m, info) => {
  const board = Array.from({length: n+1},()=>Array.from({length:n+1},()=>0))
  for(let i=0;i<m;i++) {
    const [a,b] = info[i];
    board[a][b] = 1;
    board[b][a] = -1;
  }

  for(let k=1; k<=n; k++){
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n;j++){
        if(board[i][k]===1 && board[k][j]===1){
          board[i][j] = 1;
          board[j][i] = -1;
        }
        if(board[i][k]===-1 && board[k][j]===-1){
          board[i][j] = -1;
          board[j][i] = 1;
        }
      }
    }
  }

  const answer = [];
  for(let i=1;i<=n;i++){
    let cnt = 0;
    for(let j=1;j<=n;j++){
      if(i===j) continue;
      if(board[i][j]===0) cnt++;
    }
    answer.push(cnt);
  }
  return answer.join('\n');
}

console.log(solution(N, M, INFO))
