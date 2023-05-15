/**
 * 2792 보석 상자
 * 보석은 M가지로 서로 다른 색상중 한 색상.
 * N명의 학생들에게 나누어주려한다.
 * 받지 못하는 학생이 있어도 된다.
 * 
 * 질투심은 가장 많은 보석을 가져간 학생이 가지고 있는 보석의 수
 * 이를 최소가 되게 하려 한다.
 * 
 * 
 * 질투심의 최소값 출력
 * 
 * 보석은 하나라도 남으면 안된다.
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 2',
'7',
'4',
]

const [N, M] = input.shift().split(' ').map(Number);
const INFO = input.map(Number)
const solution = (n, m, info) =>{
  let lt = 0;
  let rt = Math.max(...info)
  let answer = Number.MAX_SAFE_INTEGER;
  let mid = 0;

  while(lt<=rt){
    mid = Math.floor((lt + rt)/2);
    let res = 0;
    info.forEach(v=>res += Math.ceil(v/mid));

    if(res <= n){
      answer = Math.min(answer, mid);
      rt = mid-1;
    }else {
      lt = mid+1;
    }
  }

  return answer;
}

console.log(solution(N,M,INFO))