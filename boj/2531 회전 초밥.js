/**
 * 2531 회전초밥
 * 임의 한 위치부터 k개 연속해서 먹을 경우 할인된 정액 가격으로 제공.
 * 초밥 종류 하나가 주어지면 위의 규칙대로 먹을때 무료로 하나 제공.
 * 
 * 회전초밥 접시수 N
 * 초밥 가지수 d
 * 연속해서 먹는 접시 수 k
 * 쿠폰번호 c
 * 가 주어진다.
 * N개 줄에 회전방향을 따라갈 떄 초밥의 종류를 나타내는 정보가 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8 30 4 30',
'7',
'9',
'7',
'30',
'2',
'7',
'9',
'25',
]

const [N, D, K, C] = input.shift().split(' ').map(Number);
const INFO = input.map(Number)
const solution = (n, d, k, c, info) => {
  let max = 0;
  let cnt = 0;
  const sushi = info.slice(0, k).reduce((a,v)=>{
    if(a[v]) a[v]++;
    else{
      a[v] = 1;
      cnt++;
      max++;
    }
    return a;
  }, {})

  let i = 0;
  let j = k-1;

  while( i<n){
    if(sushi[info[i]]===1) cnt--;
    sushi[info[i]]--;

    i++;
    j++;

    if(j===n) j=0;
    if(sushi[info[j]]) sushi[info[j]]++;
    else{ sushi[info[j]] = 1; cnt++;}

    max = Math.max(max, cnt + !sushi[c]);
  }

  return max;
}

console.log(solution(N, D, K, C, INFO))