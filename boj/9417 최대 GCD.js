/**
 * 9417 최대 GCD
 * 정수 M이 주어졌을 때 모든 두 수의 쌍에ㅔ서 가장 큰 최대 공약수를 찾기.
 * 테케수 M
 * 테케가 나온다.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'10 20 30 40',
'7 5 12',
'125 15 25',
]
const T = Number(input[0])

const solution = (info) =>{
  const n = info.length;
  let max = 0;
  const getGCD = (a,b) => b>0 ? getGCD(b, a%b) : a;

  for(let i=0;i<n;i++){
    const lt = info[i];
    for(let j=0;j<n;j++){
      if(i!==j){
        const rt = info[j];
        const gcd = getGCD(lt, rt)
        max = Math.max(max, gcd);
      }
    }
  }

  return max
}

for(let t=1;t<=T;t++){
  const INFO = input[t].split(' ').map(Number)
  console.log(solution(INFO))
}