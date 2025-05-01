/**
 * 11054 가장 긴 바이토닉 부분 수열
 * 
 * / \ /\ 모양이면 가장 긴 바이토닉 수열.
 */
/**
 * 1. 한번에 답을 도출? -> 모르겠다.
 * 2. 가장 긴 증가하는 부분수열 + 가장 긴 감소하는 부분수열 합치기 -> 둘 다 처음부터 시작하면 안되니까 단순히 따로 구해서 합치면 안된다.
 * 3. 증가하는 부분수열 + 뒤에서 부터 감소하는 부분 수열 길이들을 구해서 합치기.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '10',
  '1 5 2 1 4 3 4 5 2 1',
]
const N = Number(input[0]);
const S = input[1].split(' ').map(Number);


const solution = (n, s) => {

  const increase = Array.from({ length: n }, () => 1);
  const decrease = Array.from({ length: n }, () => 1);

  // 증가 부분 수열 길이 계산
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (s[i] > s[j]) increase[i] = Math.max(increase[i], increase[j] + 1);
    }
  }

  const end = n - 1;

  // 감소 부분 수열 길이 계산
  for (let i = end; i >= 0; i--) {
    for (let j = end; j > i; j--) {
      if (s[i] > s[j]) decrease[i] = Math.max(decrease[i], decrease[j] + 1);
    }
  }

  // i번째가 겹칠 수 있으니 -1
  const sum = increase.map((inc, idx) => inc + decrease[idx] - 1);
  // console.log('increase:', increase);
  // console.log('decrease:', decrease);
  // console.log('sum:', sum);

  const result = Math.max(...sum);

  return result;
}

console.log(solution(N, S));