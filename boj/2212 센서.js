/**
 * 2212 센서
 * 고속도로 위 N개의 센서를 설치함.
 * 최대 K개 집중국 세움.
 * N개 센서가 적어도 하나의 집중국과는 통신이 가능해야하며, 집중국의 수신 가능 영역의 길이의 합을 최소화 해야함.
 * 수신 가능영역 거리의 최소값을 구하시오.
 * 
 * 센서 개수 N
 * 집중국 개수 K
 * N개 센서의 좌표가 한개 정수로 N개 주어짐.
 * 
 * 어디에 기지국을 설치할지가 중요하지 않다.
 * 각 센서들 거리차를 계산한 후 k-1 ~ n-1까지 거리합이 정답.
 * 
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '6',
//   '2',
//   '1 6 9 3 6 7',
// ]
const input = [
  '6',
  '2',
  '1 6 9 3 6 7',
]
const N = Number(input.shift())
const K = Number(input.shift())
const arr = input.shift().split(' ').map(Number)

const solution = (n, k, list) => {
  if (k >= n) return 0;
  const diff = [];
  let answer = 0;
  list.sort((a, b) => a - b);
  // console.log(list)
  for (let i = 0; i < n - 1; i++) diff.push(list[i + 1] - list[i]);

  // console.log(diff);
  diff.sort((a, b) => b - a);
  // console.log(diff);
  for (let i = k - 1; i < n - 1; i++) answer += diff[i];
  return answer;
}

console.log(solution(N, K, arr))