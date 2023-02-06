/**
 * 2667 단지번호붙이기
 * 1 : 집이 있는곳
 * 2 : 없는곳
 * 상하좌우로 붙어있으면 단지.
 * 지도는 NxN
 * 
 * 첫째 줄에는 총 단지수를
 * 그 아래로 각 단지 내 집의 수를 오름차순 순으로 정렬하여 한 줄에 하나씩 출력.
 * 정답 출력 시 오름차순 정렬 잊지말자.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '7',
  '1110101',
  '0110101',
  '1110101',
  '0000111',
  '0100000',
  '0111110',
  '0111001',
]
const N = Number(input.shift());
const MAP = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
for (let i = 0; i < N; i++) {
  const line = input[i].split('').map(Number);
  for (let j = 0; j < N; j++) {
    MAP[i][j] = line[j];
  }
}

const solution = (n, board) => {
  const visited = Array.from({ length: N }, () => Array.from({ length: N }, () => false));
  let danNum = 0;
  let dan = [];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let cnt = 1;
  const bfs = (q) => {
    while (q.length !== 0) {
      const [curX, curY] = q.shift();
      for (let k = 0; k < 4; k++) {
        const nx = curX + dx[k];
        const ny = curY + dy[k];
        if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny] && board[nx][ny] === 1) {
          visited[nx][ny] = true;
          board[nx][ny] = danNum
          bfs([[nx, ny]]);
          cnt++;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && board[i][j] === 1) {
        cnt = 1;
        visited[i][j] = true;
        danNum++;
        bfs([[i, j]]);
        dan.push(cnt)
      }
    }
  }
  // console.log(board);
  // console.log(danNum);
  // console.log(dan);
  dan.sort((a, b) => a - b);
  const answer = [danNum, ...dan].join('\n')
  return answer;
}


console.log(solution(N, MAP));