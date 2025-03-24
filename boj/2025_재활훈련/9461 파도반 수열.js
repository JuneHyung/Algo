/**
 * 9461 파도반 수열
 * 첫 삼각형은 정삼각형으로 변의 길이는 1
 * 나선에서 가장 긴변의 길이를 k라했을 때 그 변에 길이가 k인 정삼각형을 추가한다.
 * 1~10 까지 1, 1, 1, 2, 2, 3, 4, 5, 7, 9
 * N이 주어졌을 떄 P(N) 구하기
 * 
 * 첫줄 테케 T.
 * 둘줄부터 N이 주어진다.
 * 각 케이스마다 P(N)출력
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
  '6',
  '12',
]
const T = Number(input[0]);
const solution = (n) => {
  const P = [1, 1, 1, 2, 2];

  for(let i=5;i<=n;i++){
    P[i] = P[i-1] + P[i-5];
  }
  console.log(P)
  return P[n-1]
}

for(let t=1;t<=T;t++){
  const N = Number(input[t])
  

  console.log(solution(N))
}

/**
 * 1
 * 1
 * 1
 * 
 * 2
 * 2
 * 
 * 3
 * 
 * 4
 * 
 * 5
 * 
 * 7
 * 
 * 9
 * 
 * 12
 * 
 * 16
 */