/**
 * 23970 알고리즘 수업 - 버블 정렬 3
 * 배열 A가 버블 정렬 중 배열 B가 되는지 확인
 * 가능하면 1 아니면 0 출력
 * 
 * 시간초과 => 가장뒤 비교해서 통과하면 배열전체비교하게 수정 
 * && flag값으로 체크 후 마지막에 값 도출 하던거 바로 return시켜서 시간초과 해결
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '6',
// '4 6 5 1 3 2',
// '4 1 3 2 5 6',
// ]
const input = [
  '6',
'4 6 5 1 3 2',
'1 2 4 3 5 6',
]
// const input = ["5", "5 4 3 2 1", "5 4 3 2 1"];

const N = Number(input.shift());
const ARR_A = input.shift().split(" ").map(Number);
const ARR_B = input.shift().split(" ").map(Number);

const compare = (n, arrA, arrB) => {
  for (let i = 0; i < n; i++) if (arrA[i] !== arrB[i]) return false;
  return true;
};

const solution = (n, arrA, arrB) => {
  if (compare(n, arrA, arrB)) return 1;
  else{
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i; j++) {
        const cur = arrA[j];
        const next = arrA[j + 1];
        if (cur > next) {
          arrA[j] = next;
          arrA[j + 1] = cur;
          // 마지막자리 비교 후 같으면 배열이 같은지 비교.
          if (arrA[n-i-1] === arrB[n-i-1] &&compare(n, arrA, arrB)) {
            return 1;
          }
        }
      }
    }
  }
  return 0;
};

console.log(solution(N, ARR_A, ARR_B));
