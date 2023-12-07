/**
 * 22352 항체 인식
 * 백신 놓기전과 후의 촬영결과가 주어진다.
 * 촬영 대상이 맞은 백신이 백신일수 있다면 YES 아니면 NO 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '4 4',
//   '2 2 2 1',
//   '2 2 1 2',
//   '2 1 2 2',
//   '1 2 2 2',
//   '3 3 3 1',
//   '3 3 1 3',
//   '3 1 3 3',
//   '1 3 3 3',
// ]
const input = [
  '4 4',
'2 2 2 1',
'2 2 1 3',
'2 1 3 3',
'1 3 3 3',
'2 2 2 1',
'2 2 2 3',
'2 1 3 3',
'1 3 3 3',
]
const [N ,M] = input.shift().split(' ').map(Number)

const BEFORE_GRAPH = input.slice(0, N).map(el=>el.split(' ').map(Number))
const AFTER_GRAPH = input.slice(N).map(el=>el.split(' ').map(Number))

const solution = (n, m, beforeGraph, afterGraph) => {
  const isSame = (bGraph, aGraph) =>{
    for(let i=0;i<n;i++){
      for(let j=0;j<m;j++){
        if(bGraph[i][j] !== aGraph[i][j]) return false;
      }
    }
    return true;
  }
  

  const dx = [-1,1,0,0]
  const dy = [0,0,-1,1]
  const inRange = (x,y) => x>=0 && y>=0 && x<n && y<m;

  const bfs = ([x, y], bGraph, target) => {
    let beforeNum = bGraph[x][y];
    const q = [[x,y]];
    beforeGraph[x][y] = target;
    while(q.length!==0){
      let [curX, curY] = q.shift();
      for(let k=0;k<4;k++){
        const nx = curX + dx[k];
        const ny = curY + dy[k];
        if(inRange(nx,ny) && beforeGraph[nx][ny] === beforeNum){
          q.push([nx,ny])
          beforeGraph[nx][ny] = target;
        }
      }
    }
  }

  let doOnce = false; // 2번방지
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(doOnce) break;
      else if(beforeGraph[i][j] !== afterGraph[i][j]){
        console.log('dd?', i, j)
        bfs([i, j], beforeGraph, afterGraph[i][j])
        doOnce = true;
      }
    }
  }

  console.log(beforeGraph)
  console.log(afterGraph)

  return isSame(beforeGraph, afterGraph) ? 'YES' : 'NO'
}
console.log(solution(N, M, BEFORE_GRAPH, AFTER_GRAPH));