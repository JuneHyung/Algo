/**
 * 1269 대칭 차집합
 * 두 집합 A와 B가 있을 때, (A-B)와 (B-A)의 합집합을 A와 B의 대칭 차집합이라고 한다.
 * 
 * 첫줄 : A개수, B개수
 * 둘줄 : A원소
 * 셋줄 : B원소
 * 원소개수는 20만을 넘지않고, 값은 1억넘지않아요
 * 
 * 대칭 차집합 개수 구하기
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3 5',
'1 2 4',
'2 3 4 5 6',
]
const [A, B] = input[0];
const aSet = new Set(input[1].split(' ').map(Number));
const bSet = new Set(input[2].split(' ').map(Number));

const solution = (a, b, aSet, bSet) => {
  let cnt = 0;
  aSet.forEach(num => cnt = bSet.has(num) ? cnt : cnt+1);
  bSet.forEach(num => cnt = aSet.has(num) ? cnt : cnt+1);
  return cnt;
}

console.log(solution(A, B, aSet, bSet));