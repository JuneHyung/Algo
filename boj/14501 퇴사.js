/**
 * 14501 퇴사
 * N+1일째 되는날 퇴사하기 위해 남은 N일동안 최대한 많은 상담을 하려한다.
 * 상담걸리는시간 T와 금액 P가 있다.
 * 상담하며 1일이상 걸릴 수 있기 때문에 모든 상담을 할 수 없다.
 * 최대한 많은 상담할때 얻을 수 있는 최대 수익을 구하시오.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7',
'3 10',
'5 20',
'1 10',
'1 20',
'2 15',
'4 40',
'2 200',
]
const N = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))
const solution = (n, info) => {
  const price = Array.from({length:n}, ()=>0);
  for(let i=0;i<n;i++){
    const [dur, p] = info[i];
    if(i+dur > n) continue;
    price[i] += p;
    for(let j=i+dur; j<n;j++){
      price[j] = Math.max(price[j], price[i]);
    }
  }
  const answer = Math.max(...price)
  return answer;
}
console.log(solution(N, INFO))