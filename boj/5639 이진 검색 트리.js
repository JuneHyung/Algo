/**
 * 5639 이진 검색 트리
 * 트리를 전위순회한 결과가 주어졌을 떄 후위순회하 ㄴ결과를 한 줄 씩 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '50',
'30',
'24',
'5',
'28',
'45',
'98',
'52',
'60',
]
const INFO = input.map(Number);

class Node {
  constructor(v){
    this.value = v;
    this.left = null;
    this.right = null;
  }

  insert(v){
    if(v<this.value){
      if(this.left===null) this.left = new Node(v);
      else this.left.insert(v)
    }else{
      if(this.right===null) this.right = new Node(v);
      else this.right.insert(v);
    }
  }
}

const postOrder = (node, answer) => {
  if(node.left) postOrder(node.left, answer);
  if(node.right) postOrder(node.right, answer)
  answer.push(node.value);
}

const solution = (info) => {
  const tree = new Node(info[0]);
  for(let i=1;i<info.length;i++){
    tree.insert(info[i]);
  }
  
  const answer = [];
  postOrder(tree, answer);
  return answer.join('\n')
}

console.log(solution(INFO))

// 50 30 24 5 28 45 98 52 60
// 5 28 24 45 30 60 52 98 50