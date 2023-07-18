/**
 * 21610 마법사 상어와 비바라기
 * NxN 격자에서 연습.
 * 1,1부터 시작.
 * 
 * 비바라기 시전 시 (N, 1), (N, 2), (N-1, 1), (N-1, 2)에 비구름이 생긴다. 처음 구름은 좌측하단에 생김
 * 구름을 M번 이동시킬것이다.
 * 이동은 8방향.
 * 1 : 좌
 * 2 : 좌상
 * 3 : 상
 * 4 : 우상
 * 5 : 우
 * 6 : 우하
 * 7 : 하
 * 8 : 좌하
 * 
 * 중요중요! 격자의 가장 왼쪽 윗 칸은 (1, 1)이고, 가장 오른쪽 아랫 칸은 (N, N)이다. 마법사 상어는 연습을 위해 1번 행과 N번 행을 연결했고, 1번 열과 N번 열도 연결했다. 즉, N번 행의 아래에는 1번 행이, 1번 행의 위에는 N번 행이 있고, 1번 열의 왼쪽에는 N번 열이, N번 열의 오른쪽에는 1번 열이 있다.
 * 
 * 1.모든 구름이 d방향으로 s칸 이동.
 * 2. 각 구름에서 비가 내려 구름이 있는 칸에 물의 양이 1 증가함.
 * 3. 구름이 모두 사라짐.
 * 4. 2에서 물이 증가한 칸(r,c)에 물복사버그 마법을 시전.
 * 4-1. 마법을 시전하면 대각선방향으로 거리가 1인 칸에 물이 있는 바구니 수만큼 (r,c)에 바구니의 물이 증가한다.
 * 4-2. 이동과 다르게 경계를 넘어가는 칸은 대각선방향으로 거리가 1인 칸이 아니다.
 * 5. 바구니에 물의 양이 2이상인 모든 칸에 구름이 생기고 물의 양이 2줄어든다
 * 5-1. 구름이 생기는 칸은 3에서 구름이 사라진 칸이 아니어야 한다.
 * M번 이동 끝난후 바구니 물의 양을 구해보자.
 * 
 * N, M이 주어진다.
 * 바구니상태가주어진다.
 * M개줄에 방향D와 이동칸수S가 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 4',
'0 0 1 0 2',
'2 3 2 1 0',
'4 3 2 9 0',
'1 0 2 9 0',
'8 8 2 1 0',
'1 3',
'3 4',
'8 1',
'4 8',
]
const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.slice(0, N).map(el=>el.split(' ').map(Number))
const INFO = input.slice(N).map(el=>el.split(' ').map(Number))

const solution = (n, m, board, info) =>{
  const dx = [0,-1,-1,-1,0,1,1,1];
  const dy = [-1,-1,0,1,1,1,0,-1];

  const cx = [-1, -1, 1, 1];
  const cy = [-1, 1,-1, 1];
  const inRange=(x,y)=>x>=0&&y>=0&&x<n&&y<n

  let initPos = [[n-2, 0], [n-2, 1], [n-1, 0], [n-1, 1]]
  

  
  for(let t=0; t<m;t++){
    const [d, s] = info[t];
    const nextPos = [];
    // 1
    for(let cloud of initPos){
      const [curX, curY] = cloud;
      const nextX = (curX + dx[d-1]*s)%n;
      const nextY = (curY + dy[d-1]*s)%n;
      const nx = nextX < 0 ? n + nextX : nextX
      const ny = nextY < 0 ? n + nextY : nextY;
      nextPos.push([nx, ny])
    }

    // 2
    let visited = Array.from({length: n},()=>Array.from({length:n},()=>false));
    for(let cloud of nextPos){
      const [curX, curY] = cloud;
      board[curX][curY]+=1;
      visited[curX][curY] = true;
    }

    // 3
    initPos = [];
    
    // 4
    for(let cloud of nextPos){
      const [curX, curY] = cloud;
      let cnt = 0;
      for(let k=0;k<4;k++){
        const nx = curX + cx[k];
        const ny = curY + cy[k];
        if(inRange(nx, ny) && board[nx][ny] > 0) cnt++;
      }
      board[curX][curY]+= cnt;
    }

    // 5
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(board[i][j]>=2 && !visited[i][j]){
          board[i][j]-=2;
          initPos.push([i, j]);
        }
      }
    }
  } // for(t)

  // 갯수 세기
  let answer = 0;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if(board[i][j]!==0) answer+=board[i][j]
    }
  }
  return answer;
}
console.log(solution(N, M, BOARD, INFO))