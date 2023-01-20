/** 12931 두 배 더하기.js
 * 모든 값이 0으로 채워진 길이가 N인 배열 A
 * 값 하나를 증가
 * 배열의 모든 값 2배
 * 
 * 배열 B가 주어지면 , 배열 A를 B로 만들기 위한 연산의 최소 횟수를 구하기.
 * 
 * 합을 구해서 2로 나누었을 때 1인 경우의 수를 계산하면서 1을 빼줌.
 * 1로 남은 수의 갯수를 sum에서 빼줌
 * answer에 그 갯수를 더함.
 * 2로 나누어지면 2로 나눠줌.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const N = input[0];
// const arr = input[1].split(' ').map(el=>Number(el));

// 3
// const N = 2;
// const arr = [2, 1]

// 7
// const N = 3;
// const arr = [16, 16, 16]

// 9
// const N = 1;
// const arr = [100]

// 2
// const N = 5;
// const arr = [0, 0, 1, 0, 1]


const solution = (N, arr) => {
  let sum = arr.reduce((acc, cur) => acc + cur, 0)
  const arrB = [...arr];
  let answer = 0;

  while (sum !== 0) {
    let num = 0;
    for (let i = 0; i < N; i++) { // -1 할 거 찾기.
      if (arrB[i] % 2 === 1) {
        arrB[i] -= 1;
        num++;
      }
    }

    if (num > 0) { // -1할게 있으면
      sum -= num;
      answer += num;
    } else { // 없으면 /2
      for (let i = 0; i < N; i++) {
        if (arrB[i] !== 0) arrB[i] /= 2;
      }
      sum /= 2;
      answer++;
    }
  }

  return answer;
}

console.log(solution(N, arr));