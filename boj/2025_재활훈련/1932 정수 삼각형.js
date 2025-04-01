/**
 * 1932 정수 삼각형
 * 맨 위부터 시작해 아래있는 수 중 하나를 선택해 아래로 내려올 떄 
 * 합이 최대가 되는 경로를 구하는 프로그램 만들기.
 * 
 * 첫줄 삼각형 크기 n
 * 둘줄 부터 n+1
 * 
 * 첫 줄에 합이 최대가 되는 경로에 있는 수의 합을 구하기.
 */
/**
 * 밑에서부터 올라오면서 합중에 더 큰 숫자를 더하면서 갱신.
 * 꼭대기 (0, 0)을 리턴
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'7',
'3 8',
'8 1 0',
'2 7 4 4',
'4 5 2 6 5',
]
const  N = Number(input[0]);
const Triangle = input.slice(1).map(el=>el.split(' ').map(Number));


const solution = (n, triangle) => {
  const dp = [...triangle];

  for(let i=n-2;i>=0;i--){
    for(let j=0;j<=i; j++){
      dp[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
    }
  }

  return dp[0][0]
}


console.log(solution(N, Triangle))

