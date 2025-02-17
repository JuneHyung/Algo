/**14425 문자열 집합
 * N개 문자열로 이루어진 집합 S가 주어진다.
 * 그다음 M개 문자열 중 S에 포함되있는 것이 총 몇개인지 구하시오.
 * 
 * N과 M은 1~1만
 * 문자열은 소문자로만 이루어져있고 500자를 넘지않음
 * 같은 문자열이 여러번 주어지지 않음
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 11',
'baekjoononlinejudge',
'startlink',
'codeplus',
'sundaycoding',
'codingsh',
'baekjoon',
'codeplus',
'codeminus',
'startlink',
'starlink',
'sundaycoding',
'codingsh',
'codinghs',
'sondaycoding',
'startrink',
'icerink',
]
const [N, M] = input[0].split(' ').map(Number);
const nStrSet = new Set(input.slice(1, N+1));
const mStrList = input.slice(N+1);
const solution = (n, m, nStrSet, mStrList) => {
  let cnt = 0;
  for(const str of mStrList) cnt = nStrSet.has(str) ?cnt+1 : cnt;
  return cnt;
}

console.log(solution(N, M, nStrSet, mStrList));