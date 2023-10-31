/**
 * 2805 나무 자르기
 * 나무 M미터가 필요하다.
 * 절단기에 높이 H지정해야한다.
 * 높이 지정하면 톱날이 땅에서 H미터 위로 올라간다. H보다 큰나무는 잘릴 것이고, 아니면 잘리지 않을 것.
 * M미터의 나무를 집에 가지겨가기 위해 설정할 수 있는 높이의 최대값
 * 
 * 나무수 N과 나무길이 M이주어진다.
 * 
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2 10',
'5 5',
]
const [N, M] = input.shift().split(' ').map(Number);
const INFO = input.shift().split(' ').map(Number);

const solution = (n, m, info) => {
  info.sort((a,b)=>a-b);
  let answer = 0;
  let lt = 0;
  let rt = info[n-1];

  let mid = 0;
  while(lt<=rt){
    let sum = 0;
    mid = Math.floor((lt+rt)/2);
    for(let x of info){
      const rest = x-mid;
      if(rest>0) sum += rest;
    }

    if(sum >= m){
      if(mid>answer) answer = mid;
      lt = mid+1;
    }else{
      rt = mid-1;
    }
  }
  return answer;
}

console.log(solution(N, M, INFO))