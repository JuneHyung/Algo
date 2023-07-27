/**
 * 2525 오븐 시계
 * 오븐 시작되는 시와 분이 주어지고, 필요시간이 주어지면 종료 시와 분이 언젠지 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '23 48',
  '25',
]
const [HH, MM] = input.shift().split(' ').map(Number)
const TIME = Number(input.shift())

const solution = (HH, MM, TIME) => {
  const time = HH*60 + MM + TIME;
  let hour = Math.floor(time/60);
  const answer = `${hour>=24 ? hour-=24 : hour} ${time%60}`
  return answer
}
console.log(solution (HH, MM, TIME))