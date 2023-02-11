/**
 * 11723 집합
 * 아래 연산을 수행하는 프로그램작성
 * add x : S에 x추가 이미 있는경우 무시
 * remove x : S에서 x 제거. 없는 경우 무시
 * check x : S에 x가 있으면 1을 없으면 0을 출력
 * toggle x : S에 x가 있으면 x제거, 없으면 추가
 * all : S를 {1,2,...20}으로 변경
 * empty : S를 공집합으로 바꾼다.
 * 
 * 1. Set을 이용하여 명령어들을 차례로 수행. => 메모리초과
 * 2. boolean 배열로 true false 체크하며 수행 => 메모리초과
 * 현재 node.js로 못푼다고 한다. https://amunre21.github.io/boj/1-11723/
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '26',
  'add 1',
  'add 2',
  'check 1',
  'check 2',
  'check 3',
  'remove 2',
  'check 1',
  'check 2',
  'toggle 3',
  'check 1',
  'check 2',
  'check 3',
  'check 4',
  'all',
  'check 10',
  'check 20',
  'toggle 10',
  'remove 20',
  'check 10',
  'check 20',
  'empty',
  'check 1',
  'toggle 1',
  'check 1',
  'toggle 1',
  'check 1',
]

const N = Number(input.shift())
const COMMAND = input.map(el => el.split(' '))
const solution = (n, command) => {
  const answer = [];
  let S = Array.from({ length: 20 }, () => false);
  const ALL = Array.from({ length: 20 }, () => true);
  const EMPTY = [];

  for (let i = 0; i < n; i++) {
    const c = command[i][0];
    const num = parseInt(command[i][1]);

    switch (c) {
      case 'add':
        S[num] = true;
        break;
      case 'remove':
        S[num] = false;
        break;
      case 'check':
        S[num] ? answer.push(1) : answer.push(0)
        break;
      case 'toggle':
        S[num] != S[num]
        break;
      case 'all':
        S = ALL;
        break;
      case 'empty':
        S = EMPTY;
        break;
    }
  }
  return answer.join('\n')
}
console.log(solution(N, COMMAND));