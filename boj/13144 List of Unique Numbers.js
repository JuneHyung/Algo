/**
 * 13144 List of Unique Number
 * 길이가 n인 수열이 주어졌을 때 연속한 1개 이상의 수를 뽑았을 떄 같은 수가 여러번 등장하지 않는 경우의 수 구하기
 * 
 * 1. 시간초과
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
'5',
'1 2 3 1 2'
]
const N = Number(input[0])
const LIST = input[1].split(' ').map(Number)
const solution = (n, list) => {
  const cnt = {}
  for(let i=0;i<=100001;i++) cnt[i] = 0;

  // console.log(cnt)
  let lt = 0;
  let rt = 0;
  let answer = 0;

  while(lt<n){
    while(rt<n && cnt[list[rt]]===0){
      cnt[list[rt]] += 1;
      rt++;
    }

    answer += rt - lt;
    cnt[list[lt]] -= 1;
    lt++;
  }
  
  
  return answer;
}
console.log(solution(N, LIST));
