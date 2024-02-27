/**
 * 아날로그 시계
 * 
 * 초침이 시침과 분침이 만날떄 마다 알람이 울릴때 특정 시간동안 울리는 횟수를 알고 싶다.
 * 
 * time1 < time2
 * 23:59:595를 넘어 00:00:00으로 돌아가는 경우는 없다.
 * 초, 분, 시침이 모두 겹치면 1번만 울린다.
 * 
 * 
 * 시침과 분침은 1분에 1번씩 초침과 만난다. => 그리고?
 * 각도
 * 초침 = 1분에 360도, 1초에 360/60도 = 1초에 6도
 * 분침 = 1시간에 360도, 1분에 360/60도 = 6도, 1초에 360/60*60 = 1/10도
 * 시침 = 1시간에 30도, 1분에 30/60도 = 1/2도, 1초에 30/60*60 = 1/120도
 * 
 * 초침 = 6*s
 * 분침 = 6*m
 * 시침 = (h%12) * 30 + (1/2)*m + (1/120) * s
 * 
 * https://howudong.tistory.com/437
 */

const solution = (h1, m1, s1, h2, m2, s2) => {
  let answer = 0;

  const convertSeconds = (h, m, s) => (h * 60 * 60) + (m * 60) + s;
  const start_time = convertSeconds(h1, m1, s1);
  const end_time = convertSeconds(h2, m2, s2);
  // console.log(start_time, end_time)

  const getDegree = (time) => {
    const [h, m, s] = [Math.floor(time / 3600), Math.floor((time % 3600) / 60), ((time % 3600) % 60)];
    return [
      ((h % 12) * 30) + (m * 0.5) + (s * (1 / 120)),
      (m * 6) + (s * 0.1),
      (s * 6)
    ]
  }

	// 시침 겹침 여부 확인
  const isHourOverlap = (cur, next) => {
    const [cur_hour, cur_minute, cur_second] = cur;
    const [next_hour, next_minute, next_second] = next;

    if(cur_hour>cur_second && next_hour<=next_second) return true;
    
    // 354도에서 0도로 넘어갈 때 예외 케이스.
    if(cur_second === 354 && cur_hour > 354) return true;

    return false;
  }
	// 분침 겹침 여부 확인
  const isMinuteOverlap = (cur, next) => {
    const [cur_hour, cur_minute, cur_second] = cur;
    const [next_hour, next_minute, next_second] = next;
    if(cur_minute>cur_second && next_minute<=next_second) return true;
    
    // 354도에서 0도로 넘어갈 때 예외 케이스.
    if(cur_second === 354 && cur_minute > 354) return true;

    return false;
  }

  // 시작 시간부터 1초씩 올려가며 계산 (마지막 초는 포함X)
    // 마지막 초가 포함되면 마지막초+1까지 판단해버림
  for (let time = start_time; time < end_time; time++) {
    let cur = getDegree(time);
    let next = getDegree(time + 1);
    const hourOverlap = isHourOverlap(cur, next);
    const minuteOverlap = isMinuteOverlap(cur, next);

    // 초침이 분침과 시침 겹침이 발생했을 때
    if(hourOverlap && minuteOverlap){
      answer = next[0]===next[1] ? answer+1 : answer+2;
    }
    // 둘중 하나라도 겹치면 +1
    else if(hourOverlap || minuteOverlap)answer++;
  } // for

  // 시작시간에 대한 검사.
  // 0또는 12시에 시작한다면, 한 번 겹치고 시작하므로 +1
  if(start_time===0 || start_time===43200) answer++;

  return answer;  
}

const h1 = 0;
const m1 = 6;
const s1 = 1;
const h2 = 0;
const m2 = 6;
const s2 = 6;

console.log(solution(h1, m1, s1, h2, m2, s2));