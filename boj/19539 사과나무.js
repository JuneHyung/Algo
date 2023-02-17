/**
 * 19539 사과나무
 * 1만큼 성장시키는 물뿌리개와 2만큼 성장시키는 물뿌리개를 동시에 사용
 * 원하는 높이를 만들 수 있다면 YES 아니면 NO출력
 * 
 * 두개가 동시에 사용 => 사용횟수가 동일하다.
 * 어떤 순서 어떤 물뿌리개는 생각말고 동일한 사용횟수가 나오는지 확인.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input =[
  '2',
'4 3',
]
const N = Number(input.shift())
const TREE = input.shift().split(' ').map(Number);

const solution = (n, tree) => {
  let growOne = 0, growTwo = 0;
  for(let i=0;i<n;i++){
    if(tree[i] % 2!==0) growOne++;
    growTwo += Math.floor(tree[i]/2);
  }
  while(true){
    if(growOne===growTwo) return "YES";
    growTwo-=1;
    growOne+=2;
    if(growTwo < growOne) return "NO";
  }
}

console.log(solution(N, TREE));