/**
 * 17103 골드바흐 파티션
 * 골드바흐의 추측은 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
 * 짝수 N을 두 소수 합으로 나타내느 ㄴ표현을 골드바흐 파티션이라 한다.
 * N이 주어졌을 때 골드바흐 파티션 개수를 구하자.
 * 순서만 다른건 같은 파티션이다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'6',
'8',
'10',
'12',
'100',
]
const T = Number(input[0])

const max = Math.max(...input)
const NOT_PRIME = Array.from({length:max+1},()=>false);
for(let i=2;i<=Math.sqrt(max);i++){
  if(NOT_PRIME[i]) continue;
  else{
    for(let j=i**2;j<=max;j+=i){
      NOT_PRIME[j]=true;
    }
  }
}

const solution = (n) => {
  if(n===4) return 1;

  let answer = 0;
  for(let i=3;i<=Math.floor(n/2);i++){
    const a = i;
    const b= n-i;
    if(a%2===0 || b%2===0) continue;
    if(!NOT_PRIME[a] && !NOT_PRIME[b] && b !== 1){
      answer++;
    }
  }

  return answer;
} 

for(let t=1;t<=T;t++){
  const N = Number(input[t])
  console.log(solution(N))
}