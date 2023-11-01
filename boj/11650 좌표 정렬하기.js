/**
 * 11650 좌표 정렬하기
 * 2차원 평면위 N개 점이 주어진다.
 * 좌표를 x가 증가하는 순으로 x가 같으면 y가 증가하는 순서로 정렬한다음 출력하는 프로그램 작성.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'3 4',
'1 1',
'1 -1',
'2 2',
'3 3',
]
const N = Number(input.shift());
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, info) => {
  return info.sort((a,b)=>{
    if(a[0]>b[0])return 1;
    else if(a[0]<b[[0]]) return -1;
    else return a[1] - b[1];
  }).map(el=> `${el[0]} ${el[1]}`)
  .join('\n')
}

console.log(solution(N, INFO))