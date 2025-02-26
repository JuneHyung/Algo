/**
 * 2231 분해합
 * N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다.
 * M의 분해합이 N이면 M을 N의 생성자라 한다.
 * 256 = 245 + 2 + 5 +6
 * 
 * 생성자가 없을 수도 있다.
 * N이 주어졌을 떄 N의 가장 작은 생성자를 구해라.
 * 없으면 0
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '216'
const N = Number(input);
const solution = (n)=>{
  
  for(let i=1; i<=n;i++){
    let sum = i;
    let num = i;

    while(num>0){
      sum += num%10;
      num = Math.floor(num/10);
    }
    if(sum===n) return i;
  }
  return 0;
}

console.log(solution(N))
