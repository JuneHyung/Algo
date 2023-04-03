/**
 * 21758 꿀 따기
 * 좌우로 N개 꿀들이 있다.
 * 각 숫자는 딸 수 있는 양이다.
 * 
 * 벌이 있는 곳은 딸 수 없다.
 * 
 * 9 9 4 1 4 9 9
 * 일 때
 * 앞의 두  9 9에 벌이있고, 끝의 9에 벌통이있다면
 * 4+1+4+9+9 = 27
 * 4+1+4+9+9 = 27
 * 꿀의 양은 54가된다.
 * 
 * 가능한 최대의 꿀의 양을 출력.
 * 
 * 1. 모든 경우 생각..? => 24점, 시간초과인듯함
 * 1-1.벌 벌 꿀통 => 꿀통 우측 끝 고정
 * 1-2.벌 꿀통 벌 => 벌들을 양끝 고정
 * 1-3.꿀통 벌 벌 => 꿀통 좌측 고정
 * 
 * 2. 식을 간단히 할 수 있었음. (정답참고)
 * 다 돌면서 계산하지말고, 처음에 각 구간까지 합을 구하고,
 * 경우에따라 필요한 값들을 빼주는 방식으로.
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '6',
//   '1 10000 3 6 12 1',
// ]
const input = [
  '3',
  '2 5 4',
]
// const input = [
//   '50',
// '25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25',
// ]

const N = Number(input.shift())
const HONEY = input.shift().split(' ').map(Number);
HONEY.unshift(0)

const getRightHive = (n, honey, honeySum) => { 
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 2; i < n; i++) { 
    max = Math.max(max, honeySum[n] - honey[1] - honey[i] + honeySum[n] - honeySum[i])
  }
  return max;
}
const getMidHive = (n, honey, honeySum) => { 
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 2; i < n; i++) { 
    max = Math.max(max, honeySum[i] - honey[1] + honeySum[n] - honeySum[i-1] - honey[n])
  }
  return max;
}
const getLeftHive = (n, honey, honeySum) => { 
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 2; i < n; i++) { 
    max = Math.max(max, honeySum[n] - honey[n] - honey[i] + honeySum[i - 1]);
  }
  return max;
}
const solution = (n, honey) => { 
  const honeySum = Array.from({ length: n + 1 }, () => 0)
  for (let i = 1; i <= n; i++) honeySum[i] = honey[i] + honeySum[i - 1];

  // 1-1
  const rightHive = getRightHive(n, honey, honeySum);
  // 1-2
  const midHive = getMidHive(n, honey, honeySum);
  // 1-3
  const leftHive = getLeftHive(n, honey, honeySum);
  
  const answer = Math.max(rightHive, midHive, leftHive);
  return answer;
}

console.log(solution(N, HONEY))