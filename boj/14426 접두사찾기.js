/**
 * 14426 접두사 찾기
 * 문자열S의 접두사란 S의 가장 앞에서부터 부분 문자열을 의미한다.
 * codeplus의 접두사는 'code', 'co' codepl, codeplus가 있고, plus, s, cude, crud는 아니다.
 * n개 문장려로 이루어진 집합 S가 주어진다.
 * 
 * 문자열갯수 N과 검사해야할 문자열 M이주어진다.
 * 
 * 첫번째 줄에 M개 문자열 중에 총 몇개가 포함되어 있는 문자열 중 적어도 하나의 접두사인지 출력.
 * 
 */

// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 10',
'baekjoononlinejudge',
'startlink',
'codeplus',
'sundaycoding',
'codingsh',
'baekjoon',
'star',
'start',
'code',
'sunday',
'coding',
'cod',
'online',
'judge',
'plus',
]
const [N, M] = input.shift().split(' ').map(Number)
const STR_INFO = input.slice(0).sort();

const solution = (n, m, strInfo) => {
  let ans = 0;
  for (let i = 0; i < strInfo.length; i++)
    if (strInfo[i].indexOf(strInfo[i - 1]) === 0) ans++;
  return ans;
}

console.log(solution(N, M, STR_INFO))