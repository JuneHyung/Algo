/**
 * 4948 베르트랑 공준
 * 자연수n에 대해 n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다.
 * n이 주어졌을 떄 n보다 크고 2n보다 작은 소수의 개수 구하기.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
  '0',
]

const solution = (n) => {
  const limit = 2*n;
  const notPrime = {1:true}
  for(let i=2;i<=Math.ceil(Math.sqrt(limit));i++){
    if(notPrime[i]) continue;
    for(let j=i**2;j<=limit;j+=i){
      notPrime[j] = true;
    }
  }

  const result = [];
  for(let i=n+1;i<=limit;i++) {
    if(!notPrime[i]) result.push(i)
  }
  console.log(notPrime)
  console.log(result)
  return result.length;
}

for(let t = 0;t<input.length;t++){
  const n = Number(input[t]);
  if(n===0) break;
  
  console.log(solution(n))
  
}