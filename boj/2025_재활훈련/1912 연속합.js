/**
 * 1912 연속합
 * 
 * n개 정수로 이루어진 임의의 수열이 주어진다.
 * 이 중 연속된 몇 개의 수를 선택해 구할 수 있는 합 중 가장 큰 합을 구하려한다.
 * 수는 1개이상 선택해야한다.
 * 
 *  10, -4, 3, 1, 5, 6, -35, 12, 21, -1
 * 12+21 = 33 이 최대
 */
/**
 * 완탐 = 시간초과
 * 이전 값이 양수면 이전값 + 현재값
 * 이전 값이 음수면 현재값만 저장
 * 반복마다 최대값 갱신
 */
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input =[
  '10',
'10 -4 3 1 5 6 -35 12 21 -1', 
]
const N = Number(input[0])
const ARR = input[1].split(' ').map(Number);

const solution = (n, arr) => {
  let max = arr[0];
  const dp = Array.from({length: n},()=>0);
  dp[0] = arr[0];

  for(let i=1;i<n;i++){
    if(dp[i-1]<0) {
      dp[i] = arr[i];
    }else{
      dp[i] = arr[i] + dp[i-1];
    }

    if(max<dp[i]) max = dp[i];
  }


  return max;
}

console.log(solution(N, ARR))

/**
 * 
 * 
 * 10
 * 10-4=6
 * 6+3=9
 * 9+1=10
 * 10+5=15
 * 10+6=21
 * 21-35=-14
 * -14+12 (x)
 * 12
 * 12+21=33
 * 33-1=32
 * 
 */