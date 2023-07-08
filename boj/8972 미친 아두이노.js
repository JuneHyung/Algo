/**
 * 8972 미친 아두이노
 * 종수쿤은 미친 아두이노를 피해 다녀야 한다.
 * RxC크기의 보드
 * 아래 5가지 과정이 반복된다.
 * 1. 종수가 아두이노를 8방향으로 이동시키거나 그위치에 그대로둔다.
 * 2. 종수 아두이노가 미친 아두이노가 있는 칸으로 이동한 경우 게임이 끝나고, 종수는 진.다.
 * 3. 미친 아두이노는 종수와 가장 가까워지는 방향으로 이동한다. |r1-r2| + |c1-c2|값이 가장 작아지는 방향
 * 4. 미친 아두이노가 종삭 있는 칸으로 이동하면 게임은 끝나고, 종수는 진.다.
 * 5. 2개 또는 그 이상의 미친 아두이노가 같은 칸에 있으면 큰 폭발이 일어나고, 그칸의 아두이노는 파.괴 된다.
 * 종수의 시작위치, 미친 아두이노 위치, 종수가 움직이려는 방향이 주어진다.
 * 입력으로 주어진 방향대로 움직였을 때 보드의 상태를 구하는 프로그램 작성.
 * 중간에 게임에서 지게된 경우 몇 번쨰 움직임에서 죽는지 구한다.
 * 
 * R,C
 * .은 빈칸, R은 미친 아두이노, I는 종수의 위치.
 * 종수가 움직이려는 방향이 주어진다.
 * 1: 좌하
 * 2: 하
 * 3: 우하
 * 4: 좌
 * 5: 제자리
 * 6: 우
 * 7: 좌상
 * 8: 상
 * 9: 우상
 * 
 * 중간에 게임이 끝나면 kraj X를 출력. (X는 게임끝나기전까지 이동한 횟수)
 * 그외에는 보드상태를 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '4 5',
// 'I....',
// '.....',
// '.R.R.',
// '.....',
// '6',
// ]
const input = [
  '8 8',
  'R......R',
  '.R...RR.',
  '..R..RR.',
  '........',
  '.....R..',
  '......R.',
  '....I...',
  '.......R',
  '1444',
]

const [R, C] = input.shift().split(' ').map(Number)
const INFO = input.pop().split('').map(Number)
const BOARD = input.map(el=>el.split(''))

const solution = (r, c, board, info) => {
  // 좌하, 하, 우하, 좌, 제자리, 우, 좌상, 상, 우상
  const dx = [1,1,1,0,0,0,-1,-1,-1];
  const dy = [-1,0,1,-1,0,1,-1,0,1];
  const ax = [1,1,1,0,0,-1,-1,-1];
  const ay = [-1,0,1,-1,1,-1,0,1];

  // 종수 현재위치 구하기
  const getJongsuPos = () =>{
    for(let i=0;i<r;i++){
      for(let j=0;j<c;j++){
        if(board[i][j]==='I') return [i,j];
      }
    }
  }
  const getArduinoPos = () =>{
    const posList = []
    for(let i=0;i<r;i++){
      for(let j=0;j<c;j++){
        if(board[i][j]==='R') posList.push([i,j])
      }
    }
    return posList;
  }
  let cur = getJongsuPos();
  let arduino = getArduinoPos();
  // ------------------------------------
  
  let endFlag = false;
  let cnt = 0;
  const inRange = (x, y) => x>=0 && y>=0 && x<r && y<c;

  const moveJongsu = (x, y, dir, cnt) =>{
    const nx = x+dx[dir];
    const ny = y+dy[dir];
    if(inRange(nx, ny)){
      if(board[nx][ny]==='R') return true;
      board[x][y] = '.'
      board[nx][ny] = 'I'
      cur = [nx, ny];
      // cnt++;
    }
    return false;
  }
  const checkDeleteList = (list, x, y) =>{
    for(let i=0;i<list.length;i++){
      if(x===list[i][0] && y===list[i][1]) return true;
    }
    return false;
  }
  const removeArduino = (arduino, list) => {
    const result = [];
    for(const [x, y] of list){
      for(const [ax, ay] of arduino){
        if(x!==ax && y!==ay) result.push([ax, ay]);
      }
    }
    return result;
  }

  const moveArduino = (arduino, jongsuPos) =>{
    const [jx, jy] = jongsuPos
    const deleteList = [];
    for(let t=0;t<arduino.length;t++){
      const [cx, cy] = arduino[t];

      let rx=0; 
      let ry=0;
      let min = Number.MAX_SAFE_INTEGER;
      if(deleteList.length!==0){
        if(checkDeleteList(deleteList, cx, cy)) continue;
      }

      for(let k=0;k<8;k++){
        const nx = cx+ax[k];
        const ny = cy+ay[k];
        if(inRange(nx,ny)){
          const dir = Math.abs(jx-nx) + Math.abs(jy-ny);
          if(min > dir){
            min = dir;
            rx= nx;
            ry= ny;
          }
        }
      }
      if(board[rx][ry]==='I') return true;
      else if(board[rx][ry]==='R'){
        board[cx][cy] = '.';
        board[rx][ry] = '.';  
        deleteList.push([cx, cy])
        deleteList.push([rx, ry])
      }else {
        board[cx][cy] = '.';
        board[rx][ry] = 'R';
        arduino[t] = [rx, ry];
      }
    }
    if(deleteList.length!==0){
      arduino = removeArduino(arduino, deleteList);
    }
    return false;
  }

  for(let t=0;t<info.length;t++) {
    const [dx, dy] = cur;
    const dir = info[t]-1;
    cnt++;
    // 1단계
    endFlag = moveJongsu(dx, dy, dir, cnt);
    if(endFlag){ 
      console.log(1)
      console.log(board)
      return `kraj ${cnt}` 
    }

    endFlag = moveArduino(arduino, cur)
    if(endFlag){ 
      console.log(2)
      console.log(arduino)
      return `kraj ${cnt}` 
    }
  }
  return board.map(row=>row.join('')).join('\n');
}

console.log(solution(R, C, BOARD, INFO))