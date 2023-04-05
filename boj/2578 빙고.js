/**
 * 2578 빙고
 * 몇번째 수가 불렸을때 빙고를 외치는지 구하기
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stind').toString().trim().split('\n')
const input = [
  '11 12 2 24 10',
'16 1 13 3 25',
'6 20 5 21 17',
'19 4 8 14 9',
'22 15 7 23 18',
'5 10 7 16 2',
'4 22 8 17 13',
'3 18 1 6 25',
'12 19 23 14 21',
'11 24 9 20 15',
]
const BOARD = Array.from({ length: 5 }, () => []);
const CALL = []
for (let i = 0; i < 5; i++) BOARD[i] = input.shift().split(' ').map(Number);
for (let i = 0; i < 5; i++) CALL.push(...input.shift().split(' ').map(Number));

const checkCall = (board, visited, call) => { 
  for (let i = 0; i < 5; i++) { 
    for (let j = 0; j < 5; j++) { 
      if (board[i][j] === call) { 
        visited[i][j] = true;
        break;
      }
    }
  }
  return;
}

const isLineBingo = (visited) => { 
  let cnt = 0;
  for (let i = 0; i < 5; i++) { 
    if (visited[i][0] && visited[i][1] && visited[i][2] && visited[i][3] && visited[i][4]) cnt++;
    if (visited[0][i] && visited[1][i] && visited[2][i] && visited[3][i] && visited[4][i]) cnt++;
  }
  return cnt;
}
const isSlashBingo = (visited) => { 
  let cnt = 0;
  
  if (visited[0][0] && visited[1][1] && visited[2][2] && visited[3][3] && visited[4][4]) cnt++;
  if (visited[0][4] && visited[1][3] && visited[2][2] && visited[3][1] && visited[4][0]) cnt++;
  
  return cnt;
}

const solution = (board, callInfo) => { 
  const visited = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => false));
  let cnt = 0;
  for (let i = 0; i < callInfo.length; i++) { 
    
    const call = callInfo[i];
    checkCall(board, visited, call)
    cnt++;
    let line = isLineBingo(visited)
    let slash = isSlashBingo(visited)
    // console.log(call);
    // console.log(line, slash)
    // console.log();
    
    if (line + slash >= 3) break;
  }
  return cnt;
}
console.log(solution(BOARD, CALL))
