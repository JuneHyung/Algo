/**
 * 5347 LCM
 * a와 b가 주어졌을 떄 최소 공배수를 구하는 프로그램 작성
 */
// const fs= require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = [
  '3',
'15 21',
'33 22',
'9 10',
]
const T = Number(input.shift())

const solution = (a, b) =>{
  const gcd = (a,b) => b>0 ? gcd(b, a%b) : a;
  const lcm = (a,b) => a*b / gcd(a,b);
  return lcm(a, b)
}

for(let t= 0; t<T;t++){
  const [a, b] = input[t].split(' ').map(Number);
  console.log(solution(a, b));
}