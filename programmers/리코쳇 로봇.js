/**
 * 리코쳇 로봇
 * 상하좌우 4방향 중 하나를 선택해 장애물이나 맨 끝에 부딪힐때 까지 이동하는 걸 한 번의 이동으로 한다.
 * R : 로봇 위치
 * D : 장애물
 * G : 목표지점
 * 
 * Goal까지 최소 몇번 이동해야하는가?
 * 못하면 -1 리턴
 */
const solution = (board) => {
  const n = board.length;
  const m = board[0].length;
  const visited = Array.from({length: n},()=>Array.from({length:m},()=>-1))


  let x = -1, y = -1;
  let gx= -1, gy = -1;
  
  const dx = [-1,1,0,0];
  const dy = [0,0,-1,1];
  const inRange =(x,y)=>x>=0&& y>=0 && x<n && y<m;

  // 좌표 찾기
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(board[i][j]==='R'){
        x = i;
        y = j;
      }
      if(board[i][j]==='G'){
        gx = i;
        gy = j;
      }
    }
  }

  // 가능한 경우 최단거리 찾기
  const q = [[x, y]];
  visited[x][y] = 0;
  const getNextPos = (nx, ny, dir) => {
    while(true){
      nx += dx[dir];
      ny += dy[dir];
      if(!inRange(nx,ny)) break;
      if(board[nx][ny]==='D') break;
    }
    return [nx-dx[dir],ny-dy[dir]];
  }

  while(q.length!==0){
    const [cx, cy] = q.shift();
    for(let d=0;d<4;d++){
      
      const [nx, ny] = getNextPos(cx, cy, d);
      if(visited[nx][ny]===-1){
        if(inRange(nx,ny) ){
          visited[nx][ny]= visited[cx][cy]+1
          q.push([nx,ny]);
        }
      }    
    }
  }

  return visited[gx][gy];
}

const board =["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]
// const board =[".D.R", "....", ".G..", "...D"];
console.log(solution(board));

[
  "...D..R", 
  ".D.G...", 
  "....D.D", 
  "D....D.", 
  "..D...."]

[
  ".D.R", 
  "....", 
  ".G..", 
  "...D"
]