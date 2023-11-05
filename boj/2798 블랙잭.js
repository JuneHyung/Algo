/**
 * 2798 블랙잭
 * 합이 21을 넘지 않느느 한도 내에서 카드의 합을 최대한 크게 만드는 게임.
 * N장의 카드를 모두 숫자가 보이도록 바닥에 놓고 딜러는 숫자 M을 외친다.
 * 
 * 플레이어는 N장카드 중 3장카드를 골라 합이 M을 넘지않으면서 최대한 가깝게 만들어야 한다.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 21',
'5 6 7 8 9',
]
const [N, M] = input.shift().split(' ').map(Number)
const ARR = input.shift().split(' ').map(Number);

const solution = (n, m, arr) => {
  arr.sort((a,b)=>b-a);

  let cnt = 0;
  let sum = 0;
  const getCombi = (arr, k) =>{
    if(k===1) return arr.map(el=>[el])
    const result = []
    arr.forEach((fixed, idx, origin)=> {
      const rest = origin.slice(idx+1);
      const combi = getCombi(rest, k-1);
      const attach = combi.map(el=>[fixed, ...el]);
      result.push(...attach);
    })
    return result;
  }

  const combi = getCombi(arr, 3);
  const sumArr = combi.map(list=> list.reduce((a,c)=> a+c, 0)).filter(el=> el<=m).sort((a,b)=>b-a)
  return sumArr[0];
}

console.log(solution(N, M, ARR));