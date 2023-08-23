/**
 * 1689 겹치는 선분
 * 1차원 선분 N개있다.
 * 선분이 최대로 겹치는 부분의 겹친 선분개수를 구해보자.
 * 선분의 끝 점에서 겹치는 것은 겹치는 것으로 세지 않는다.
 * 
 * 선분의 시작과 끝이 주어지고, 최대로 많이 겹치는 선분들의 개수 출력
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '11',
  '1 2',
  '3 6',
  '7 8',
  '10 11',
  '13 16',
  '0 5',
  '5 6',
  '2 5',
  '6 10',
  '9 14',
  '12 15',
]
const N = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))
const solution = (n, info) => {
  const arr = Array.from({length: 2*n},()=>[0, 0]);

  for(let i=0;i<n;i++){
    const [st, ed] = info[i];
    arr[i] = [st, 1]
    arr[i+n] = [ed, -1]
  }
  arr.sort((a,b)=>{
    if(a[0]<b[0]) return -1;
    else if(a[0]>b[0]) return 1;
    else if(a[1]<b[1]) return -1;
    else if(a[1]>b[1]) return 1;
    else return 0;
  })

  let cnt = 0, answer = 0;
  for(const [pos, state] of arr){
    cnt += state;
    answer = Math.max(answer, cnt);
  }
  
  return answer;
}
console.log(solution(N, INFO))