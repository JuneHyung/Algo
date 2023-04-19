/**
 * 9095 1,2,3 더하기
 * 4를 1, 2, 3의 합으로 나타내는 방법은 7가지다.
 * 합을 나타낼때 수를 1개이상 사용 해야함.
 * n이 주어지면, 1,2,3의 합으로 나타내는 방법의 수
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'4',
'7',
'10',
]
const T = Number(input.shift())

const solution = (n) =>{
  const dp = [1, 2, 4]
  for(let i=3;i<=n;i++){
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
  }
  return dp[n-1]
}

for(let t= 0;t<T;t++){
  const N = Number(input.shift());
  console.log(solution(N))
}

/**
1: 1 
1

2: 2 
1 1, 
2


3: 4 
1 1 1
1 2
2 1
3

4: 7
1 1 1 1
1 1 2
1 2 1
2 1 1
2 2
1 3
3 1

5: 13
1 1 1 1 1
1 1 1 2
1 1 2 1
1 2 1 1
2 1 1 1
1 1 3
1 3 1
3 1 1
2 2 1
2 1 2
1 2 2
2 3
3 2
 */