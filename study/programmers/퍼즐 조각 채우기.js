/**
 * 조각은 한 번에 하나씩 넣는다.
 * 회전이 가능.
 * 뒤집을 수 없다
 * 새로 채워 넣은 퍼즐조각과 인접한 칸이 비어있으면 안된다.
 * 
 * 현재 보드상태 game_board와 테이블 위의 퍼즐 조각 상태 table이 주어진다.
 * 규칙에 맞게 최대한 많은 퍼즐 조각을 채워 넣을 경우 총 몇칸을 채울 수 있는지 return
 * 
 * 1. 빈칸위치, table 블록위치 값 저장 후, table블록 돌리고, 위치 이동 후 같은지 비교. 그 후 check가 true인 것 pos의 길이를 다더해서 답 구하기. => 6, 7, 8, 9, 10, 12, 13 실패
 */
const solution = (game_board, table) => {
  let answer = 0;
  const n = game_board.length;
  const m = game_board[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const inRange = (x, y) => x>=0 && y>=0 && x<n && y<m
  
  const getBlockPos = (board, target) => {
    const visited= Array.from({length:n},()=>Array.from({length:m},()=>false));
    const result = [];
    for(let i=0;i<n;i++){
      for(let j=0;j<m;j++){
        if(!visited[i][j] && board[i][j] === target){
          const q = [[i,j]]
          const pos = [[i,j]];
          visited[i][j] = true;
          while(q.length!==0){
            const [cx, cy] = q.shift();

            for(let k=0;k<4;k++){
              const nx = cx+dx[k];
              const ny = cy+dy[k];
              if(inRange(nx,ny) && !visited[nx][ny] && board[nx][ny]===target){
                visited[nx][ny] = true;
                q.push([nx,ny]);
                pos.push([nx, ny])
              }
            }
          }
          result.push(pos)
        }
      }
    }
    return result;
  }

  // block좌표 구하기
  const game_pos = getBlockPos(game_board, 0);
  const table_pos = getBlockPos(table, 1);
  console.log(game_pos)  
  console.log(table_pos)  
  const game_blockCnt = game_pos.length;
  const table_blockCnt = table_pos.length;
  const gchecked = Array.from({length: game_blockCnt},()=>false);
  const tchecked = Array.from({length: table_blockCnt},()=>false);

  const rotate = (block) => {
    let max = Math.max(...block.map(v=>Math.max(v[0],v[1])))
    let rotateBlock=block.map(v=>[max-v[1],v[0]])
    return rotateBlock;
  }

  // target을 cur로
  const movePos = (pos) => {
    pos.sort((a,b)=> {if(a[0]>b[0]) return 1;
      else if(a[0]<b[0]) return -1;
      else return a[1] - b[1]
    })
    const [cx, cy] = pos[0];
    return pos.map(el=>{
      return [el[0]-cx, el[1]-cy]
    })
  }

  const checkIsSame = (cur_pos, moved_pos) =>{
    for(let i=0;i<cur_pos.length;i++){
      const [cx, cy] = cur_pos[i];
      const [mx, my] = moved_pos[i];
      if(cx!==mx || cy!==my) return false;
    }
    return true;
  }

  for(let g=0;g<game_blockCnt;g++){
    const cur_pos = game_pos[g]; // check할 gameboard

    for(let t=0;t<table_blockCnt;t++){
      if(tchecked[t]) continue;
      let tar_pos = table_pos[t];
      if(cur_pos.length !== tar_pos.length) continue;

      for(let r=0;r<4;r++){
        tar_pos = rotate(tar_pos);
        const moved_pos = movePos(cur_pos);
        const moved_tar_pos = movePos(tar_pos);

        // console.log(g, t)
        // console.log('cur' , cur_pos)
        // console.log('tar' , tar_pos)
        // console.log('moved_cur' , moved_pos)
        // console.log('moved_tar' , moved_tar_pos)
        // console.log();

        const isSame = checkIsSame(moved_pos, moved_tar_pos);
        if(isSame){
          gchecked[g] = true;
          tchecked[t] = true;
          break;
        }
      } // for(r)

      if(gchecked[g]) break;
    } // for(t)
  } // for(g)

  
  // console.log(tchecked)
  // console.log(gchecked)
  
  for(let i=0;i<gchecked.length;i++){
    if(gchecked[i]) answer +=game_pos[i].length;
  }
  return answer;

}

// 54
const game_board = [
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], 
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0], 
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0], 
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1], 
  [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], 
  [0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1], 
  [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], 
  [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0], 
  [1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0], 
  [0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0], 
  [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1], 
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
]
const table = [
  [1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1], 
  [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1], 
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0], 
  [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0], 
  [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0], 
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
  [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1], 
  [1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1], 
  [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1], 
  [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1], 
  [1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1], 
  [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1]
]

