/**
 * 1484 다이어트
 * 성원이는 다이어트를 시도 중이다.
 * G킬로그램 더쪗다.
 * G킬로그램은 성원이의 현재 몸무게의 제곱에서 성원이가 기억하고 있던 몸무게의 제곱을 뺸것.
 * 현재 몸무게로 가능한 것을 모두 출력하시오.
 * 
 * G가 주어진다.
 * 가능한 현재 몸무게를 오름차순으로 정렬
 * 없으면 -1 출력.
 * 자연수가 아니면 제외
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '15'
const N = Number(input)

const solution = (n) =>{
  let lt = 1;
  let rt = 2;

  let flag = false;
  const answer = [];
  while(rt<100000){
    let ps = lt*lt;
    let pe = rt*rt;
    const diff = pe-ps;
    if(diff === n) {
      answer.push(rt);
      flag=true;
    }
    if(diff > n) lt++;
    else rt++;
  }
  if(!flag) return -1;

  return answer.join('\n')

}
console.log(solution(N))