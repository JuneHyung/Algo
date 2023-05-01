/**
 * 9934 완전 이진 트리
 * 도시는 깊이가 K인 완전 이진트리를 이루고 있다.
 * 다음과 같은 순서로 도시를 방문했다.
 * 1. 가장 처음 트리의 루트에 있는 빌딩 앞에 서있다.
 * 2. 현재 빌딩의 왼쪽 자식에 있는 빌딩에 아직 들어가지 않았다면, 왼쪽 자식으로 이동한다.
 * 3. 현재 있는 노드가 왼쪽 자식을 가지고 있지 않거나 왼쪽 자식에 있는 빌딩을 이미 들어갔다면, 현재 노드에 있는 빌딩을 들어가고 종이에 번호를 적는다.
 * 4. 현재 빌딩을 이미 들어갔다 온 상태이고, 오른쪽 자식을 가지고 있는 경우에는 오른쪽 자식으로 이동한다.
 * 5. 현재 빌딩과 왼쪽, 오른쪽 자식에 있는 빌딩을 모두 방문했다면, 부모 노드로 이동한다.
 * 
 * 첫 줄에 K
 * 둘 줄에 빌딩의 번호가 들어간 순서대로 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'1 6 4 3 5 2 7',
]
const K = Number(input.shift())
const INFO = input.shift().split(' ').map(Number)

const makeTree = (k, info, tree, depth) => {
  if(info.length===1){
    tree[depth].push(info[0])
    return;
  }
  const mid = Math.floor(info.length/2);
  tree[depth].push(info[mid]);

  const leftArr = info.slice(0, mid);
  const rightArr = info.slice(mid+1);
  makeTree(k, leftArr, tree, depth+1);
  makeTree(k, rightArr, tree, depth+1);
  return tree;
}
const solution = (k, info) =>{
  const tree = Array.from({length:k},()=>[]);
  const answer = makeTree(k, info, tree, 0)
  return answer.map(el=>el.join(' ')).join('\n')
}

console.log(solution(K, INFO))