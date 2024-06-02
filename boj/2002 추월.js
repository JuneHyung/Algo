/**
 * 2002 추월
 * 대근이는 차가 터널에 들어가는 순서대로, 영식이는 차가 나오는 순서대로 차량번호를  적어둠.
 * N개차량이 지나간 후 목록을 보고, 추월했을 것으로 여겨지는 차들이 몇대 있는지 알아보자.
 * 같은 차량 번호가 2번 이상 주어지지는 않는다.
 * 반드시 추월했을 거같은 차가 몇 댄지 세기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'ZG431SN',
'ZG5080K',
'ST123D',
'ZG206A',
'ZG206A',
'ZG431SN',
'ZG5080K',
'ST123D',
]
const N = Number(input[0])
const ENTRANCE = input.slice(1, N+1)
const EXIT = input.slice(N+1)

const solution = (n, entrance, exit) => {
  const visited = Array.from({length: n},()=>false);
  const car = new Map();

  for(let i=0;i<n;i++){
    car.set(entrance[i], i)
  }


  let cur = 0; // 현재 통과해야할 차량 번호
  let cnt = 0;


  for(let i=0; i<n; i++){
    const target = car.get(exit[i]);

    if(target > cur) {
      let isPass = false;
      for(let j=0;j<target;j++){
        if(!visited[j]){
          isPass = true;
          cnt++;
          break;
        }
      }
      if(!isPass) cur = target+1;
    }
    visited[target] = true;

  }

  return cnt;

}

console.log(solution(N, ENTRANCE, EXIT))