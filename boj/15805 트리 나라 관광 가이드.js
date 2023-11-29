/**
 * 15805 트리 나라 관광 가이드
 * 경로가 주어질 때 도시개수와 부모를 리턴
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '26',
'0 1 2 3 2 5 2 1 6 1 4 1 0 7 0 8 9 10 9 11 9 8 14 8 12 13',
]
const N = Number(input.shift())
const ROOTS = input.shift().split(' ').map(Number)

const solution = (n, roots) => {
  const cnt = new Set(roots).size;
  const tree = {};
  const visited = Array.from({length:cnt},()=>false);
  visited[roots[0]] = true;
  for(let i=0;i<cnt;i++) tree[i]=[];

  for(let i=1;i<n;i++){
    const cur = roots[i];
    const prev = roots[i-1];
    if(!visited[cur]){
      tree[prev].push(cur)
      visited[cur] = true;
    }
  }
  // console.log(tree)
  const answer = Array.from({length:cnt},()=>-1);
  const entries = Object.entries(tree);
  for(let i=0;i<cnt;i++){
    const [cur, values] = entries[i];
    for(let j=0;j<values.length;j++){
      const idx = values[j];
      answer[idx] = cur;
    }
  }

  return [cnt, answer.join(' ')].join('\n');
}

console.log(solution(N, ROOTS));