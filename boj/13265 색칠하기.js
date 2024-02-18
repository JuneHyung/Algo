/**
 * 13265 색칠하기
 * 여러 동그라미와 2개를 연결하는 직선들 만으로 그림을 그리고, 연결된 두 동그라미는 서로 색이 다르게 되도록 색을 칠하고자 한다.
 * 색칠하는데 필요한 최소색의 개수를 구하는 문제sms어렵기 때문에 2가지 색상으로 색칠이 가능한지 여부만 알고 시펑 한다.
 * 동그라미들의 번호와 서로 연결된 직선에 대한 정보가 주어졌을 때 가능여부 체크
 * 
 * 테스트케이스 T
 * 동그라미수 n 직선개수 m
 * m줄에 걸쳐 동그라미연결된 직선에 대한 정보가 주어진다.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'4 5',
'1 2',
'2 3',
'3 4',
'1 3',
'2 4',
'6 9',
'1 4',
'1 5',
'1 6',
'2 4',
'2 5',
'2 6',
'3 4',
'3 5',
'3 6',
'8 8',
'1 2',
'2 3',
'3 4',
'4 5',
'5 6',
'6 7',
'7 8',
'8 1',
]
const T = Number(input.shift());
let idx = 0;

const solution = (n, m, info) => {
  // console.log(n, m, info)
  console.log(info)
  const graph =Array.from({length: n+1},()=>[]);
  for(const [a,b] of info){
    graph[a].push(b)
    graph[b].push(a)
  }

  const color = Array.from({length: n+1},()=>0);

  const dfs = (L) => {
    if(!isPossible) return;
    
    for(const next of graph[L]){
      if(color[next]===0){
        color[next] = 3-color[L];
        dfs(next);
      }
      if(color[next] === color[L]){
        isPossible = false;
        return;
      }
    }
  }
  
  let isPossible = true;

  for(let i = 1; i<=n;i++){
    if(!isPossible) break;
    if(color[i]===0){
      color[i] = 1;
      dfs(i);
    }
  }

  return isPossible ? 'possible' : 'impossible'
}

for(let t=0;t<T;t++){
  const [N, M] = input[idx].split(' ').map(Number);
  idx+=1;
  const INFO = input.slice(idx, idx+M).map(el=>el.split(' ').map(Number))
  console.log(solution(N, M, INFO));
  idx+=M;
}