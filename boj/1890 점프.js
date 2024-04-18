/**
 * 1890 점프
 * NxN게임판. 좌측상단에서 우측하단으로 점프해가느 ㄴ것이 목표
 * 각 칸의 수는 현재 칸에서 갈 수 있는 거리.
 * 항상 수만큼 우나 아래로 가야한다.
 * 
 * 규칙에 맞게 이동할 수 있는 경로 개수 구하기.
 * 
 * 경로수가 26의 3제곱-1보다 작거나 같다라 Number쓰면안됨.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'1 1 1 3',
'1 0 0 0',
'1 1 0 0',
'0 2 0 0',
]
const N = Number(input[0])
const BOARD = input.slice(1).map(el=>el.split(' ').map(Number))

const solution = (n, board) => {
  const dp = Array.from({length: n},()=>Array.from({length:n},()=>BigInt(0)));
  dp[0][0] = BigInt(1);

  for(let i=0; i<n;i++){
    for(let j=0;j<n;j++){
      let num = board[i][j];
      if(num===0) continue;
      if(i+num<n){
        dp[i + num][j] += dp[i][j];
      }
      if(j+num<n){
        dp[i][j+num] += dp[i][j];
      }
    }
  }

  return dp[n-1][n-1].toString()
}

console.log(solution(N, BOARD))