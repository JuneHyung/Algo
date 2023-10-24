/**
 * 10814 나이순 정렬
 * 나이와 가입한 순서대로 주어진다.
 * 나이가 증가하는 순으로 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3',
'21 Junkyu',
'21 Dohyun',
'20 Sunyoung',
]
const T = Number(input.shift())
const INFO = input.map(el=>el.split(' '));

INFO.sort((a,b)=> a[0] - b[0])
const answer = INFO.map(el=>`${el[0]} ${el[1]}`)
console.log(answer.join('\n'))
