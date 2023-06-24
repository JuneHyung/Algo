/**
 * 9080 PC방 요금
 * 일반 요금으로 시간당 1000원씩
 * 야간 정액을 끊으면 5000원만 내고 20시부터 8시까지 이용 가능
 * 1시간에 1분이라도 넘으면 새로운 1시간에 대한 요금 부과.
 * 일반 요금 쓰다 야간 정액쓰면, 일반 요금을 미리 계산을 하고 야간 정액 가능.
 *
 * 게임을 시작하는 시간과 게임을 하는 시간을 입력 받으면, 현성이가 최소로 지불해야 하는 PC방 요금을 계산하는 프로그램을 작성
 * 한 번 게임이 시작하면, 게임 하는 시간 동안 계속 게임을 한다.
 *
 * HH:MM이 주어지고,  게임하는 시간 D가 분으로 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ["4", "14:30 180", "19:28 242", "23:25 580", "21:10 765"];
const T = Number(input.shift());

const convertHourToMinute = (time) => {
  let result = 0;
  const [HH, MM] = time.split(":").map(Number);
  result += HH * 60 + MM;
  return result;
};

const HOUR_22_MINUTE = 60 * 22;
const HOUR_03_MINUTE = 60 * 3;
const HOUR_08_MINUTE = 60 * 8;
const HOUR_05_MINUTE = 60 * 5;
const HOUR_24_MINUTE = 60 * 24;
const solution = (info) => {
  let [startTime, D] = info;
  let stTime = convertHourToMinute(startTime);
  let pay = 0;

  // 1.현재 시간이 22~3시면서 남은 플레이 시간이 5이상
  // 8시까지 플레이시간 소진 후 5천원 추가.

  // 2. 그 외
  // 2-1. 현재 시간이 3~8시인 경우
  // 남은 플레이 시간이 5이상이여도 야간 정액을 이용할 수 있는게 5미만이라 시간당 1000씩 계산

  // 2-2. 현재 시간이 8~22시인 경우
  // 야간 정액을 이용할 수 없기 때문에 시간당 1000 계산
  // 시간계산 마다 1439분이 넘는 경우 0부터 시작하도록 초기화.

  // 시간 계산
  // 1시간 씩 계산하며, 시작시간을 증가, 활동시간을 감소시키며 갱신
  // stTime += 60  , D -= 60
  while (D > 0) {
    if ((stTime >= HOUR_22_MINUTE || stTime <= HOUR_03_MINUTE) && D >= HOUR_05_MINUTE) { // 1.
      while (stTime >= HOUR_22_MINUTE || stTime < HOUR_08_MINUTE) {
        const tmp = HOUR_08_MINUTE - stTime;
        if (tmp >= 0 && tmp <= 60) {
          D -= tmp;
          stTime = HOUR_08_MINUTE;
        } else {
          stTime += 60;
          D -= 60;
          stTime %= HOUR_24_MINUTE; // 하루 지나는 경우 초기화 작업
        }
      }
      pay += 5000;
    } else {
      // 그 외 - 주간시간일 때 : 3~22시 PLAY시간이 5보다 작은 경우
      stTime += 60;
      D -= 60;
      pay += 1000;
    }

    stTime %= HOUR_24_MINUTE; // 하루 지나는 경우 초기화 작업.
  }

  return pay;
};

for (let t = 0; t < T; t++) {
  const INFO = input[t].split(" ");
  console.log(solution(INFO));
}
