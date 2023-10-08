/**
 * 2304 창고 다각형
 * N개 기둥이 일렬로 세워져 있다.
 * 지붕은 수평 부분과 수직 부분으로 구서오디며 모두 연결되야한다.
 * 수평 부분은 반드시 어떤 기둥의 윗면과 닿아야 한다.
 * 수직 부분은 반드시 어떤 기둥의 옆면과 닿아야 한다.
 * 지붕 가장자리는 땅이 닿아야 한다.
 * 어떤 부분도 오목하게 들어가면 안된다.
 * 
 * 기둥 개수 N이 주어지고, 왼쪽면의 위치를 나타내는 정수 L과 높이 H가 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7',
'2 4',
'11 4',
'15 8',
'4 6',
'5 3',
'8 10',
'13 6',
]
const N = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, info) =>{
  let answer = 0;
  const poll = Array.from({length: 1001},()=>0);
  let max = 0, maxIdx = 0;
  // console.log(info)
  for(let i=0;i<n;i++){
    const [l, h] = info[i];
    poll[l] = h;

    if(max < h) {
      maxIdx = l;
      max=h;
    }
  }

  // 좌 영역
  let cur =0;
  for(let i=0;i<maxIdx+1;i++){
    cur = Math.max(cur, poll[i])
    answer += cur;
  }

  // 우 영역
  cur = 0;
  for(let i=1000;i>maxIdx;i--){
    cur = Math.max(cur, poll[i])
    answer += cur;
  }

  return answer;
}

console.log(solution(N, INFO))