/**
 * 1253 좋다.
 * N개 수 중에서 어떤 수가 다른 수 두개의 합으로 나타낼 수 잇다면, 그 수를 좋다(GOOD)이라 한다.
 * N개 수가 주어지면, 그 중 좋은 수는 몇개인지 출력
 * 수 위치가 다르면 값이 같아도 다른 수이다.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")
const input = [
  '3',
'-5 -2 -3',
]
const N = Number(input.shift())
const ARR = input.shift().split(' ').map(Number);

const solution = (n, arr) =>{
  arr.sort((a,b)=>a-b)
  console.log(arr);

  let cnt = 0;
  for(let cur=0;cur<n;cur++){
    let [lt, rt] = [0, n-1];
    
    while(lt<rt){
      if(lt===cur) lt++;
      else if(rt===cur) rt--;
      else {
        const [ltN, rtN, curN] = [arr[lt], arr[rt], arr[cur]];
        const sum = ltN + rtN
        if(sum < curN) lt++;
        else if(sum === curN) { 
          cnt++; 
          break;
        }
        else rt--;
      }
    }
  }
  
  return cnt;
}

console.log(solution(N, ARR));