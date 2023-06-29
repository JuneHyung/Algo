/**
 * 14891 톱니바퀴
 * 톱니바퀴를 회전시키려하낟.
 * 회전은 시계방향 || 반시계방향
 * 옆의 톱니와 맞닿은 톱니 극이 다르면 B는 A가 회전한 방향과 반대방향으로 회전한다.
 * 최조 톱니바퀴상태를 구하는 프로그램
 * 
 * 각 줄에 톱니바퀴의 상태가 12시방향부터 차례로 주어진다.
 * N극은 0, S극은 1
 * 5째줄에 회전 횟수 K
 * 다음 K개 줄에 회전시킨 방법이 주어진다. [회전시킨 톱니번호, 방향]
 * 1이면 시계방향 / -1이면 반시계방향
 * 
 * 점수계산
 * 1번톱니 : 12시방향이 N이면 0 S면 1점
 * 2번톱니 : 12시방향이 N이면 0 S면 2점
 * 3번톱니 : 12시방향이 N이면 0 S면 4점
 * 4번톱니 : 12시방향이 N이면 0 S면 8점
 * 
 * 1. 현재 기준으로 왼쪽으로 쭉 돌리고, 오른쪽으로 쭉 돌리려했는데 rotate 구현실패.
 * 2. 정답참고
 * 현재 기어 기준으로 방문체크를 하여, rotate
 * rotate는 현재 기준 왼쪽과 오른쪽idx를 구해 범위안이고, 방문안한 기어인경우 rotate함수를 재귀함.
 * rotate함수는 현재 기어만 dir에 따라 돌린다.
 * 
 * 저녁에 다시풀기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

// const input = [
//   '10101111',
// '01111101',
// '11001110',
// '00000010',
// '2',
// '3 -1',
// '1 1',
// ]
const input = [
  '11111111',
'11111111',
'11111111',
'11111111',
'3',
'1 1',
'2 1',
'3 1',
]

const GEAR = input.slice(0,4).map(el=>el.split('').map(Number));
const K = Number(input[4]);
const INFO = input.slice(5).map(el=>el.split(' ').map(Number));
// INFO.unshift([0,0])

const solution = (gear, k, info) => {
  
  const check = Array.from({length:4},()=>false)

  // 시계 회전
  const rotateClock = (idx) =>{
    const target = gear[idx].pop();
    gear[idx] = [target, ...gear[idx]];
  }
  // 반시계회전
  const rotateReverseClock = (idx) =>{
    const target = gear[idx].shift();
    gear[idx] = [...gear[idx], target];
  }

  // 전체 회전
  const setRotation = (gearN, dir) =>{
    check[gearN] = true;
    const [prevGearN, nextGearN] = [gearN-1, gearN+1];

    // 기준 기어 왼쪽
    if(prevGearN>=0 && !check[prevGearN]){ // 범위안이고, 방문하지 않았다면,
      if(gear[prevGearN][2] !== gear[gearN][6]) { // 맞닿는 톱니가 다르면
        setRotation(prevGearN, dir*-1); // 반대방향
      }
    }
    // 기준 기어 오른쪽
    if(nextGearN<4 && !check[nextGearN]){ // 범위안이고, 방문하지 않았다면,
      if(gear[nextGearN][6] !== gear[gearN][2]) { // 맞닿는 톱니가 다르면
        setRotation(nextGearN, dir*-1); // 반대방향
      }
    }

    dir===1 ? rotateClock(gearN) : rotateReverseClock(gearN);
  }

  for(const [n, dir] of info){
    check.fill(false); // 상태초기화.
    setRotation(n-1, dir);
  }

  let answer = 0;
  let plus = 1;
  for(const gearInfo of gear){
    const first = gearInfo[0];
    if(first) answer += plus;
    plus*=2;
  }
  return answer;
}

console.log(solution(GEAR, K, INFO))