/**
 * 20366 Do you wnat to build a snowman?
 * 
 * N개의 눈덩이중 서로 다른 4개를 골라 두 눈사람의 키 차이가 작게 만들려 한다.
 * 이때 최소값을 구하자.
 * 
 * 1. 눈사람을 만들 수 있는 모든 경우를 배열에 두고 그 배열에서 2개씩 골라 answer을 도출 => 중복이 생길수 있어 정답 오류.
 * ex) [2,3] [2,5] 인경우 2가 중복.
 *  
 * 2. 2중포문으로 1번 눈사람 만들고, lt,rt로 이동하면서 사용하지않은 걸로 눈사람을 만들어 최소값 비교.
 * */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
  '6',
  '1 2 1000 2000 10001 10002',
]
// const input = [
//   '5',
//   '3 5 2 5 9',
// ]
const N = Number(input.shift())
const SNOW = input.shift().split(' ').map(Number);

const solution = (n, snow) => {
  let min = Number.MAX_SAFE_INTEGER;
  snow.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const elsa = snow[i] + snow[j];
      let lt = 0;
      let rt = n - 1;

      while (lt < rt) {
        if (lt === i || lt === j) { lt++; continue; } // elsa가 쓴거면 continue;
        if (rt === i || rt === j) { rt--; continue; } // elsa가 쓴거면 continue;
        const anna = snow[lt] + snow[rt];
        min = Math.min(min, Math.abs(elsa - anna));
        if (elsa > anna) lt++;
        else if (elsa < anna) rt--;
        else { break; }
      }
    }
  }
  return min;
}


console.log(solution(N, SNOW));