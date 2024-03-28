/**
 * 주차 요금 계산
 * 기본시간 180, 기본요금 5000, 단위 10분, 단위요금 600
 *
 * 출차 내역이 없으면 23:59에 출차.
 * 입,출차 내역을 바탕으로 요금 계산
 *
 * 기본 시간 이하라면, 기본 요금 청구
 * 기본 시간 초과라면, 기본 요금에 더해서 초과한 시간에 대해 단위 시간마다 단위요금 청구
 *
 * fees = [기본 시간, 기본 요금, 단위 시간, 단위 요금];
 * records = [시간, 차량번호, 출입]
 *
 * 잘못된 시간은 주어지지 않음.
 * 차량번호는 0~9로 이루어진 4자리.
 * 입차된 차량이 다음날 출차되는 경우는 없음.
 * 같은 차량번호가 2번이상 나타나지 않음.
 * 마지막 시간에 입차되는 경우는 없음.
 */

const solution = (fees, records) => {
  const [basicTime, basicCost, addTime, addCost] = fees;
  const storage = {};

  // 기록 시간 나누기.
  const splitted = records.map((el) => el.split(" "));

  // HH:MM -> 분으로 변환.
  const convertStringToMinutes = (time) => {
    const [HH, MM] = time.split(":").map(Number);
    return HH * 60 + MM;
  };

  // 분으로 돈 계산
  const convertMinutesToMoney = (time) => {
    if (time <= basicTime) return basicCost;
    else {
      return basicCost + Math.ceil((time - basicTime) / addTime) * addCost;
    }
  };

  // storage 채우기 { 차번호 : [[status, minuteTime]] }
  for (const [time, car, status] of splitted) {
    if (storage.hasOwnProperty(car)) {
      // 차 번호 등록되있을 떄
      const info = storage[car];
      if (status === "IN") info.push(["IN", convertStringToMinutes(time)]);
      if (status === "OUT") info.push(["OUT", convertStringToMinutes(time)]);
      storage[car] = info;
    } else {
      const info = [];
      if (status === "IN") info.push(["IN", convertStringToMinutes(time)]);
      if (status === "OUT") info.push(["OUT", convertStringToMinutes(time)]);
      storage[car] = info;
    }
  }

  // {
  //   '5961': [ [ 'IN', 334 ], [ 'OUT', 479 ], [ 'IN', 1379 ], [ 'OUT', 1380 ] ],
  //   '0000': [ [ 'IN', 360 ], [ 'OUT', 394 ], [ 'IN', 1139 ] ],
  //   '0148': [ [ 'IN', 479 ], [ 'OUT', 1149 ] ]
  // }
  console.log(storage);

  const answer = [];

  // key오름차순으로 정렬하여 value만 추출
  const values = Object.entries(storage)
    .sort((a, b) => a[0] - b[0])
    .map((el) => el[1]);

  for (const record of values) {
    let inTime = 0;
    let outTime = 1439;
    let totalTime = 0;
    for (let i = 0; i < record.length; i++) {
      const [status, time] = record[i];

      if (status === "IN") inTime = time;
      if (status === "OUT") outTime = time;

      if (i % 2 === 0 && i === record.length - 1) totalTime += outTime - inTime; // 마지막에 IN으로 끝나는 경우
      if (i !== 0 && i % 2 !== 0) { // OUT일 떄 계산 후 시간 초기화
        totalTime += outTime - inTime;
        inTime = 0;
        outTime = 1439;
      }
    }

    answer.push(convertMinutesToMoney(totalTime));
  }
  return answer;
};

const fees = [180, 5000, 10, 600];
const records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];

console.log(solution(fees, records));
