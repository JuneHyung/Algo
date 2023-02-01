/**
 * 1107 리모컨
 * 현재 채널 100
 * N : 이동하려는 채널
 * 둘째 줄 : 고장난 버튼 개수
 * 셋째 줄 : 고장난 버튼
 * 같은 버튼이 여러번 주어지지 않는다.
 * 
 * 0에서 -하면 채널 안변함.
 * 채널은 무한대까지 있다.
 * 버튼을 최소 몇번눌러야하나.
 * 
 * 1. 런타임에러
 * list가 없는경우 ,10인경우 예외처리
 * 2. 
 */


// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '101',
  '0',

]

const T = Number(input.shift());
const N = Number(input.shift());
const arr = N === 0 ? [] : input.shift().split(' ').map(Number);

function checkBroken(num, brokenList) {
  while (true) {
    if (brokenList.includes(num % 10)) return false;
    else num = Math.floor(num / 10)
    if (num === 0) break;
  }
  return true;
}

const solution = (target, n, list) => {
  console.log(list);
  if (target === 100) return 0;
  if (list.length === 0) return Math.min(Math.abs(target - 100), target.toString().length)
  if (list.length === 10) return Math.abs(target - 100);
  let dist = Math.abs(target - 100);
  let min = Infinity;



  for (let i = 0; i <= 999999; i++) {
    if (checkBroken(i, list)) {
      let tmp = i.toString().length + Math.abs(target - i);
      if (tmp < min) min = tmp;
      else if (tmp > min) break;
    }
  }
  const answer = Math.min(dist, min);
  return answer;
}
console.log(solution(T, N, arr))