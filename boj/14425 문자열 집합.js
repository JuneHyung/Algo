/**
 * 14425 문자열 집합
 * N개 문자열로 이루어진 집합S가 주어진다.
 * M개 문자열 중에 집합 S에 포함된 것이 총 몇개 인지 구하는 프로그램 작성
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
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
const [N, M] = input.shift().split(' ')
const S = new Set();
let answer = 0;
for(let i=0;i<N;i++) S.add(input.shift())

const solution = (n, m, s, str) => {
  let answer = 0;
  for(let i=0;i<m;i++) answer = s.has(str[i]) ? answer+=1 : answer;
  return answer;
}
console.log(solution(N, M, S, input));
