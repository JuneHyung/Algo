/**
 * 1986 체스
 * nxm체스판과 상대팀의 Queen Knight Pawn 위치가 주어졌을떄 안전한 칸이 몇칸인지 세는 것을 구하시오.
 * Queen은 가로 세로 대각선으로 이동할수 있는 만큼 최대한 많이 이동할 수 있지만,  중간에 장애물이 있으면 불가능하다.
 * King은 2x3직사각형의 반대점 꼭지점으로 이동 가능.
 * Pawn은 상대팀 말을 잡을 수 없다.(장애물 역할)
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '4 4',
// '2 1 4 2 4',
// '1 1 2',
// '1 2 3',
// ]
const input = [
  '4 4',
  '2 2 1 4 4',
  '0',
  '1 3 1',
]
const [N, M] = input.shift().split(' ').map(Number)
const QINFO = input.shift().split(' ').map(Number)
const KINFO = input.shift().split(' ').map(Number)
const PINFO = input.shift().split(' ').map(Number)
const solution = (n, m, qInfo, kInfo, pInfo) => {
  const board = Array.from({length:n+1},()=>Array.from({length:m+1},()=>0));
  let answer = n*M;
  const qN = qInfo.shift();
  const kN = kInfo.shift();
  const pN = pInfo.shift();
  const kdx = [2, 2, 1, 1, -1, -1, -2, -2];
  const kdy = [1, -1, 2, -2, 2, -2, 1, -1];
  
  const qdx = [1, 1, 1, 0, -1, -1, -1, 0];
  const qdy = [-1, 0, 1, 1, 1, 0, -1, -1];


  const inRange = (x, y) => x>0 && y>0 && x<=n && y<=m


  for(let i=0;i<qN*2;i+=2){
    const [qx, qy] = [qInfo[i], qInfo[i+1]]
    board[qx][qy] = 3;
  }
  for(let i=0;i<kN*2;i+=2){
    const [kx, ky] = [kInfo[i], kInfo[i+1]]
    board[kx][ky] = 2;
  }
  for(let i=0;i<pN*2;i+=2){
    const [px, py] = [pInfo[i], pInfo[i+1]]
    board[px][py] = 1;
  }

  const checkQueen = (x, y) => {
    for(let i=0;i<8;i++){
      let nx = x;
      let ny = y;
      while(true){
        nx += qdx[i];
        ny += qdy[i];
        if(!inRange(nx,ny) || board[nx][ny]===1 || board[nx][ny]===2) break;
        else{
          board[nx][ny] = 3;
        }
      }
    }
  }
  const checkKnight = (x, y) => {
    for(let j=0;j<8;j++){ // check King
      const nx = x+kdx[j];
      const ny = y+kdy[j];
      if(inRange(nx, ny) && board[nx][ny]===0){
        board[nx][ny] = 2;
      }
    }
  }

  for(let i=0;i<qN*2;i+=2){
    const [qx, qy] = [qInfo[i], qInfo[i+1]];
    checkQueen(qx, qy)
  }

  for(let i=0;i<kN*2;i+=2){
    const [kx, ky] = [kInfo[i], kInfo[i+1]]
    checkKnight(kx, ky)
  }

  console.log(board)
  for(let i=1;i<=n;i++){
    for(let j=1;j<=M;j++){
      if(board[i][j]!==0) answer--;
    }
  }

  return answer

}
console.log(solution(N, M, QINFO, KINFO, PINFO))

// 3 3 0 3
// 3 3 3 3
// 1 3 3 3
// 3 3 3 3