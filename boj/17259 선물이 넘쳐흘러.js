/**
 * 17259 선물이 넘쳐흘러
 * BxB크기의 공장에 안쪽 가장자리를 따라 ⊐ 모양의 컨베이어 벨트가 있다.
 * 시작은 좌상, 끝은 좌하.
 * 1초간격으로 시작지점에서 끝지점을 향해 한칸씩 움직인다.
 * 
 * M개 포장을 위해 N명 직원을 고용했다. 벨트와 인접한 칸에서만 일하며, 한칸에 한사람씩 위치한다.
 * i번째 지구언은 Ti초가 걸린다.
 * 상하좌우의 컨베이어 벨트 위에 있는 설물 중 하나를 포장할 수 있다. 2개라면 더 오래 올려져 있던 선물을 포장한다.
 * M개가 모두 시작지점에 오르고 나면, 시작 지점에는 더 새로운 선물이 놓이지 않는다.
 * 
 * 포장중이지 않은 직원들은 벨트가 움직이고 선물이 인접한 칸에 놓이면 바로 포장을 시작한다.
 * 포장되지 않은 선뭉리 벨트 끝을 지나면 그 선물은 폐기된다.
 * 
 * 공장크기 B, 직원수 N, 선물 수 M이 주어진다.
 * N개줄에 걸쳐 i번 직원의 위치와 선물포장시간이 주어진다.
 * 몇개를 포장할 수 있을까?
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '5 3 6',
'1 1 3',
'1 3 2',
'3 2 1',
]
const [B, N, M] = input.shift().split(' ').map(Number)
const INFO = input.map(el=>el.split(' ').map(Number))

// 0: 빈칸, 1: 상품 2: 인부
const BOARD = Array.from({length: B},()=>Array.from({length: B},()=>0));

const solution = (b,n,m, info, board) => {
  const dx = [-1,1,0,0]
  const dy = [0,0,-1,1]
  const inRange = (x, y) => x>=0 && y>=0 && x<b && y<b
  // x, y, t: 포장시간, packing: 포장완료까지 남은시간, can_work: 포장 가능여부.
  const workers = [];
  for(let i=0;i<n;i++){
    const [x, y, t] = info[i];
    workers.push({x: x, y: y, t: t, packing: t, can_work: true})
    board[x][y] = i+2;
  }

  const rotation = () => {
    if(board[b-1][0]===1) {
      board[b-1][0] = 0;
      m--;
    }

    for(let i=1; i<b;i++) board[b-1][i-1] = board[b-1][i]; // 아래줄
    for(let i=b-2; i>=0;i--) board[i+1][b-1] = board[i][b-1]; // 세로줄
    for(let i=b-2; i>=0;i--) board[0][i+1] = board[0][i]; // 윗줄
  }


  let cnt = 0, gift = 0;
  const findWorker = (x, y) =>{
    for(let k=0; k<4;k++){
      let nx = x+dx[k];
      let ny = y+dy[k];
    
      // 인접한거중에 인부가 있을 떄.
      if(inRange(nx,ny) && (board[nx][ny]>=2 && workers[board[nx][ny]-2].can_work)){
        board[x][y]=0;
        m--;
        gift++;
        workers[board[nx][ny]-2].can_work =false;
        break;
      }
    }
  }
  while(m>0){
    rotation(); // 컨베이어 벨트 이동

    // 처음위치에 물건한개 올리기. 없으면 그만.
    if(cnt>0){
      board[0][0] = 1;
      cnt--;
    }
    else board[0][0] = 0;

    for(let i=0;i<b;i++){ // 아래줄
      if(board[b-1][i]===1) findWorker(b-1, i);
    }
    for(let i=b-2; i>=0;i--){ // 세로줄
      if(board[i][b-1]===1) findWorker(i, b-1);
    }
    for(let i=0;i<b;i++){ // 윗줄
      if(board[0][i]===1) findWorker(0, i);
    }
    
    for(let i=0;i<n;i++){
      if(!workers[i].can_work){ // 포장 중인  인부일 때
        workers[i].packing--; // 포장중인 시간 -1.
        if(workers[i].packing===0){ // 포장 끝
          workers[i].can_work = true // 일 상태 돌려놓기
          workers[i].packing = workers[i].t; // packing 초기화
        }
      }
    }
  }
  return gift
}

console.log(solution(B, N, M, INFO, BOARD))