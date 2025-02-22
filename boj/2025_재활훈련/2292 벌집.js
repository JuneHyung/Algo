/**
 * 2292 벌집
 * 중앙 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다.
 * N번방 까지 최소 개수의 방을 지나서 갈때 몇개 방을 지나가야하는가?
 * (1번방부터 시작할때 1번방도 개수에 포함된다.)
 * 
 * N은 10억
 */
// const fs = require('fs')
// const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
const input = `13`
const N = Number(input);

// 1 - 6*0 = 1개 - 1
// 2 - 6*1 = 6개 - 2, 3, 4, 5, 6, 7
// 3 - 6*2 = 12개 - 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
// 4 - 6*3 = 18개 - 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37

const solution = (n) => {
  let cnt = 1;
  let num = 1;
  while (true) {
    if (n <= num) return cnt;
    num += 6 * cnt;
    cnt++;
  }
}

console.log(solution(N));