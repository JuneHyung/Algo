/**
 * 1213 팰린드롬 만들기
 * 문자열이 주어지고 순서를 적절히 바꿔 팰린드롬을 만들려 한다.
 * 불가능하면 'I'm Sorry Hansoo'를 출력한다.
 * 정답이 여러개면 사전순으로 앞에오는걸 출력한다.
 */
// const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = 'ABACABA'
const solution = (str) => {
  const arr = str.split('').sort();
  const [head, body] = [[], []]
  while(arr.length){
    const first = arr.shift();
    const idx = arr.indexOf(first);
    if(idx===-1) body.push(first)
    else{
      head.push(first)
      arr.splice(idx,1);
    }
  }
  const tail = [...head].reverse().join('')
  if(body.length>1) return "I'm Sorry Hansoo";
  else return head.join('')+body.join('')+tail
}
console.log(solution(input))