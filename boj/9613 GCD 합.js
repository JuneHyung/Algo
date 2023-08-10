/**
 * 9613 GCD 합
 * 양의 정수 N이 주어지면 간으한 모든 쌍의 GCD 합을 구하는 프로그램 작성.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3',
'4 10 20 30 40',
'3 7 5 12',
'3 125 15 25',
]
const T = Number(input.shift())

const solution = (info) =>{
  const n = info.shift();
  const answer = [];
  const gcd = (a,b) => b>0 ? gcd(b, a%b) : a;
  for(let i=0;i<n;i++){
    for(let j =i+1;j<n;j++){
      const result = gcd(info[i], info[j])
      answer.push(result);
    }
  }
  return answer.reduce((a,c)=>a+c, 0);
}

for(let t= 0;t<T;t++){
  const info = input[t].split(' ').map(Number);
  console.log(solution(info))
}