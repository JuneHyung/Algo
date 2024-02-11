/**
 * 1138 한 줄로 서기
 * N명의 사람들은 한 줄로 선다.
 * 아침에 기록해놓은 것과 사람들이 줄을 선 위치가 맞는지 확인한다.
 * 사람들은 자기보다 큰 사람이 왼쪽에 몇명있었는지만 기억한다.
 * 줄을 어떻게 서야하는지 출력하자.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'2 1 1 0',
]
const N = Number(input[0])
const PEOPLE = input[1].split(' ').map(Number);

const solution = (n, people) => {
  const answer = Array.from({length:n}, ()=>0);

  // i가 순서
  for(let i=1;i<n+1;i++){
    // 기준
    let prev = people[i-1];
    let cnt = 0; // 좌측사람수
    // console.log(prev)
    for(let j=0;j<n;j++){
      // 카운트한 사람과 현재 기준이되는 사람의 좌측인원수가 동일할때, 아직 삽입되지 않았으면
      if(cnt === prev && answer[j]===0){
        answer[j] = i;
        // console.log('1', answer, cnt)
        break;
      }
      // 0이면 cnt+1
      else if(answer[j]===0){
        cnt++;
        // console.log('2', answer, cnt)
      }
    }
  }
  return answer.join(' ')
}
console.log(solution(N, PEOPLE))