/**
 * 6588 골드바흐의 추측
 * 4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
 * 100만 이하 모든 짝수에 대해 이를 검증하시오.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8',
'20',
'42',
'0',
]
const INFO = input.map(Number)

const max = Math.max(...INFO);
const notPrime = Array.from({length: max+1},()=>false);

for(let i=2;i<=Math.sqrt(max);i++){
  if(notPrime[i]) continue;
  for(let j=i**2; j<=max; j+=i){
    if(!notPrime[j]) notPrime[j] = true;
  }
}
let result = '';

const solution = (num) => {
  let answer = ''
  for(let i=3;i<num;i+=2){
    if(!notPrime[i] && !notPrime[num-i]){ answer += `${num} = ${i} + ${num-i}\n`; break; }
  }
  
  if(answer.length===0) answer += "Goldbach's conjecture is wrong.\n";
  result += answer;
}

for(let t=0;t<INFO.length-1;t++){
  solution(INFO[t]);
}
console.log(result)