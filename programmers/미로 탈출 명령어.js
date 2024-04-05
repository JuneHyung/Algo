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
  const answer = [];
  const dir = ['d', 'l', 'r', 'u'];

  const dx = [1,0,0,-1];
  const dy = [0,-1,1,0];
  const inRange = (x, y) => x>0 && y>0 && x<=n && y<=m;

  const fastAnswer = k - Math.abs(x-r) + Math.abs(y-c);
  if(fastAnswer < 0 || fastAnswer%2!==0) return "impossible";

  const dfs = ([cx, cy], path, cnt) => {
    if(cnt > k) return ;
    else if(cnt===k && cx===r&& cy===c){
      // console.log(cx,cy, path)
      answer.push(path.join(''));
      return ;
    }

    for(let d=0;d<4;d++){
      const nx = cx + dx[d]
      const ny = cy + dy[d]
      if(inRange(nx, ny)){
        dfs([nx, ny], [...path, dir[d]], cnt+1);
      }
    }
  }

  dfs([x,y],[],0);
  
  answer.sort((a,b)=>{
    if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
  })

  return answer.length===0 ? "impossible" : answer[0];
}