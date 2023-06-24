/**
 * 2638 치즈
 * 4개변중 2개 변이 외부와 접촉되있으면, 한시간 후에 녹는다.
 * 치즈 내부의 공간은 X
 * 치즈가 모두 녹아 없어지는데 걸리는 정확한 시간을 구하시오.
 */
// const fs= require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ["8 9", "0 0 0 0 0 0 0 0 0", "0 0 0 1 1 0 0 0 0", "0 0 0 1 1 0 1 1 0", "0 0 1 1 1 1 1 1 0", "0 0 1 1 1 1 1 0 0", "0 0 1 1 0 1 1 0 0", "0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0"];
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((el) => el.split(" ").map(Number));
const solution = (n, m, board) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let time = 0;
  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < m;

  const checkRemain = () => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 1) return false;
      }
    }
    return true;
  };

  const checkAir = () => {
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
    const q = [[1, 1]];
    visited[1][1] = true;

    while (q.length !== 0) {
      const [curX, curY] = q.shift();
      for (let k = 0; k < 4; k++) {
        const nx = curX + dx[k];
        const ny = curY + dy[k];
        if (inRange(nx, ny) && !visited[nx][ny] && board[nx][ny] !== 1) {
          visited[nx][ny] = true;
          board[nx][ny] = 3;
          q.push([nx, ny]);
        }
      }
    }
  };

  let flag = false;
  const checkMelt = () =>{
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 1) {
          let cnt = 0;
          for (let k = 0; k < 4; k++) {
            let nx = i + dx[k];
            let ny = j + dy[k];
            if (inRange(nx, ny) && board[nx][ny] === 3) {
              flag = true;
              cnt++;
            }
          }
          if (cnt >= 2) board[i][j] = 5;
        }
      }
    }
  }
  const changeAir = () =>{
    if (flag) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (board[i][j] === 5) {
            board[i][j] = 3;
          }
        }
      }
    }
  }
  const bfs = () => {
    while (true) {
      // 치즈 내부 외부 확인.
      checkAir();
      // 녹을거 확인
      checkMelt();
      // 녹은거 외부 공기로 바꾸기
      changeAir();

      time++;

      flag = false;
      let remain = checkRemain();
      if (remain) break;
    }
  };

  bfs();
  return time;
};

console.log(solution(N, M, BOARD));
