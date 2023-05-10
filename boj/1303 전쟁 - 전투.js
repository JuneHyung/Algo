/**
 * 1303 전쟁 - 전투
 * 전투는 난전이 되었고, 병사가 섞여 싸우게 되었다.
 * 아군은 흰색, 적군은 파란색
 * 같은팀 병사들이 모일수록 강해진다.
 * n명이 뭉쳐있으면 n제곱의 위력을 낼 수 있다.
 * 누가 승리할 것인가?
 * 아군과 적군의 위력의 합을 출력
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2 1',
'BW',
]
const [N, M] = input.shift().split(' ').map(Number)
const INFO = input.map(el=>el.split(''))
const inRange = (n,m,x,y) => x>=0 && y>=0 && x<m && y<n;

const solution = (n, m, info) =>{
  const visited = Array.from({length:m},()=>Array.from({length:n},()=>false))
  let answer = [0, 0];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(!visited[i][j]){ 
        let q = [[i,j]]
        visited[i][j] = true;
        let soldier = 1;
        while(q.length!==0){
          const [curX, curY] = q.shift();
          for(let k=0;k<4;k++){
            const nx = curX + dx[k];
            const ny = curY + dy[k];
            if(inRange(n, m ,nx ,ny) && !visited[nx][ny] && info[curX][curY]===info[nx][ny]){
              visited[nx][ny] = true;
              soldier+=1;
              q.push([nx,ny])
            }
          }
        }
        const force = soldier * soldier;
        if(info[i][j]==='W') answer[0] += force;
        else if(info[i][j]==='B') answer[1] += force;
      }
    }
  }
  return answer.join('\n');
}

console.log(solution(N, M, INFO))
