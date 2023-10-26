/**
 * 4153 직각삼각형
 * 3개 수가 주어지면, 직각삼각형인지 계산.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6 8 10',
'25 52 60',
'5 12 13',
'0 0 0',
]
for(let t = 0; t<input.length-1;t++){
  const arr = input[t].split(' ').map(Number);
  const max = Math.max(...arr);

  let sum = 0;
  let long = 0;

  for(let i=0;i<3;i++){
    if(max===arr[i]) long = arr[i]*arr[i];
    else sum+= arr[i]*arr[i];
  }

  console.log(sum===long ? 'right' : 'wrong')
}