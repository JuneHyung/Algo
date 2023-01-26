/**
 * 16435 스네이크버드
 * 과일하나를 먹으면 길이가 1늘어남.
 * 자기보다 길이가 작거나 같은 높이의 과일들을 먹을 수 있다.
 * 스네이크버드 초기 길이 L이 주어질때 과일들을 먹어 늘릴 수 잇는 최대길이 구하기
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = [
//   '3 10',
//   '10 11 13',
// ]
const input = [
  '9 1',
  '9 5 8 1 3 2 7 6 4',
]
const [N, L] = input.shift().split(' ');
const arr = input.shift().split(' ').map(el => Number(el))
const solution = (n, l, fruits) => {
  fruits.sort((a, b) => a - b);
  let snakebird = l;
  for (const fruit of fruits) {
    if (snakebird >= fruit) snakebird++;
  }
  return snakebird;
}

console.log(solution(N, L, arr))