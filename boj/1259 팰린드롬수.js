/**
 * 1259 팰린드롬 수
 * 앞뒤로 일겅도 똑같은 수를 팰린드롬수라고 한다.
 * 시작이 0일 수는 없다.
 * 주어지는 수가 팰린드롬 수면 yes 아니면 no 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = [
  '121',
'1231',
'12421',
'0',
]

while(true){
  const num = input.shift();
  if(num==='0') break;
  const mid = Math.floor(num.length/2);

  let flag = true;
  for(let i=0;i<=mid;i++){
    if(num[i]!==num[num.length-1-i]){
      flag = false;
      console.log('no'); break;
    }
  }
  if(flag){console.log('yes');}
  
}