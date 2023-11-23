/**
 * 1717 집합의 표현
 * 초기 n+1개의 집합 {0}, {1}, {2}, ... {n}이 있다. 두 원소가 같은 집합에 포함되어 있는지를 확인하는 연산을 수행하려 한다.
 * 집합을 표현하는 프로그램 작성.
 * 합집합은 0 a b형태. a가 포함되어있는 집합과 b가포함된 집합을 합친다는 뜻.
 * 두 원소가 같은집합에 포함되어 있는지 확인하는 연산을 1 a b형태로 주어진다.
 * 1로 시작하는 입력에 대해 a와 b가 같은 집합이면 'yes, 아니면 no 출력.
 * 
 * fs로 풀면 EACCESS 나니 readline으로 풀기.
 */
const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout,
});
const input = [];
rl.on('line', function (line){
  input.push(line);
}).on('close', function(){
  solution(input);
  process.exit();
})

const solution = (input) =>{
  const [n, m] = input.shift().split(' ').map(Number)
  const info = input.map(el=>el.split(' ').map(Number))
  const parents = Array.from({length:n+1},()=>-1)

  function find(x) {
    if(parents[x] < 0) return x;
    parents[x] = find(parents[x])
    return parents[x];
  }

  function union(x, y){
    x = find(x);
    y = find(y);
    if(x!==y) parents[x] = y;
  }
  const answer = [];

  for(let i=0;i<m;i++){
    const [key, a, b] = info[i];
    if(key===0) union(a,b)
    else answer.push(find(a) === find(b) ? 'yes' : 'no')
  }

  console.log(answer.join('\n'))
}