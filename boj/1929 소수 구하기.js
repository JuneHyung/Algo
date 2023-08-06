/**
 * 1929 소수 구하기
 * N과 M사이 소수구하기
 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
const [N, M] = input.split(' ').map(Number);
const solution = (n, m) =>{
  const prime = {1: true}
  for(let i=2;i<=Math.ceil(Math.sqrt(m)); i++){
    if(prime[i]) continue;
    for(let j=i**2; j<=m;j+=i){
      prime[j] = true;
    }
  }

  const result = [];

  for(let i=n;i<=m;i++){
    if(!prime[i]) result.push(i)
  }
  return result.join('\n')
}

console.log(solution(N, M))