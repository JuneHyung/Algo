// 광고 삽입
// play_time : 동영상 전체 재생시간 길이
// adv_time : 공익광고의 재생시간 길이
// logs : 재생구간정보

const timeToSec = (time) => {
  const [HH, MM, SS] = time.split(':');
  const result = HH * 3600 + MM * 60 + SS * 1;
  return result;
}

const secToTime = (time) => {
  let HH = Math.floor(time / 3600);
  let MM = Math.floor(time / 60) % 60;
  let SS = time % 60;

  HH = HH > 9 ? HH : `0${HH}`;
  MM = MM > 9 ? MM : `0${MM}`;
  SS = SS > 9 ? SS : `0${SS}`;
  return `${HH}:${MM}:${SS}`;
}
function solution(play_time, adv_time, logs) {
  const pt = timeToSec(play_time);
  const at = timeToSec(adv_time);

  const times = Array.from({ length: pt }, () => 0);

  for (let i = 0; i < logs.length; i++) {
    const log = logs[i];
    const [start, end] = log.split('-');
    const st = timeToSec(start)
    const et = timeToSec(end)

    times[st]++;
    times[et]--;
  }

  let sum = times[at - 1];
  let idx = 0;
  for (let i = 1; i <= pt; i++) {
    times[i] += times[i - 1]
  }
  for (let i = 1; i <= pt; i++) {
    times[i] += times[i - 1]
  }

  for (let i = at - 1; i < pt; i++) {
    if (sum < times[i] - times[i - at]) {
      sum = times[i] - times[i - at];
      idx = i - at + 1;
    }
  }

  const answer = secToTime(idx);
  return answer;
}

const play_time = "02:03:55";
const adv_time = "00:14:15";
const logs = ["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"];
console.log(solution(play_time, adv_time, logs))