/**
 * 13549 숨바꼭질3
 * 수빈은 현재 점N, 동생은 K에있다.
 * 수빈이는 걷거나 순간이동할 수 있다.
 * 수빈이 위치가 X일때, 걸으면 X-1 또는 X+1로 이동한다. => 시간1초
 * 순간이동할 경우 X*2로 이동한다. => 시간 0초
 * 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후일까?
 * 
 * 수빈이 위치 N, 동생위치  K가 주어짐.
 * N과 K는 0~100,000
 * 
 * 동생을 찾는 가장 빠른 시간을 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '5 17'
const [N, K] = input.split(' ').map(Number);


// const solution = (n, k) =>{
//   let answer = Number.MAX_SAFE_INTEGER;
//   const visited = Array.from({length:100001}, ()=>false);

//   let q = [[n, 0]];
//   visited[n] = true;
  
//   const inRange=(x)=>x>=0 && x<100001;

//   while(q.length!==0){
//     const [curX, cnt] = q.shift();
    
//     if(curX===k) {
//       answer = Math.min(answer, cnt);
//       break;
//     }

//     for(const next of [curX*2, curX-1, curX+1]){
//       if(!visited[next] && inRange(next)){
//         visited[next] = true;
//         if(next===curX*2){ 
//           q.push([next, cnt])
//         }
//         else{ q.push([next, cnt+1])}
//       }
//     }
//   }

//   return answer;
// }

const solution = (n, k) => {
  const time = Array.from({length: 100001}, ()=>Infinity);
  time[n] = 0;
  const q= [n];
  while(q.length!==0){
    const cur = q.shift();
    if(cur===k) return time[cur];
    
    for(const next of [cur*2, cur-1, cur+1]){
      if(next>=0 && next<100001 && time[next]===Infinity){
        if(next===cur*2){
          time[next] = time[cur];
          q.push(next);
        }else{
          time[next] = time[cur]+1;
          q.push(next);
        }
      }
    }
  }

}

console.log(solution(N, K))