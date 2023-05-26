/**
 * 2138 전구와 스위치
 * N개 스위치와 N개 전구가 있따.
 * 0또는 1로 꺼져있거나 켜져있다.
 * 스위치를 누르면, 좌우의 상태가 바뀐다.
 * 양 끝에는 전구가 있는 위치만 바뀐다.
 * 현재상태와 만들고자하는 상태가 주어질 때 그 상태를 만들기위해 최소 몇번을 눌러야 하는가?
 * 불가능하다면 -1을 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3',
  '000',
  '010'
]
const N = Number(input.shift());
const CUR = input.shift().split('').map(Number)
const TARGET = input.shift().split('').map(Number)

const solution = (n, cur ,target) => {
  // console.log(cur, target);
  const isSame = (a,b) =>{
    for(let i=0;i<n;i++){
      if(a[i]!==b[i]) return false;      
    }
    return true;
  }

  const toggleLight = (idx, tmp) =>{
    if(idx>0) tmp[idx-1] = tmp[idx-1]===1 ? 0 : 1;
    tmp[idx] = tmp[idx]===1 ? 0 : 1;
    if(idx<n-1) tmp[idx+1] = tmp[idx+1]===1 ? 0 : 1;
  }

  const getAnswer = (switchFlag) => {
    const tmp = [...cur]
    let min = Number.MAX_SAFE_INTEGER;
    let cnt = 0;
    
    if(switchFlag){
      tmp[0] = tmp[0]===1 ? 0 : 1;
      tmp[1] = tmp[1]===1 ? 0 : 1;
      cnt++;
    }
    // console.log('start')
    // console.log(tmp, cnt)

    for(let i=1;i<n;i++){
      if(tmp[i-1] !== target[i-1]){
        // console.log('after');
        // console.log(i, tmp[i-1], target[i-1])
        toggleLight(i, tmp);
        cnt++;
        // console.log(tmp, cnt)
      }
    }
    // console.log();
    if(isSame(tmp, target)) min = Math.min(min, cnt);
    return min;
  }

  // 처음에 누르고 시작하는거랑 누르지않고 시작.
  const startOn = getAnswer(true);
  const startOff = getAnswer(false);
  console.log(startOn, startOff)
  const answer = Math.min(startOn, startOff)===Number.MAX_SAFE_INTEGER ? -1 : Math.min(startOn, startOff);
  return answer;
}

console.log(solution(N, CUR, TARGET));