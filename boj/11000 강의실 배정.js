/**
 * 11000 강의실 배정
 * 첫 줄 N
 * 이후 시작시간 종료시간 정보가 주어진다.
 * 최소의 강의실을 사용해 모든 수업을 가능하게 하려한다.
 * 강의실 개수 출력.
 * 
 * 시작시간때 +1, 종료시간떄 -1시키면서 기존 answer보다 큰 경우가 있으면 answer 갱신.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'1 3',
'2 4',
'3 5',
]
const N = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))
const solution = (n, info) => {
  let answer = 0;
  let classroom=0;
  const times = [];
  for(const [start, end] of info){
    times.push({time: start, start: 1})
    times.push({time: end, start: -1})
  }
  times.sort((a,b)=>{
    if(a.time>b.time) return 1;
    else if(a.time<b.time) return -1;
    else return a.start-b.start;
  })

  for(const schedule of times){
    classroom += schedule.start;
    answer = answer < classroom ? classroom : answer;
  }
  return answer;
}

console.log(solution(N, INFO))