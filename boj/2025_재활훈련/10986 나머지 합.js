/**
 * 10986 나머지 합
 * 수 N개 A1, A2, ... An이 주어진다.
 * 이때 연속된 부분 구간의 합이 M으로 나누어 떨어지는 구간의 개수를 구하라.
 * 
 * Ai + ... Aj합이 M으로 나누어 떨어지는 i,j쌍의 개수.
 * 첫 줄 N과 M (N은  1 ~ 10^6, M은 2 ~ 10^3)
 * 둘줄에 N개의 수 A1~An 0 ~ 10^9
 */
/**
 * 1. 메모리 초과 
 * 각 연속된 부분 구간의 합을 저장해두고, %m이 0인항목을 필터링하여 길이 리턴 
 * 
 * 2. 시간 초과
 * 배열에 따로 합을 저장하지 않고, 반복문에서 바로 카운팅하게 수정
 * 
 * 3. GPT HINT
 * 나머지의 개수를 누적하면서 세고, 
 * 같은 나머지를 갖는 누적합 쌍의 개수를 센다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 3',
  '1 2 3 1 2',
]
const [N, M] = input[0].split(' ').map(Number);
const ARR = input[1].split(' ').map(Number);

const solution = (n, m, arr) => {
  const modCount = Array.from({ length: m }, () => 0);
  let prefixSum = 0;
  let result = 0;

  // 초기 상태에서 나머지 0인 경우도 하나로 포함됨
  modCount[0] = 1;

  for (let i = 0; i < n; i++) {
    prefixSum = (prefixSum + arr[i]) % m;

    result += modCount[prefixSum];
    modCount[prefixSum]++;
  }

  return result;
}

console.log(solution(N, M, ARR))