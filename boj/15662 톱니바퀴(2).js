/**
 * 15662 톱니바퀴(2)
 * 톱니바퀴를 회전시키려한다.
 * 톱니바퀴 T개가 일열로 있다.
 * K번 회전 시킬 거다.
 * 맞닿는 극이 다르면 반대방향으로 회전한다.
 * 초기상태가 주어졌을 때 최종적으로 12시방향에 S극이 몇개있는지 구하기.
 * 
 * T는 1~1000
 * 12시방향부터 시계방향으로 주어진다.
 * N극은0, S극은 1
 * 
 * 회전횟수 K
 * 회전정보가 주어진다.
 * 방향이 1이면 시계, -1이면 반시계방향
 * 
 * 12시방향이 s극인 톱니갯수세기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'10101111',
'01111101',
'11001110',
'00000010',
'2',
'3 -1',
'1 1',
]

const T = Number(input.shift())
const GEAR = input.splice(0, T).map(el=>el.split('').map(Number));
const K = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number));


const solution = (t, gear, k, info) =>{
  const check = Array.from({length:t},()=>false)

  const rotateClock = (idx) =>{
    const last = gear[idx].pop()
    gear[idx] = [last, ...gear[idx]]
  }
  const rotateReverseClock = (idx) =>{
    const first = gear[idx].shift()
    gear[idx] = [...gear[idx], first]
  }
  

  const setRotate = (gearN, dir) =>{
    check[gearN] = true;
    const [prevGear, nextGear] = [gearN-1, gearN+1]
    if(prevGear>=0 && !check[prevGear]){
      if(gear[prevGear][2] !== gear[gearN][6]) {
        setRotate(prevGear, dir*-1)
      }
    }
    if(nextGear<t && !check[nextGear]){
      if(gear[nextGear][6]!==gear[gearN][2]){
        setRotate(nextGear, dir*-1)
      }
    }

    dir===1 ? rotateClock(gearN) : rotateReverseClock(gearN);
  }
  
  for(const [gearN, dir] of info){
    check.fill(false);
    setRotate(gearN-1, dir);
  }

  
  const answer = gear.map(gearInfo => gearInfo[0]).filter(twelveItem=>twelveItem===1).length;
  return answer;
}

console.log(solution(T, GEAR, K, INFO))