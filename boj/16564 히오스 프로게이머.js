/**
 * 16564 히오스 프로게이머
 * 총 N개의 캐릭터가 있고 각 레벨은 Xi다.
 * 게임 끝까지 레벨을 최대 총합 K만큼 올릴 수 있다.
 * 팀 목표 레벨이 T=min(Xi)라 하면, 게임이 끝날떄 까지 성권이가 달성할 수 있는 최대 팀 목표 레벨T은?
 * 
 * N, K가 주어진다.
 * N개줄에 각 레벨이 주어진다.
 * 가능한 최대 팀 목표레벨 T 출력
 * 
 * 1. k를 1개씩 줄이면서 배열을 정렬 후 첫번째 거 증가시킨 후 최소값 출력 => 메모리초과
 * 2. 시간초과
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 10',
'10',
'20',
'15',
]
const [N, K] = input.shift().split(' ').map(Number)
const INFO = input.map(Number)

const solution = (n, k, info) =>{
  info.sort((a,b)=>a-b)
  let lt = Math.min(...info), rt = Math.max(...info)+k;
  let answer = 0;

  const calc = (info, mid) => {
    let result = 0;
    for(const level of info){
      if(level>=mid) break;
      result+=mid-level;
    }
    return result;
  }
  
  while(lt<=rt){
    const mid = Math.floor((lt+rt)/2)
    if(calc(info, mid)<=k){
      answer = mid;
      lt = mid+1;
    }else{
      rt = mid-1;
    }
  }
  return answer
}

console.log(solution(N, K, INFO))