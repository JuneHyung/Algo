/**
 * 2210 숫자판 점프
 * 5x5 숫자판
 * 숫자판 임의 위치에서 시작해 인접한 네 방향으로 5번 이동하면서, 각 칸에 적힌 숫자를 차례로 붙이면 6자리수가된다.
 * 이동할 땐 한 번 거친 칸을 다시 거쳐도 되고, 0으로 시작한 수도 가능하다.
 * 서로 다른 여섯자리 수들의 개수를 구하는 프로그램 작성.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1 1 1 1 1',
  '1 1 1 1 1',
  '1 1 1 1 1',
  '1 1 1 2 1',
  '1 1 1 1 1',
]
const INFO = input.map(el=>el.split(' '))

const solution = (info) =>{
  // console.log(info)
  const arr = new Set();
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const inRange = (x, y) => x>=0 && y>=0 &&x<5 && y<5;
  const dfs = (node, str) => {
    const [curX, curY] = node
    if(str.length===6){ 
      arr.add(str)
      return;
    }
    for(let k=0;k<4;k++){
      const nx = dx[k] + curX;
      const ny = dy[k] + curY;
      if(inRange(nx, ny)) dfs([nx, ny], str+info[nx][ny])
    }
  }

  for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
      dfs([i, j], info[i][j])
    }
  }
  const answer = arr.size
  return answer;
}
console.log(solution(INFO))