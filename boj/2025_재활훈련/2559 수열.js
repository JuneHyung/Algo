/**
 * 2559 수열
 * 연속적인 며칠 동안의 온도의 합이 가장 큰 값을 알아보려한다.
 * 매일 측정한 온도가 정수의 수열로 주어졌을 때 연속적인 며칠 동안의 온도 합이 가장 큰 값을 계산하는 프로그램 작성
 * 
 * 첫줄 측정한 날짜 수 N, 연속날짜 K (N은 2~10만, K는 1~N)
 * 둘줄 측정한 온도 리스트로 -100 ~ 100
 */
/**
 * lt, rt로 idx지정 후 반복문한번 돌아 합 저장한 다음, 최대값 리턴 ?
 * => lt rt 필요없이 반복문 idx로 처리.
 * 
 * 2. 최대값이 음수일 수 있어 초기값 MIN_SAFE_INTEGER로 수정
 * 3. 범위 수정
 */
/**
 * 다른사람 풀이
 * 길이는 똑같기 때문에 처음에 k개 합을 구한 다음, 다음껄 더하고 가장 이전껄 빼는 방식으로
 * 반복문 한번에 끝내는 방법.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
  '4 2',
  '-1 -2 -3 -4',
]

const [N, K] = input[0].split(' ').map(Number);
const DEGREE_LIST = input[1].split(' ').map(Number);

// const solution = (n, k, degreeList) => {

//   let max = Number.MIN_SAFE_INTEGER;

//   for (let i = 0; i <= n - k; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += degreeList[j];
//     }

//     max = sum > max ? sum : max;
//   }

//   return max;

// }
// console.log(solution(N, K, DEGREE_LIST));

const solution2 = (n, k, degreeList) => {

  let sum = degreeList.slice(0, k).reduce((a, c) => a + c, 0);
  let max = sum;

  for (let i = 0; i < n - k; i++) {
    sum += degreeList[i + k] - degreeList[i];
    if (sum > max) max = sum;
  }

  return max;

}

console.log(solution2(N, K, DEGREE_LIST));