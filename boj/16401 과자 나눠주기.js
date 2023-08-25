/**
 * 16401 과자 나눠주기
 * 최대한 긴과자를 나눠준다.
 * 모든 조카에게 같은 길이의 막대 과자를 나눠줄 꺼다.
 * M명 조카가 있고, N개 과자가 있을 때 1명에게 줄 수 있는 과자의 최대 길이를 구하라.
 * 
 * M과 N
 * 과자길이 N개가 주어진다.
 * 모든 조카에게 같은 길이의 막대과자를 나눠줄 수 없으면 0출력.
 * 
 * 과자는 여러조각으로 나눠질 수 있지만 하나로 합쳐질 수는 없다.
 * 
 * 과자 길이 배열 중 가장 긴 max값 찾고.
 * 과자 길이 최소값은 1이므로 lt=1, rt=max
 * mid를 구해 배열의 원소들을 mid로 나눠 cnt에 더해줌.
 */

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [M, N] = input.shift().split(' ').map(Number);
const INFO = input.shift().split(' ').map(Number);
const solution = (m, n, info) => {
  info.sort((a,b)=>a-b)
  const max = Math.max(...info)
  let lt = 1, rt = max;
  
  const check = (m, info, mid) =>{
    let cnt = 0;
    for(let i=0;i<info.length;i++){
      cnt += Math.floor(info[i]/mid)
    }
    if(cnt >= m) return true;
    return false;
  }

  let answer=0;
  while(lt<=rt){
    const mid = Math.floor((lt+rt)/2);
    if(check(m, info, mid)){
      lt = mid+1;
      answer = mid;
    }else{
      rt = mid-1;
    }
  }
  return answer;
}
console.log(solution(M, N, INFO));