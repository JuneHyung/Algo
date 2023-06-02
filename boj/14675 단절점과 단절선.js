/**
 * 14675 단절점과 단절선
 * 단절점 : 해당 점을 제거하였을 때 그 정점이 포함된 그래프가 2개이상으로 나뉘는 경우
 * 단절선 : 간선을 제거했을 때 간선이 포함된 그래프가 2개이상으로 나뉘는 경우
 * 
 * 
 * t가 1이면 k번이 단절점인지
 * t가 2이면 k번이 단절선인지
 * 체크하여 리턴.
 * 
 * 정점의 간선이 2개 이상이면 단절점.
 * cycle이 없으면 해당 간선이 단절선
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '5',
'1 2',
'2 3',
'3 4',
'4 5',
'4',
'1 1',
'1 2',
'2 1',
'2 2',
]
const N = Number(input[0]);
const TREEINFO = input.slice(1, N);
const INFO = input.slice(N + 1);

const solution = (N, treeInfo, info) => {
  const tree = Array.from(Array(N + 1), () => new Array());
  treeInfo.forEach((v) => {
    const [n1, n2] = v.split(' ').map(Number);
    tree[n1].push(n2);
    tree[n2].push(n1);
  });
  let answer = '';
  info.forEach((item) => {
    const [t, k] = item.split(' ').map(Number);
    if (t === 1) {
      answer += tree[k].length > 1 ? 'yes\n' : 'no\n';
    } else if (t === 2) {
      answer += 'yes\n';
    }
  });
  return answer;
};

console.log(solution(N, TREEINFO, INFO));