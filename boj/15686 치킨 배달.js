/**
 * 15686 치킨 배달
 * NxN크기 도시가 있다.
 * 빈칸-0, 치킨집-2, 집-1 중 하나다.
 * 치킨거리
 * 치킨거리는 집과 가장 가까운 치킨집 사이의 거리다.
 * 집을기준으로 정해지며, 각 집은 치킨거리를 가지고 있다.
 * 도시의 치킨거리는 모든 집의 치킨거리 합이다.
 * 두 칸사이 거리는 |r1-r2| + |c1-c2|
 *
 * 치킨집 중 M개를 골라 나머지는 폐업시키려 한다.
 * 어떻게 고르면 도시의 치킨 거리ㅏㄱ 가장 작게 될지 구해라.
 * N과 M이 주어지고, 도시정보가 주어진다.
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 2',
'0 2 0 1 0',
'1 0 1 0 0',
'0 0 0 0 0',
'2 0 0 1 1',
'2 2 0 1 2',
];

const [N, M] = input.shift().split(" ").map(Number);
const INFO = input.map((el) => el.split(" ").map(Number));
const BOARD = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => 0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    BOARD[i + 1][j + 1] = INFO[i][j];
  }
}

const solution = (n, m, board) => {
  const house = [];
  const chicken = [];
  for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
      if(board[i][j]===1) house.push([i,j])
      else if(board[i][j]===2) chicken.push([i,j])
    }
  }

  const visited = Array.from({length:chicken.length},()=>false);
  let answer = Infinity;

  const getMinDistance = () =>{
    let sum = 0;
    house.forEach(([hx, hy]) => {
      let min = Infinity;
      chicken.forEach(([cx, cy], idx)=>{
        if(visited[idx]){
          // console.log(hx, hy, cx, cy)
          min = Math.min(min, Math.abs(hx-cx) + Math.abs(hy-cy));
        }
      })
      sum+=min;
    })
    return sum;
  }

  const dfs = (idx, cnt) =>{
    // console.log(idx, cnt)
    if(cnt===m) {
      answer = Math.min(answer, getMinDistance())
      return;
    }else{
      for(let i=idx; i<chicken.length;i++){
        if(visited[i]===true) continue;
        visited[i] = true;
        dfs(i, cnt+1)
        visited[i] = false;
      }
      // console.log();
    }
  }
  dfs(0,0)
  return answer;
};
console.log(solution(N, M, BOARD));
