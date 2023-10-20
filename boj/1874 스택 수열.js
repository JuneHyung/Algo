/**
 * 1874 스택 수열.js
 * 1~n까지 수를 스택에 넣었다가 뽑아 늘어 놓음으로써 수열을 만들 것이다.
 * 숫자는 오름차순.
 * push면 + pop이면 -로 표현
 * 불가능하면 NO출력
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8',
'4',
'3',
'6',
'8',
'7',
'5',
'2',
'1',
]
const N = Number(input.shift())
const TARGET = input.map(Number)
const solution = (n, target) =>{
  const result = [];
  const answer = [];
  let cur = 1;
  for(let i=0;i<target.length;i++){
    const num = target[i];
    while(cur<=num){
      result.push(cur);
      cur++;
      answer.push('+')
    }

    const popped = result.pop();
    if(popped!==num) return 'NO';

    answer.push('-');
  }
  return answer.join('\n')
}
console.log(solution(N, TARGET));