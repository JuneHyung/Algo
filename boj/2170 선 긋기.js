/**
 * 2170 선 긋기
 * 선 그을 거다.
 * 여러번 그려진 곳은 한번씩만 계산한다.
 * 그려진 선의 총 길이를 구하자.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'1 3',
'2 5',
'3 5',
'6 7',
]

const N = Number(input.shift())
const LIST = input.map(el => el.split(' ').map(Number))

const solution = (n, list) => {
  list.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else return a[1] - b[1];
  })
  console.log(list);
  let sum = list[0][1] - list[0][0];
  let end = list[0][1];
  for (let i = 1; i < n; i++) { 
    if (list[i][0] <= end && list[i][1] > end) {
      sum += list[i][1] - end;
      end = list[i][1];
    } else if (list[i][0] > end) { 
      sum += list[i][1] - list[i][0];
      end = list[i][1];
    }
  }
  return sum;
}

console.log(solution(N, LIST))

