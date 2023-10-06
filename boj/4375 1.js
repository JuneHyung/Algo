/**
 * 4375 1
 * 2와 5로 나누어 떨어지지 않는 정수 n이 주어졌을 떄 각 자리수가 모두 1로만 이루어진 n배수 찾는 프로그램 작성
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3',
  '7',
  '9901',
]

let answer = [];

for(let i=0;i<input.length;i++){
  let t = 1;
  let digit = 1;
  while(true){
    if(t%input[i]===0) break;

    t = (t*10 +1) % input[i]
    digit++;
  }
  answer.push(digit)
}
console.log(answer.join('\n'))