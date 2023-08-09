/**
 * 9020 골드바흐의 추측
 * 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다.
 * 이런 수를 골드바흐 수라고한다.
 * 짝수를 두소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라 한다.
 * 10000보다 작거나 같은 모든 짝수 n엗 ㅐ한 골드바흐 파티션은 존재한다.
 * 2보다 큰 짝수 n이주어졌을 때 n의 골드바흐 파티션을 출력하는 프로그램 작성.
 * 여러가지인 경우 두 소수의 차이가 가장 작은 것을 출력.
 * 
 * 테스트케이스 T
 * 그다음 짝수 n이 주어진다.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '3',
// '8',
// '10',
// '16',
// ]
const input = [
  '2',
  '6',
  '4',
]
const T = Number(input.shift())

const NOT_PRIME = {1:true}
const PRIME = [];
const max = 10000;
for(let i=2;i<=Math.ceil(Math.sqrt(max));i++){
  if(NOT_PRIME[i])continue;
  for(let j=i**2;j<=max;j+=i){
    NOT_PRIME[j] = true;
  }
}

for(let i=2;i<=max;i++) if(!NOT_PRIME[i]) PRIME.push(i)

const solution = (n) => {
  const arr = PRIME.filter(el=>el<=n)
  const len = arr.length;
  const answer = [];
  for(let i=0;arr[i]< n/2+1; i++){
    const idx = arr.indexOf(n - arr[i]);
    if(idx!==-1) answer.push([arr[i], arr[idx]])
  }

  if(answer.length!==0){
    const a = answer.pop();
    return `${a[0]} ${a[1]}`
  }
}

for(let  t=0; t<T; t++){
  const N = Number(input[t]);
  console.log(solution(N)) 
}