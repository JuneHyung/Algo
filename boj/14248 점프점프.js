/**
 * 14248 점프점프
 * 돌의 숫자가 적힌 만큼 좌나 우로 점프할 수 있다.
 * 돌다리에서 방문 가능한 돌들의 개수를 알고 싶다.
 * 
 * 돌다리돌 개수 n이주어진다.
 * 점프할 수 있는 거리 Ai가 주어진다.
 * 출발점 s가 주어진다.
 * 
 * 
 * 방문 가능한 돌들의 개수를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'1 4 2 2 1',
'3',
]

const N = Number(input[0])
const INFO = input[1].split(' ').map(Number);
const S = Number(input[2])

const solution = (n, info, s) => {
  const visited = Array.from({length:n},()=>false);

  const inRange = (l) => l>=0 && l<n;
  let cnt = 0;

  const dfs = (L) =>{
    visited[L] = true;

    const step = info[L];
    const lt = L-step;
    const rt = L+step;
    
    // console.log(L, lt, rt)
    cnt++;
    if(inRange(lt) && !visited[lt]) dfs(lt);
    if(inRange(rt) && !visited[rt]) dfs(rt);
  }


  dfs(s-1);
  return cnt;
}
console.log(solution(N, INFO, S))