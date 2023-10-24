/**
 * 1920 수 찾기
 * N개 정수가 주어졌을 때 X라는 수가 존재하는지 알아내는 프로그램 작성
 * N과 A배열이 주어지고, M과 숫자들이 주어지면, 주어진 숫자들이 A에 존재하면 1 아니면 0 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'4 1 5 2 3',
'5',
'1 3 7 9 5',
]
const N = Number(input.shift());
const aArr = input.shift().split(' ').map(Number);
const M = Number(input.shift());
const tArr = input.shift().split(' ').map(Number);

const all = new Set(aArr);
const answer = tArr.map(el=>all.has(el) ? 1 : 0);
console.log(answer.join('\n'));