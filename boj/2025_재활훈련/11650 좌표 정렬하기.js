/**
 * 11650 좌표 정렬하기
 * x좌표가 증가하는 순으로, x가 같으면 y가 증가하는 순으로 정렬
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '5',
'3 4',
'1 1',
'1 -1',
'2 2',
'3 3',
]
const N = Number(input[0])

const posList = input.slice(1).map(el=>el.split(' ').map(Number));

const solution = (n, posList) => {
  posList.sort((a,b)=>{
    if(a[0]>b[0]) return 1;
    else if(a[0]<b[0]) return -1;
    else if(a[1]>b[1]) return 1;
    else if(a[1]<b[1]) return -1;
    else return 0;
  })
  return posList.map(el=>el.join(' ')).join('\n')
}

console.log(solution(N, posList));