/**
 * 11659 구간합구하기 4
 * 구간 합을 구하기.
 * 
 * 1. 그냥 반복 시 시간초과.
 * 2. 미리 누적합 배열을 만들고 end 다음께 누적합. => 메모리 초과
 * 3. 하나씩 console.log를 출력 -> answer에 답을 담아두고, join으로 답을 출력하는 방식으로 변경하여 해결.
 * 
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const input = [
  '5 3',
  '5 4 3 2 1',
  '1 3',
  '2 4',
  '5 5',
]
const [N, M] = input.shift().split(' ').map(el => Number(el));
const arr = input.shift().split(' ').map(el => Number(el));

const solution = (n, list, range) => {
  const answer = [];
  const acc = [0, list[0]];

  for (let i = 1; i < n; i++) acc.push(list[i] + acc[i]);

  for (let i = 0; i < M; i++) {
    const [start, end] = range[i].split(' ').map(el => Number(el));
    answer.push(acc[end] - acc[start - 1]);
  }
  return answer.join('\n')
}

const testcase = input
console.log(solution(N, arr, testcase));