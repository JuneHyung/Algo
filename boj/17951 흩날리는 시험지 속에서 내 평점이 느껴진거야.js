/**
 * 17951 흩날리는 시험지 속에서 내 평점이 느껴진거야
 * 현수는 다풀고 강풍에 시험지가 날아가버린 시험지를 줍는 동안 남는 시간을 다썻다.
 * 조교의 편의를 위해 시험지를 반드시 순서대로 제출해야하는 규칙이 있다.
 * 시험지를 현재 순서 그대로 K개 그룹으로 나눈 뒤 각 그룹에서 맞은 문제 개수의 합을 구해 그 중 최소값을 시험점수로 주기로 하였다.
 * 현수가 이번 시험에서 받을 수 있는 최대 점수를 게산.
 * 모르는 문제는 아예 풀지 않아 푼문제는 모두 맞았다고 생각.
 * 
 * 시험지 수 N, 시험지 나눌 그룹수 K
 * 시험지마다 맞은 문제 개수 x
 * 
 * 현수가 받을 수 있는 최대 점수를 출력.
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '8 2',
'12 7 19 20 17 14 9 10',
]
const [N, K] = input.shift().split(' ').map(Number);
const INFO = input.shift().split(' ').map(Number);

const solution = (n, k, info) => {
  console.log(n, k, info)
  
  let lt = 0;
  let rt = info.reduce((a, c)=>a+c,0);

  console.log(lt, rt)
  while(lt<=rt){
    const mid = Math.floor((lt+rt)/2);
    let cnt = 1; 
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let i=0;i<n;i++){
      sum+=info[i];
      if(sum>=mid){
        cnt++;
        min = Math.min(sum, min);
        sum=0;
      }
    }

    if(cnt > k) lt = mid+1;
    else rt = mid-1;
  }
  return rt;
}

console.log(solution(N, K, INFO))
