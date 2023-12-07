/**
 * 15683 감시
 * CCTV 5종류가있다.
 * 1번 : 1방향
 * 2번 : 서로 반대 2방향
 * 3번 : 직각 2방향
 * 4번 : 3방향
 * 5번 : 5방향
 * 6번 : 벽
 * CCTV의 수는 8개를 넘지 않는다.
 * 
 * 사각지대의 최소 크기를 출력한다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 3',
  '0 0 0',
  '0 2 0',
  '0 0 0',
]
const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split(" ").map(Number))

const solution = (n, m, board) => {
  // console.log(n, m, board)
  const pos = [];
  let min = Number.MAX_SAFE_INTEGER;
  const moveTop = (x, y, Map) => {
    const newMap = [];
    for(let i=0;i<n;i++) newMap.push([...Map[i]])
    for(let i=x; i>=0; i--){
      if(newMap[i][y]===0) newMap[i][y]=-1;
      else if(newMap[i][y]===6) break;
    }
    return newMap
  }
  const moveBottom = (x, y, Map) => {
    const newMap = [];
    for(let i=0;i<n;i++) newMap.push([...Map[i]])
    for(let i=x; i<n; i++){
      if(newMap[i][y]===0) newMap[i][y]=-1;
      else if(newMap[i][y]===6) break;
    }
    return newMap
  }
  const moveLeft = (x, y, Map) => {
    const newMap = [];
    for(let i=0;i<n;i++) newMap.push([...Map[i]])
    for(let i=y; i>=0; i--){
      if(newMap[x][i]===0) newMap[x][i]=-1;
      else if(newMap[x][i]===6) break;
    }
    return newMap
  }
  const moveRight = (x, y, Map) => {
    const newMap = [];
    for(let i=0;i<n;i++) newMap.push([...Map[i]])
    for(let i=y; i<m; i++){
      if(newMap[x][i]===0) newMap[x][i]=-1;
      else if(newMap[x][i]===6) break;
    }
    return newMap
  }

  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      const cur = board[i][j];
      if(cur!==0 && cur!==6) pos.push([i,j,cur])
    }
  }

  const dfs = (idx, Map, lastIdx) => {
    console.log(idx, Map)
    if(idx===lastIdx){
      let sum =0;
      for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
          if(Map[i][j]===0) sum++;
        }
      }
      console.log(sum)
      console.log()
      if(sum<min){ min = sum;}
    }else{
      const [x, y, v] = pos[idx];
      switch(v){
        case 1:
          dfs(idx+1, moveTop(x, y, Map), lastIdx)
          dfs(idx+1, moveRight(x, y, Map), lastIdx)
          dfs(idx+1, moveLeft(x, y, Map), lastIdx)
          dfs(idx+1, moveBottom(x, y, Map), lastIdx)
          break;
        case 2:
          dfs(idx+1, moveTop(x, y, moveBottom(x, y, Map)), lastIdx)
          dfs(idx+1, moveRight(x, y, moveLeft(x, y, Map)), lastIdx)
          break;
        case 3:
          dfs(idx + 1, moveTop(x, y, moveRight(x, y, Map)), lastIdx);
          dfs(idx + 1, moveRight(x, y, moveBottom(x, y, Map)), lastIdx);
          dfs(idx + 1, moveBottom(x, y, moveLeft(x, y, Map)), lastIdx);
          dfs(idx + 1, moveLeft(x, y, moveTop(x, y, Map)), lastIdx);
          break;
        case 4:
          dfs(idx + 1, moveTop(x, y, moveRight(x, y, moveLeft(x, y, Map))), lastIdx);
          dfs(idx + 1, moveTop(x, y, moveRight(x, y, moveBottom(x, y, Map))), lastIdx);
          dfs(idx + 1, moveBottom(x, y, moveRight(x, y, moveLeft(x, y, Map))), lastIdx);
          dfs(idx + 1, moveTop(x, y, moveBottom(x, y, moveLeft(x, y, Map))), lastIdx);
          break;
        case 5:
          dfs(idx + 1, moveTop(x, y, moveRight(x, y, moveLeft(x, y, moveBottom(x, y, Map)))), lastIdx);
          break;
        }
    } // else
  } // dfs

  dfs(0, board, pos.length)
  return min;
}
console.log(solution(N, M, BOARD))

