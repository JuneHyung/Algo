/**
 * -가 인접해 있고, 같은행에 있으면 같은 판자.
 * |가 2개가 인접해있고, 같은 열에 있으면, 같은 판자
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 4',
  '----',
  '----',
  '----',
  '----',
]
const [N, M] = input.shift().split(' ').map(Number)
const FLOOR = input.map(el=>el.split(''));
const dfs = (n,m,floor, cur, visited) => {
  const [x, y] = cur;
  if(x<0 || y<0 || x>=n || y>=m) return false;
  if(visited[x][y]) return false;
  visited[x][y] = true;

  if(floor[x][y]==='|' && (x===n-1||floor[x+1][y]==='|')) dfs(n, m, floor, [x+1, y], visited)
  else if(floor[x][y]==='-' && (y===m-1||floor[x][y+1]==='-')) dfs(n, m, floor, [x, y+1], visited)
  return true;
}
const solution = (n, m, floor) =>{
  let answer = 0;
  const visited = Array.from({length:n},()=>Array.from({length:m},()=>false));
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(dfs(n,m,floor, [i,j], visited)){
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(N, M, FLOOR))