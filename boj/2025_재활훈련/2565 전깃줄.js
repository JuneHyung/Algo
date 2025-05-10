/**
 * 2565 전깃줄
 * 
 * 전봇대 A와 B가 있다. 교차하는 경우에 합선이 발생할 수 있으니 교차하지 않도록 하려한다.
 * 
 * 전깃줄이 전봇대에 연결되는 위치는 전봇대 위에서부터 차례로 번호가 매겨진다.
 * 서로 교차하지 않기 하기 위해 없애야 하는 전깃줄의 최소 개수를 구하시오.
 * 
 * 첫줄 2 전봇대 사이 전깃 줄 개수 (100이하)
 * 둘줄 한 줄에 하나씩 전깃줄이 A와 연결되는 위치의 번호와 B와 연결되는 위치의 번호가 차례로 주어진다.
 * 위치 번호는 500이하 자연수. 같은 위치에 2개이상 전깃줄은 연결 X.
 * 
 * 서로 교차하지 않게 하기 위해 없애야 하는 전깃줄 최소 개수 출력.
 */
/**
 * A에서 연결된 B 번호가 다음꺼의 B보다 크면 교차한다.
 * 앞의 것을 지우는게 적은지 뒤에걸 지우는게 적은지 어떻게 알지??=> GPT : 가장 긴 부분수열을 생각하세요.
 * 
 * 1. 정렬 후 가장 긴 부분 수열 구한 후 N - 가장 긴 길이
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8',
  '1 8',
  '3 9',
  '2 2',
  '4 1',
  '6 4',
  '10 10',
  '9 7',
  '7 6',
]
const N = Number(input[0]);
const INFO = input.slice(1).map(el => el.split(' ').map(Number));

const solution = (n, info) => {
  const connected = info.sort((a, b) => a[0] - b[0]).map(el => el[1]);

  const dp = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (connected[i] > connected[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }

  const max = Math.max(...dp);
  const result = n - max;

  return result;
}

console.log(solution(N, INFO))

/**
  [
    [ 1, 8 ], 
    [ 2, 2 ],
    [ 3, 9 ],
    [ 4, 1 ],
    [ 6, 4 ], 
    [ 7, 6 ],
    [ 9, 7 ], 
    [ 10, 10 ]
  ]

  8 ,2 ,9 ,1 ,4 ,6 ,7, 10

  i=0 : 8 => 1
  i=1 : 2 => 1  
  i=2 : 8, 9 / 2, 9 => 2
  i=3 : 1 => 1
  i=4 : 1,4 / 2,4 => 2
  i=5 : 1,4,5 / 2,4,6 => 3 | 2,6 => 2
  i=6 : 1,4,6,7 / 2.4.6.7 => 4 | 2,4,7 => 3
  i=7 : 1,4,6,7,10 / 2,4,6,7,10 => 5

 */