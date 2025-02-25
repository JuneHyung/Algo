/**
 * 24313 알고리즘 수업 - 점근적 표기 1
 * O(g(n)) = {f(n) | 모든 n ≥ n0에 대하여 
 * f(n) ≤ c × g(n)인 양의 상수 c와 n0가 존재한다}
 * 
 * f(n) = a1n + a0, 양의 정수 c, n0가 주어질 경우 O(n) 정의를 만족하는지 알아보자.
 * 
 * 첫 줄 a1 a0가 주어진다.
 * 양의 정수 c가 주어진다.
 * 양의 정수 n0가 주어진다.
 * 만족하면 1 아니면 0 출력
 * 
 * ❗ 조건에서 a는 절대값이 0 ~ 100
 * a1n+a0 <= c*n
 * a0 <= c*n - a1*n
 * a0 <= (c-a1)*n
 * -100 <= a0 <= (c-a1) *n
 * 0 <= a0+100 <= (c-a1)*n+100
 * (c-a1)*n +100
 * c>=a1
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '7 4',
'7',
'5',
]
const [a1, a0] =  input[0].split(' ').map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

const solution = (a1, a0, c, n0) => {
return a1<=c && a1*n0 + a0 <= c * n0 ? 1 : 0
}

console.log(solution(a1, a0, c, n0));