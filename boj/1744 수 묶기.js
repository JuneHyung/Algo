/**
 * 1744 수 묶기
 * 길이가 N인 수열이 주어졌을 떄 그 수열의 합을 구하려 한다.
 * 모두 더하는게 아닌 수열의 두 수를 묶으려 한다. 어떤 수를 묶으려고할때 위치 상관없이 묶을 수 있다.
 * 자기자신은 묶을 수 없다.
 * 단 한번만 묶거나 묶지 않아야함.
 * 적절히 묶었을 때 합이 최대가 되게 작성.
 * N은 -1,000 ~ 1,000
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '4',
'-1',
'2',
'1',
'3',
]
const N = Number(input.shift())
const LIST = input.map(Number)
const solution = (n, list) => {
  let answer = 0;
  let zeroFlag = false;
  const minus = [];
  const plus = [];
  for(let i=0;i<n;i++){
    const cur = list[i];
    if(cur===1) answer++;
    else if(cur===0) zeroFlag = true;
    else if(cur<0) minus.push(cur)
    else plus.push(cur)
  }

  plus.sort((a,b)=> b-a);
  minus.sort((a,b)=> a-b);
  console.log(plus, minus)
  if(zeroFlag && minus.length%2===1){
    minus.pop();
  }
  if(plus.length%2===1){
    answer += plus[plus.length-1]
    plus.pop();
  }
  if(minus.length%2===1){
    answer += minus[minus.length-1]
    minus.pop();
  }
  for(let i=0;i<plus.length;i+=2) answer += plus[i]*plus[i+1]
  for(let i=0;i<minus.length;i+=2) answer += minus[i]*minus[i+1]
  return answer;
}
console.log(solution(N, LIST))