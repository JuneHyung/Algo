/**
 * 22945 팀 빌딩
 * 능력치가 다 다른 개발자 N명이 팀 빌딩을 위해 한 줄로 서있다.
 * 하나의 팀을 만들기 위해 개발자 2명이 반드시 모여야 한다.
 * 
 * 팀의 능력치 계산
 * A와 B사이의 다른 개발자 수 x min(A능력치, B능력치)
 * 팀 빌딩에서 나올 수 있는 팀 중 능력치의 최대값을 구해보자.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '4',
'1 4 2 5',
]
const N = Number(input.shift())
const DEVELOPER = input.shift().split(' ').map(Number)

const solution = (n, developer) => { 
  let lt = 0;
  let rt = n-1;
  let answer = Number.MIN_SAFE_INTEGER;
  while (lt < rt) { 
    let ability = (rt - lt - 1) * Math.min(developer[lt], developer[rt]);
    answer = Math.max(answer, ability);
    if (developer[lt] < developer[rt]) lt++;
    else rt--;
  }
  return answer;
}

console.log(solution(N, DEVELOPER))