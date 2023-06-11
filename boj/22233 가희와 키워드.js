/**
 * 22233 가희와 키워드
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '2 2',
'gt26cw',
'1211train',
'kiwoom,lottegiant',
'kbo',
]

const [N, M] = input.shift().split(' ').map(Number)

const solution = (n, m, info) => {
  const inf = new Set(info.slice(0, n));
  const arr = info.slice(n).map(el=>el.split(','));
  const answer = [];

  for(const line of arr){
    for(let i=0;i<line.length;i++){
      const item = line[i];
      if(inf.has(item)) inf.delete(item);
    }
    answer.push(inf.size);
  }
  return answer.join('\n')
}

console.log(solution(N, M, input));