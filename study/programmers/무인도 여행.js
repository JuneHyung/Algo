/**
 * X나 1~9가 적혀있다.
 * X는 바다 숫자는 무인도.
 * 상하좌우로 연결된 땅들은 하나의 무인도를 이룬다. 숫자의 합은 식량양
 * 최대 며칠씩 머물 수 있는지 알아본 후 놀러갈 섬을 정하려 한다.
 * 
 * 각 섬에서 최대 며칠씩 머물수 있는지 오름차순으로 리턴.
 * 지낼수 있는 무인도가 없으면 -1 리턴
 */
const solution = (maps) => {
  // 2차원배열로.
  const board = maps.map(row=>row.split('').map(el=> el!=='X' ? Number(el) : el))
  const n = board.length;
  const m = board[0].length;

  const dx=[-1,1,0,0];
  const dy=[0,0,-1,1];
  const inRange = (x, y) => x>=0 && y>=0 && x<n && y<m

  const days = [];
  const visited = Array.from({length:n},()=>Array.from({length:m},()=>false))

  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(!visited[i][j] && board[i][j]!=='X'){
        let sum = board[i][j]; // 합
        const q = [[i, j]];
        visited[i][j]=true;

        while(q.length!==0){
          const [cx, cy] = q.shift();
          for(let k=0;k<4;k++){
            const nx = cx+dx[k];
            const ny = cy+dy[k];
            if(inRange(nx,ny) && !visited[nx][ny] && board[nx][ny]!=='X'){
              visited[nx][ny] = true;
              q.push([nx,ny]);
              sum+=board[nx][ny];
            }
          }
        }
        days.push(sum);
      }
    }
  }

  // 오름차순 정렬
  days.sort((a,b)=>a-b);

  // 없으면 -1 리턴
  return days.length===0 ? [-1] : days;
}

const maps = ["X591X","X1X5X","X231X", "1XXX1"]
console.log(solution(maps))