// const game_board = [
//   [0,0,0,0,0,0],
//   [1,1,1,1,1,0],
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
//   [1,1,1,1,1,1],
// ]
// const table = [
//   [1,1,1,1,1,1],
//   [1,0,0,0,0,0],
//   [0,0,0,0,0,0],
//   [0,0,0,0,0,0],
//   [0,0,0,0,0,0],
//   [0,0,0,0,0,0],
// ]
// const game_board = [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]]
// const table = [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]
console.log(solution(game_board, table))


/** 
1 0 0 1 1 0
1 0 1 0 1 0
0 1 1 0 1 1
0 0 1 0 0 0
1 1 0 1 1 0
0 1 0 0 0 0

0 1 0 0 1 1
1 1 0 1 0 0
0 0 1 1 1 0
0 1 0 0 0 1
0 1 0 1 1 1
0 0 0 1 0 0

0 0 0 0 1 0
0 1 1 0 1 1
0 0 0 1 0 0
1 1 0 1 1 0
0 1 0 1 0 1
0 1 1 0 0 1

0 0 1 0 0 0
1 1 1 0 1 0
1 0 0 0 1 0
0 1 1 1 0 0
0 0 1 0 1 1
1 1 0 0 1 0
 */

/**
[0, 0] [0, 1] [0, 2] [0, 3] [0, 4] [0, 5] 
[1, 0] [1, 1] [1, 2] [1, 3] [1, 4] [1, 5]
[2, 0] [2, 1] [2, 2] [2, 3] [2, 4] [2, 5]
[3, 0] [3, 1] [3, 2] [3, 3] [3, 4] [3, 5]
[4, 0] [4, 1] [4, 2] [4, 3] [4, 4] [4, 5]
[5, 0] [5, 1] [5, 2] [5, 3] [5, 4] [5, 5]

[5, 0] [4, 0] [3, 0] [2, 0] [1, 0] [0, 0] 
[5, 1] [4, 1] [3, 1] [2, 1] [1, 1] [0, 1]
[5, 2] [4, 2] [3, 2] [2, 2] [1, 2] [0, 2]
[5, 3] [4, 3] [3, 3] [2, 3] [1, 3] [0, 3]
[5, 4] [4, 4] [3, 4] [2, 4] [1, 4] [0, 4]
[5, 5] [4, 5] [3, 5] [2, 5] [1, 5] [0, 5]

[5, 5] [5, 4] [5, 3] [5, 2] [5, 1] [5, 0] 
[4, 5] [4, 4] [4, 3] [4, 2] [4, 1] [4, 0]
[3, 5] [3, 4] [3, 3] [3, 2] [3, 1] [3, 0]
[2, 5] [2, 4] [2, 3] [2, 2] [2, 1] [2, 0]
[1, 5] [1, 4] [1, 3] [1, 2] [1, 1] [1, 0]
[0, 5] [0, 4] [0, 3] [0, 2] [0, 1] [0, 0]

[0, 5] [1, 5] [2, 5] [3, 5] [4, 5] [5, 5] 
[0, 4] [1, 4] [2, 4] [3, 4] [4, 4] [5, 4]
[0, 3] [1, 3] [2, 3] [3, 3] [4, 3] [5, 3]
[0, 2] [1, 2] [2, 2] [3, 2] [4, 2] [5, 2]
[0, 1] [1, 1] [2, 1] [3, 1] [4, 1] [5, 1]
[0, 0] [1, 0] [2, 0] [3, 0] [4, 0] [5, 0]
 */