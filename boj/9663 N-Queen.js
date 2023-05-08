/**
 * NxN인 체스파 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제.
 * N이 주어졌을 떄 퀸을 놓는 방법의 수를 구하기.
 * 퀸은 상,하,좌,우,대각선 직선으로 움직일 수 있다.
 * 
 * 행이나 열 중 하나를 기준으로 잡음.

 */
// const fs = require('fs');
// const input = Number(fs.readFileSync('/dev/stdin').toString().trim())
const input = 8;
const solution = (n) => {
  const pos = Array.from({length:n},()=>0);
  let cnt = 0;

  const isPossible = (L) => {
    for(let i=0;i<L;i++){
      if(pos[L]===pos[i]) return false;
      if(L-i === Math.abs(pos[L] - pos[i])) return false; // 대각선의 경로 = 열의 차와 행의 차가 동일한 경우
    }
    return true;
  }

  const dfs = (L)=>{
    if(L===n){
      cnt++;
      return;
    }
    for(let i=0;i<n;i++){
      pos[L] = i;
      // console.log(pos, isPossible(L))
      if(isPossible(L)){
        dfs(L+1);
      }
    }
  }

  dfs(0);
  return cnt;
}

console.log(solution(input))