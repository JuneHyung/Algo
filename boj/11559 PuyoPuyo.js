/**
 * 11559 puyopuyo
 * 같은색 뿌요가 4개 이상 상하좌우로 연결되있으면 같이터진다.
 * 터지고나서 연쇄로도 터진다.
 * 색은 R, G, B, P, Y 5종류
 * 주어진상황에서 몇 연쇄가 나는지 구하자.
 * 안터지면 0
 * 
 */
// const fs = require('fs')
// const input= fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '......',
  '..yy..',
  '.ygb..',
  '.bgy..',
  '.bgy..',
  '.byb..',
  '.gby..',
  '.gbbb.',
  '.bggg.',
  '.yggy.',
  '.yggy.',
  '.ybbb.',
]
const BOARD = input.map(el=>el.split(''));

const solution = (BOARD) => {
  const n = Number(BOARD.length);
  const m = Number(BOARD[0].length);
  const dx = [-1,1,0,0]
  const dy = [0,0,-1,1]
  const inRange=(x,y)=>x>=0 && y>=0 && x<n && y<m;
  
  // 한바퀴 수행마다 보드리셋용. 보드 복사.
  const copyBoard = (board) => {
    const result =Array.from({length:n},()=>Array.from({length:m},()=>'.'))
    for(let i=0;i<n;i++){
      for(let j=0;j<m;j++){
        result[i][j]=board[i][j];
      }
    }
    return result;
  }

  let board = copyBoard(BOARD);
  let tmpBoard = Array.from({length:n},()=>Array.from({length:m},()=>'.'));
  let answer = 0;
  
  const initVisited = () => Array.from({length:n},()=>Array.from({length:m},()=>false));
  let visited = Array.from({length:n},()=>Array.from({length:m},()=>false));

  // 인접한 색 찾기
  const checkSameColor = (q, color, cnt, tmpBoard) => {
    while(q.length!==0){
      const [x, y] = q.shift();
      
      for(let k=0;k<4;k++){
        const nx = x+dx[k];
        const ny = y+dy[k];
        if(inRange(nx,ny) && !visited[nx][ny] && board[nx][ny]===color){
          cnt++;
          visited[nx][ny] = true;
          tmpBoard[nx][ny] = '.';
          q.push([nx,ny])
        }
      }
    }
    return cnt;
  }

  // 터뜨린 후에 아래로 색들 이동.
  const moveBoard = (board) => {
    for(let j=0;j<m;j++){
      for(let i=n-2;i>=0;i--){
        let cIdx = i; 
        let nIdx = i+1;
        if(board[i][j]!=='.'){ // 현 위치가 .이 아니라면
          while(nIdx<n){ // 한칸 아래 요소가 가장 아래거나 색인 경우까지 현재 위치값을 한칸 아래로 이동시킨다.
            if(board[nIdx][j]==='.') { // 한칸 아래 값이 .인 경우
              board[nIdx][j] = board[cIdx][j]; // 현재위치 값을 다음 위치에 세팅
              board[cIdx][j] = '.'; // 현재위치 값 지우기
              cIdx = nIdx; // 현재 Idx를 nIdx로 변경
              nIdx++; // nIdx 증가.
            }else break;
          }
        }
      }
    }

    return board;
  }

  // 연쇄 찾기
  while(true){
    let flag = false; // 동시에 터지는 경우 1번으로 친다.
    visited = initVisited(); // 방문배열 초기화

    for(let i=0;i<n;i++){
      for(let j=0;j<m;j++){
        if(board[i][j]!=='.' && !visited[i][j]){
          tmpBoard = copyBoard(board); // board 리셋
          
          const q = [[i, j]];
          visited[i][j] = true;
          tmpBoard[i][j] = '.';
          
          // 동일한 색 갯수 찾기.
          let cnt = checkSameColor(q, board[i][j], 1, tmpBoard); 

          if(cnt>=4){ // 4개 이상인 경우
            if(!flag) answer++; // 아직까지 터진게 없다면 횟수 추가.
            board = tmpBoard; // 4개이상이면 tmp에 저장해둔 보드로 교체
            flag = true;
          }
        }
      }
    }

    // 터뜨린 후 색 이동
    board = moveBoard(board);

    // 터뜨린게 없다면 중지
    if(flag) continue;
    else break;
  }
  
  return answer;
}

console.log(solution(BOARD))