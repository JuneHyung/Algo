/**
 * 추석 트래픽
 * 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미
 * 응답완료시간 S , 처리시간 T
 * S : YYYY-MM-DD hh:mm:ss.sss
 * T : 소수 셋째 자리까지.
 * 
 * 로그 문자열 2016-09-15 03:10:33.020 0.011s은 
 * "2016년 9월 15일 오전 3시 10분 33.010초"부터 
 * "2016년 9월 15일 오전 3시 10분 33.020초"까지 
 * "0.011초" 동안 처리된 요청을 의미한다. (처리시간은 시작시간과 끝시간을 포함)
 */

 const timeToMilSec = (time) => {
  const [HH, MM, SS] = time.split(':');
  // console.log(HH, MM, SS);
  const hour = HH * 60 * 60;
  const minute = MM * 60;
  let [sec, milSec] = SS.split('.').map(el => Number(el));
  const result = (hour + minute + sec) * 1000 + milSec;
  return result;
}

function solution(lines) {
  let times = [];
  for (let i = 0; i < lines.length; i++) {
    const [date, et, dur] = lines[i].split(' ');
    const duration = dur.split('s')[0];
    const miliSeconds = timeToMilSec(et);
    const startTime = miliSeconds - duration * 1000 + 1;
    const endTime = miliSeconds + 999;

    times.push(['st', startTime]);
    times.push(['et', endTime]);
  }

  times.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : -1);
  console.log(times);

  let answer = 0;
  let cnt = 0;
  for (const time of times) {
    const [flag, t] = time;
    flag === 'st' ? cnt++ : cnt--;

    answer = Math.max(answer, cnt)
  }

  return answer;
}


// const lines = [
//   "2016-09-15 01:00:04.001 2.0s",
//   "2016-09-15 01:00:07.000 2s"
// ]
const lines = ["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"]

console.log(solution(lines))