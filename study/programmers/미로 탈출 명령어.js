/**
 * 미로 탈출 명령어
 * S에서 E로 가는 미로.
 * 길이가 k인 경로를 찾아 사전순으로 가장 먼저인 것 찾기.
 * 
 * 크기 n, m
 * 시작 좌표 x, y 
 * 탈출 좌표 r, c
 * 거리 k.
 * 
 * 시작 탈출좌표는 다르다.
 */
const solution = (n, m, x, y, r, c, k) => {
  const fastAnswer = k - (Math.abs(x-r) + Math.abs(y-c));
  if(fastAnswer < 0 || fastAnswer %2 !==0) return 'impossible';
  
  let answer = 'z'.repeat(k);
  
  const dir = ['d', 'l', 'r', 'u'];
  const dx = [1,0,0,-1];
  const dy = [0,-1,1,0];
  const inRange = (x, y) => x>0 && y>0 && x<=n && y<=m;

  const dfs = (cx, cy, path, cnt, dist) => {
    if(cnt > k) return ;
    if(dist > k) return ; // 현재 거리가 목표지점에서 멀어지면 멈춤
    if(cnt===k && cx===r&& cy===c){
      if(answer>path){
        answer = path;
        return;
      }
    }
    if(answer!=='z'.repeat(k)) return;

    for(let d=0;d<4;d++){
      const nx = cx + dx[d]
      const ny = cy + dy[d]
      if(inRange(nx, ny)){
        dfs(
          nx, 
          ny, 
          path+dir[d], 
          cnt+1, 
          Math.abs(nx-r) + Math.abs(ny-c)+cnt+1
        );
      }
    }
  }

  dfs(x,y,'',0, k);

  return answer.length==='z'.repeat(k) ? "impossible" : answer;
}
const n = 3;
const m = 4;
const x = 2;
const y = 3;
const r = 3;
const c = 1;
const k = 5;

console.log(solution(n, m, x, y, r, c, k))