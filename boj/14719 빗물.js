/**
 * 14719 빗물
 * 2차원 세계에 블록이 쌓여있고, 비가오면 블록사이에 빗물이 고인다.
 * 고이는 빗물의 총량은?
 */
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 4',
  '3 0 1 4',
]
const [H, W] = input.shift().split(' ').map(Number)
const INFO = input.shift().split(' ').map(Number)

const solution = (h, w, info) => {
  let answer = 0;
  for (let i = 1; i < info.length; i++) {
    let lt = 0;
    let rt = 0;
    for (let j = i; j >= 0; j--) lt = Math.max(lt, info[j])
    for (let j = i; j < info.length; j++) rt = Math.max(rt, info[j])
    const min = Math.min(lt, rt)
    const result = min - info[i];
    answer += result;
  }
  return answer;
}

console.log(solution(H, W, INFO))
