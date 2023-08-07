/**
 * 1929 소수 구하기
 * N과 M사이 소수구하기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '3 16';
const [N, M] = input.split(' ').map(Number);
const solution = (n, m) =>{
  const notPrime = {1: true};

  for(let i=2;i<=Math.ceil(Math.sqrt(m)); i++){
    if(notPrime[i]) continue;
    for(let j=i**2; j<=m;j+=i){
      notPrime[j]=true;
    }
  }
  const result = [];

  for(let i=n;i<=m;i++){
    if(!notPrime[i]) result.push(i)
  }
  return result.join('\n')
}

console.log(solution(N, M))