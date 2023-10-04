/**
 * 21737 SMUPC 계산기
 * S : -
 * M : *
 * U : /
 * P : +
 * C : 결과반환
 * 앞에서 부터 순서대로 계산한다.
 * 음수를 양수로 나누는 경우 음수에 -1을 곱해 양수로 바꿔 몫을 취하고 -1을 곱한것과 같다.
 * 
 * 
 * 첫 줄에 수식에 들어갈 기호개수가 주어진다.
 * 둘째줄에 N개 기호가 사용된 수식이 주어진다.
 * 0으로나누는 경우는 없다.
 * C가 나올떄 마다 띄어쓰기로 출력한다.
 * C가 없으면 NO OUTPUT을 출력
 */
// const fs = require("fs")
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '4',
  '0328CS00325CC',
]

const N = Number(input.shift())
const STR = input.shift();

const solution = (n, str) =>{
  if(!str.includes('C')) return "NO OUTPUT";

  const p = str.match(/[0-9]+|[A-Z]/g);
  
  const calc =(lt, rt, k) =>{
    switch(k){
      case 'S': return lt - rt
      case 'M': return lt * rt
      case 'U': return parseInt(lt / rt, 10)
      case 'P': return lt + rt
      default:
        return rt;
    }
  }

  let ans = '';
  let op = '', val = 0;

  for(let i=0;i<p.length;i++){
    const v = (p[i]);
    if(isNaN(Number(v))){
      op=v;
      if(op==='C') ans+= `${val} `;
    }else{
      val = calc(val, Number(v), op)
    }
  }
  return ans;
}

console.log(solution(N, STR))