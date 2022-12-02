/**
 * a = 금
 * b = 은
 * i번 도시에 금 g[i], 은 s[i] 
 * 편도이동시간 t[i] 최대 w[i]광물 운반이 가능.
 * 금, 은 동시에 운반가능
 * 새로운 도시를 건설하기 위해 금 a와 은 b를 전달할 수 있는 가장 빠른 시간을 리턴
 */

 function solution(a, b, g, s, w, t) {
  let start = 0;
  let end = 10e5 * 4 * 10e9; // 최대필요량(10e9) * 최소무게(1) * 최대시간(qoe5) * 금은 2번씩 왕복.
  let answer = end;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let gold = 0;
    let silver = 0;
    let add = 0;
    for (let i = 0; i < w.length; i++) {
      let curG = g[i];
      let curS = s[i];
      let curW = w[i];
      let curT = t[i];

      let moveCnt = Math.floor(mid / (curT * 2)); // 현 마을에서 옮길 수 있는 총 횟수. 왕복이라 curT*2로 mid를 나눈 값을 버림.
      if (mid % (curT * 2) >= t[i]) moveCnt++; // mid를 나눈 나머지가 curT보다 크거나 같다면 1번 편도가 가능하므로 moveCnt에 +1을 해줌.

      // moveCnt * curW = 총량
      // 각각 금과 은과 비교해 더 작은값을 더해준다.
      // add는 금+은
      const total = moveCnt * curW;
      gold += (curG < total) ? curG : total;
      silver += (curS < total) ? curS : total;
      add += (curG + curS < total) ? curG + curS : total;
    }

    // 각 목표치 보다 더큰지 비교하여 크면 end를 좁히고, 아니라면 start를 늘림.
    if (gold >= a && silver >= b && add >= a + b) {
      end = mid - 1;
      answer = Math.min(mid, answer);
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

const a = 10; // 금
const b = 10; // 은
const g = [100]; // i번도시에 g[i] 금
const s = [100]; // i번도시에 s[i] 은
const w = [7]; // 한번에 운반가능한 광물
const t = [10] // 편도 이동 시간;
console.log(solution(a, b, g, s, w, t));