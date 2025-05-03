/**
 * 11659 구간 합 구하기4
 * 수 N개가 주어졌을때 i~ j까지 합을 구하는 프로그램 작성
 * 
 * 첫줄 수의 개수 N과 합해야하는 수 M이 주어진다.
 * 둘줄부터 n개수가 주어지고, 수는 1000보다 작거나 같다.
 * 셋줄부터 M개줄에 합을 구해야하는 i와 j가 주어진다.
 */
/**
 * 1. 1단 slice 후 reduce -> 메모리 초과
 * 2. 결과를 모아서 console하도록 수정  -> 메모리초과
 * 3. 처음부터 각 자리수까지의 합을 구한다음 A ~ B면, B까지합 - A까지합으로 답 도출.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '5 3',
  '5 4 3 2 1',
  '1 3',
  '2 4',
  '5 5',
]

const [N, M] = input[0].split(' ').map(Number);
const LIST = input[1].split(' ').map(Number);

const solution = (n, m, list) => {
  const result = [];
  const acc = [0, list[0]];

  for (let i = 1; i < n; i++) {
    acc.push(acc[i] + list[i]);
  }

  console.log(acc);

  for (let i = 2; i < 2 + m; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    result.push(acc[end] - acc[start - 1]);
  }

  return result.join('\n');
}

console.log(solution(N, M, LIST));
