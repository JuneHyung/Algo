/**
 * 30892 상어 키우기
 * N마리 상어가 각각 서로 같거나 다른 크기 몸집을 가지고 있다.
 * 자신의 크기보다 작은 상어는 모두 먹을 수 있고, 먹으면 그만큼 크기가 커진다.
 * 
 * 크기가 T인 샼이 N마리 상어들 정보를 모두 입수했다. 최대 K마리까지 적절한 순서로 잡아먹고
 * 최대한 크기를 키우려 한다.
 * 최대 얼마까지 커질 수 있을까?
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '5 3 10',
// '15 24 10 1 5',
// ]
const input = [
  '5 3 1',
'15 24 10 1 5',
]
const [N, K, T] = input[0].split(' ').map(Number);
const INFO = input[1].split(' ').map(Number);

const solution = (n, k, t, info) => {
  info.sort((a,b)=> b-a);

  let cnt = 0;
  let small = [];

  while(cnt<k){
    if(info[info.length-1] < t){ small.push(info.pop())}
    else{
      if(small.length>0){
        t+=small.pop();
        cnt+=1;
      }else break;
    }
  }

  return t;
}
console.log(solution(N, K, T, INFO))