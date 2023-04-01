/**
 * 3184 양
 * .은 빈필드
 * #은 울타리
 * o는 양
 * v는 늑대
 * 양은 늑대보다 수가 많다면 이기고, 늑대를 쫒아낸다.
 * 그렇지 않으면 늑대가 그지역안의 모든 양을 먹는다.
 * 아침에 살아남은 양과 늑대수를 출력하라.
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8 8',
'.######.',
'#..o...#',
'#.####.#',
'#.#v.#.#',
'#.#.o#o#',
'#o.##..#',
'#.v..v.#',
'.######.',
]
const [R, C] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split(''))

const inRange = (r, c, x, y) => x>=0 && y>=0 && x<r && y<c;

const getTotal = (r, c, wolf, sheep, board) =>{
  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
      if(board[i][j]==='o') sheep++;
      else if(board[i][j]==='v')wolf++;
    }
  }
  return [wolf, sheep];
}

const solution = (r, c, board) =>{
  const visited = Array.from({length: r},()=>Array.from({length:c},()=>false));
  const dx = [-1,1,0,0];
  const dy = [0,0,-1,1];
  
  let [wolf, sheep] = getTotal(r, c, 0, 0, board);

  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
      if(!visited[i][j] && board[i][j]!=='#'){        
        let o=0;
        let v=0;
        function dfs(cur){
          const [curX, curY] = cur;
          visited[curX][curY] = true;
          if(board[curX][curY]==='o') o++;
          if(board[curX][curY]==='v') v++;
      
          for(let k=0;k<4;k++){
            const nx = curX + dx[k];
            const ny = curY + dy[k];
            if(inRange(r, c, nx, ny) && !visited[nx][ny] && board[nx][ny]!=='#'){
              dfs([nx, ny])
            }
          }
        }
        dfs([i, j]);

        if(o > v) wolf-=v;
        else sheep-=o;
      }
    }
  }

  const answer = [sheep, wolf];
  return answer.join(' ');
}

console.log(solution(R, C, BOARD))