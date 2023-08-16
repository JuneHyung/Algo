/**
 * 5014 스타트링크
 * 총 F층, 스타트링크는 G층에 있따.
 * 현재 S층에 있고, G층으로 가려한다.
 * U층 위로 갈수 있고, D층 아래로 갈 수 있다.
 * G층 도착이 가능하면 버튼 횟수, 없다면 "use the stairs"출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = "100 51 50 0 1";

// 위로 U층 아래로 D층
const [F, S, G, U, D] = input.split(' ').map(Number)
const solution = (f, s, g, u, d) => {
  const building = Array.from({lenth: 1000001},()=>0);
  const q = [[s, 0]];

  const inRange = (stair) => stair>0 && stair <=f;
  while(q.length!==0){
    const [cur, cnt] = q.shift();
    if(cur===g) return cnt;
    
    const nextU = cur+u;
    const nextD = cur-d;
    for(const stair of [nextU, nextD]){
      if(inRange(stair) && !building[stair]){ 
        building[stair] = true;
        q.push([stair, cnt+1])
      }
    }
  }
  return "use the stairs"
}

console.log(solution(F, S, G, U, D))
