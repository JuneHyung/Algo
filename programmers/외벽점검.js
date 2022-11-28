/**
 * 외벽점검
 * 
 * 방향을 하나로 고정하고 주어진 n값을 초과하는 경우 n을 더해주어 순차 접근하도록 구성.
 * 1. 취약지점 접근 순서
 * 1->5->6->10
 * 5->6->10->13
 * 6->10->13->17
 * 10->13->17->18
 * [1, 5, 6, 10]이 주어졌을때 각 위치를 시작점으로 삼아 도착지점의 위치값을 포함하는 배열 구하기
 * [1, 5, 6, 10, 13, 17, 18]
 * 
 * 2. 순열
 * 인원은 최대 8명으로 제한되있다. => 각 인원이 접근할 수 있는 범위가 dist로 주어지는데 이 길이 최대값이 8
 * dist를 가지고 모든 경우의 수를 구성해야함.
 * 순열의 이유 : 2명(1, 4) 투입될때 [1,4] 또는 [4,1]따라 같은 경로라도 불가능한 경우가 생김.
 * 8P1 ~ 8P8
 * 
 * 3. 최소 투입 인원 계산
 * 가장 멀리 갈 수 있는 인원부터 투입시키기 위해 내림차순 정려ㅕㄹ
 * 1. weak만큼 돌면서 각  경로 추출
 * 2. 각 경로 첫 지점과 현재 투입 인원의 작업 범위를 더한 값이 해당 인원의 커버가능한 거리
 */
const getPermutation = (arr, n) =>{
  if(n===1) return arr.map(el=>[el]);
  const result = [];

  arr.forEach((fixed, idx, origin)=>{
    const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
    const perms = getPermutation(rest, n-1);
    const attached = perms.map(perm=>[fixed, ...perm]);
    result.push(...attached);
  });
  return result;
}

function solution(n, weak, dist) {
  const len = weak.length;
  const linear_weak = Array.from({length: len*2 - 1}, ()=>0);
  for(let i=0;i<len*2-1;i++){
    linear_weak[i] = i<len ? weak[i] : weak[i-len] + n;
  }

  dist.sort((a,b)=>b-a);

  for(let i=1;i<=dist.length; i++){
    const permutation = getPermutation(dist, i);
    
    for(const permu of permutation){
      for(let j=0;j<len;j++){
        let line = linear_weak.slice(j, len+j);
        for(const p of permu){
          const coverage = line[0] + p;
          line = line.filter(e=> e>coverage);
          if(!line.length) return i;
        }
      }
    }
  }
  return -1;
}

const n = 12;
const weak = [1, 5, 6, 10];
const dist = [1, 2, 3, 4];

console.log(solution(n, weak, dist));