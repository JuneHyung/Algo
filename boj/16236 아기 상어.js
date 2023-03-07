/**
 * 16236 아기 상어
 * NxN공간에 물고기 M마리와 아기 상어 1마리가 있다.
 * 1칸에 1마리까지만 존재한다. 없을 수 있다.
 * 아기 상어와 물고기 모두 크기를 가지고 있다.
 * 아기 상어의 크기는 2이고, 1초에 상하좌우로 인접한 한 칸씩 이동한다.
 * 자기보다 큰 물고기가 있으면 지나갈 수 없고, 나머지 칸은 지나갈 수 있다.
 * 
 * 이동 결정 방법
 * 더 이상 먹을 수 있는 물고기가 없다면, 엄마 상어에게 도움을 요청한다.
 * 먹을수 있는 물고기가 1마리면 그 물고기를 먹으러 간다.
 * 먹을수 있는 물고기가 1마리보다 많으면, 거리가 가장 가까운 물고기를 먹으러 간다.
 * * 거리는 아기 상어가 있는 칸에서 물고기가 잇는 칸으로 이동할 때 지나야하는 칸의 개수의 최소값.
 * * 거리가 가까운 물고기가 많다면, 가장 위의 물고기를, 여러마리면 가장 왼쪽의 물고기를 먹는다.
 * 
 * 이동은 1초가 걸리며, 먹는데 걸리는 시간은 없다.
 * 먹고나서는 빈칸이 된다.
 * 자신의 크기와 같은 수의 물고기를 먹을때마다 아기상어의 크기가 1 증가.
 * 
 * 아기 상어가 몇초 동안 엄마상어에게 도움을 요청하지 않고 물고기를 잡아 먹을 수 있는가?
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'4 3 2 1',
'0 0 0 0',
'0 0 9 0',
'1 2 3 4',
]
const N = Number(input.shift())
const BOARD = input.map(el => el.split(' ').map(Number))

const findBabyShark = (n, baby, board) => { 
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < n; j++) { 
      if (board[i][j] === 9) { 
        baby.x = i;
        baby.y = j;
        board[i][j] = 0;
      }
    }
  }
}
const inRange = (n, x, y) => x >= 0 && y >= 0 && x < n && y < n;

const sortedFish = (fish) => { 
  // fish = [{x, y, dist}]
  fish.sort((a, b) => { 
    if (a.dist < b.dist) return -1;
    else if (a.dist > b.dist) return 1;
    else {
      if (a.x < b.x) return -1;
      else if (a.x > b.x) return 1;
      else a.y-a.x
    }
  })
  return fish;
}
const solution = (n, board) => { 
  // console.log(board);
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]
  let answer = 0;
  const baby = {
    x: 0,
    y: 0,
    eat: 0,
    size: 2,
  }
  let fish = [];
  findBabyShark(n, baby, board);

  const findFishInfo = (x, y) => {
    let visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
    fish = [];

    // x, y, 거리
    let q = [[x, y, 0]];
    while (q.length !== 0) {
      const [curX, curY, curD] = q.shift();
      for (let k = 0; k < 4; k++) {
        const nx = curX + dx[k];
        const ny = curY + dy[k];
        if (inRange(n, nx, ny) && !visited[nx][ny] && board[nx][ny] <= baby.size) {
          visited[nx][ny] = true;
          q.push([nx, ny, curD + 1]);
          if (board[nx][ny] !== 0 && board[nx][ny] < baby.size) {
            fish.push({ x: nx, y: ny, dist: curD + 1 })
          }
        }
      }
    }
  } // findFishInfo

  findFishInfo(baby.x, baby.y)
  // console.log(fish);
  
  while (fish.length !== 0) { 
    fish = fish.length===1 ? fish : sortedFish(fish)
    baby.x = fish[0].x;
    baby.y = fish[0].y;
    board[baby.x][baby.y] = 0;
    baby.eat++;
    if (baby.eat === baby.size) {
      baby.size++;
      baby.eat = 0;
    }
    answer += fish[0].dist;
    fish.shift();
    findFishInfo(baby.x, baby.y);
  }
  if (fish.length === 0) return answer;
} // solution

console.log(solution(N, BOARD))