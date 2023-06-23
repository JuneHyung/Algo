/**
 * 1374 N개 강의가 있고, 시작 시간과 끝나는 시간을 알고있다.
 * 최대한 적은 수의 강의실을 사용하여 모든 강의가 이루어지게 하고 싶다.
 * 동시에 2개 이상 강의는 진행할 수 없고, 한 강의의 종료시간과 다른 강의의 시작시간이 겹치는 것은 상관없다.
 * 필요한 최소 강의실의 수를 출력하시오.
 * 강의 번호 시작시간 종료시간 순서.
 * 시작시간은 종료시간보다 작다.
 * 
 * 최소 강의실 개수를 출력하시오.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '8',
'6 15 21',
'7 20 25',
'1 3 8',
'3 2 14',
'8 6 27',
'2 7 13',
'4 12 18',
'5 6 20',
]
const N = Number(input.shift());
const INFO = input.map(el=>el.split(' ').map(Number));

const solution = (n, info) =>{
  let answer = 0, classroom=0;
  const times = [];
  for(const [no, start, end] of info){
    times.push({no, time: start, val: 1})
    times.push({no, time: end, val: -1})
  }

  times.sort((a,b)=>{
    if(a.time > b.time) return 1;
    else if(a.time < b.time) return -1;
    else return a.val - b.val;
  })
  console.log(times)
  for(const schedule of times){
    classroom += schedule.val;
    answer = answer <classroom ? classroom : answer;
  }
  return answer;
}

console.log(solution(N, INFO));