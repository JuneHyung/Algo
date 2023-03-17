/**
 * 2750 수 정렬하기.js
 * 오름차순 정렬하기
 */
const fs =require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(input.shift())
const ARR = input.map(Number).sort((a,b)=>a-b);
for(const ans of ARR) console.log(ans)