/**
 * 1946 신입 사원
 * A성적이 B보다 셔류 심사 결과와 면접 성적이 모두 떨어지면 A는 선발되지 않는다.
 * 이 조건을 만족하면서 뽑을 수 있는 최대 인원수를 구해라
 * 서류성적 면접 성적으로 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
'5',
'3 2',
'1 4',
'4 1',
'2 3',
'5 5',
'7',
'3 6',
'7 3',
'4 2',
'1 4',
'5 7',
'2 5',
'6 1',
]
const T = Number(input.shift())

const solution =(n, info) =>{
  
  info.sort((a,b)=>a[0]-b[0])
  
  let cur = info[0];
  let answer =1;
  for(let i=1;i<n;i++){
    const [curDoc, curInterview] = cur;
    const [nextDoc, nextInterview] = info[i];
    console.log(`cur : ${curDoc}, ${curInterview} next : ${nextDoc}, ${nextInterview}`)
    console.log()
    
    if(curInterview > nextInterview){ 
      answer++;
      cur = [nextDoc, nextInterview];
    }
  }
  return answer;
}

for(let t=0;t<T;t++){
  
  const N = Number(input.shift())
  const INFO = input.splice(0, N).map(el=>el.split(' ').map(Number));
  console.log(solution(N, INFO))
}