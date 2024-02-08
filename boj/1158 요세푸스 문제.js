/**
 * 1158 요세푸스 문제
 * 1~N까지 사람이 원을 이루며 앉아 있고 양의 정수 K가 주어진다.
 * 순서대로 K번쨰 사람을 제거한다.
 * 한사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
 * N명의 사람이 모두 제거될때까지 반복.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '7 3'
const [N, K] = input.split(' ').map(Number)
const solution = (n, k) => {
  const arr = Array.from({length: n},(_,i)=>i+1);
  const answer = [];

  let idx = 0;
  for(let i=0;i<n;i++){
    const nextIdx = (idx + k)%arr.length;
    answer.push(arr[nextIdx]);
    arr.splice(nextIdx, 1);
    idx = nextIdx;
  }

  return `<${answer.join(', ')}>`;

}

console.log(solution(N, K-1));