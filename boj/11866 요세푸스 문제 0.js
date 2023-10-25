/**
 * 11866 요세푸스 문제 0
 * 1~N명의 사람이 원을 이루며 앉고 K가 주어진다.
 * K번째 사람을 제거한다.
 * N명의 사람이 모두 제거될때까지 계속된다.
 * 사람등리 제거되는 순서를 (N,K) - 요세푸스 순열이라 한다.
 * k는 n보다 작다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '7 3'
const [N, K] = input.split(' ').map(Number);

const solution = (n, k) =>{
  const arr = Array.from({length: n},(_,i)=>i+1)
  const answer = [];

  for(let i=0;i<n;i++){
    for(let j=1;j<=k;j++){
      if(j===k) answer.push(arr.shift());
      else arr.push(arr.shift());
    }
  }
  return `<${answer.join(', ')}>`
}

console.log(solution(N, K));