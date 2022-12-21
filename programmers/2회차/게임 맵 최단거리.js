/*
* 게임 맵 최단거리 js
*/
const checkArrange = (x, y, n, m) => {
  if (x <= n && y <= m && x >= 0 && y >= 0) return true;
  else return false;
}
// 0은 벽 1은 벽X
const solution = (maps) => {
  const n = maps.length - 1;
  const m = maps[0].length - 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let q = [[0, 0, 1]]
  maps[0][0] = 0;
  while (q.length !== 0) {
    let [curX, curY, cnt] = q.shift();
    // console.log(curX, curY, cnt);
    if (curX === n && curY === m) return cnt;
    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];
      if (checkArrange(nx, ny, n, m) && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        q.push([nx, ny, cnt + 1]);
      }
    }
  }
  return -1;
}
const maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]];
console.log(solution(maps));