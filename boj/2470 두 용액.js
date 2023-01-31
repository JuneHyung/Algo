/**
 * 2470 두 용액
 * 산성은 양수(1~10억), 알칼리성은 음수(-1~-10억)로 나타내짐.
 * 용액의 특성값은 각 용액의 특성값의 합.
 * 0에 가까운 용액을 만드려 한다.
 * 
 * 음,음 | 양,양 으로도 가능하다.
 * 
 * 0에 가까운 두 용액을 찾는 프로그램 작성
 * 용액의 특성값은 모두 다 다르다.
 * 
 * 1. 모든 조합을 구하여 최소값합을 구하기. => 메모리초과
 * 2. 투포인터 
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '5',
  '100 -1 -2 -3 -4'
]
// const input = [
//   '3',
//   '-10 1 2',
// ]
const N = Number(input.shift());
const arr = input.shift().split(' ').map(el => Number(el));

const solution = (N, arr) => {
  const list = arr.sort((a, b) => a - b);
  let lt = 0, rt = N - 1, min = Number.MAX_SAFE_INTEGER;
  let answer = [];
  console.log(list);

  while (lt !== rt) {
    const sum = list[lt] + list[rt];
    console.log(sum, min);
    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      answer = [list[lt], list[rt]];
    }
    if (sum === 0) break;
    else if (sum < 0) lt++;
    else rt--;
  }

  return answer.join(' ');
}


console.log(solution(N, arr));