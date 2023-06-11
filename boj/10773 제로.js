/**
 * 10773 제로 
 * 잘못된 수를 부를 때 마다 0을 외쳐서 가장 최근 재민이가 쓴 수를 지우게 시킨다.
 * 모든 수를 받아 적은 후 그 수의 합을 알고 싶어 한다.
 * 0일 경우 가장 최근에 쓴 수를 지우고 아닐 경우 해당 수를 쓴다.
 * 정수가 0일 경우에 지울 수 있는 수가 있음을 보장
 * 최종적으로 적어낸 수의 합을 구한다.
 * */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10',
'1',
'3',
'5',
'4',
'0',
'0',
'7',
'0',
'0',
'6',
]
const T = Number(input.shift())
const arr = [];
for(let t =0;t<T;t++){
  const num = Number(input[t]);
  num===0 ? arr.pop() : arr.push(num)
}
const answer = arr.reduce((a,c)=>a+c, 0);
console.log(answer);