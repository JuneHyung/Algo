/**
 * 석유 시추
 * 세로 n 가로 m 땅이 있다.
 * 시추관을 수직으로 1개만 뚫을 수 있다.
 * 가장 많은 석유를 뽑을 수 있는 시추관의 위치를 찾자
 * 석유량은 시추관이 지나는 석유 덩어리들의 크기를 모두 합한 값.
 *
 * 1. 1~5 시간초과
 * 2. 2,3 시간초과
 * 
 */
const land = [
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1],
];
const solution = (land) => {
  const n = land.length;
  const m = land[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < m;

  const storage = new Map();

  for(let j=0;j<m;j++){
    for(let i=0;i<n;i++){
      let indexSet = new Set(); // 석유 덩어리 얻을 수 있는 Index set
      let cnt = 0;
      if(land[i][j]===1){
        const q = [[i, j]];
        while(q.length!==0){
          let [x, y] = q.shift();
          if(land[x][y]===1){
            land[x][y] = 0;
            cnt++;
            if(!indexSet.has(y)) indexSet.add(y);
  
            for(let k=0;k<4;k++){
              let nx = x+dx[k];
              let ny = y+dy[k];
              if(inRange(nx,ny) && land[nx][ny]===1){
                q.push([nx, ny]);
              }
            }
          }
        }
        if(cnt!==0){
          for(let idx of indexSet){
            storage.set(idx, storage.has(idx)? storage.get(idx)+cnt : cnt)
          }
        }
      }
    }
  }
  // console.log(storage)
  return Math.max(...storage.values());
};
console.log(solution(land));
