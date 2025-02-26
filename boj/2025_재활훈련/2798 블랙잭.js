/**
 * 2798 블랙잭
 * 카드의 합을 21이 넘지 않게 최대한 크게 만드는 게임이다.
 * 
 * 첫줄 카드 개수 N, M
 * 둘줄 카드에 쓰여진 수가 주어진다.
 * 합이 M을 넘지않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.
 * 
 * M을 넘지 않으면서 M에 가까운 카드 3장의 합 구하기
 */
// const fs = require('fs')
// const input  =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10 500',
'93 181 245 214 315 36 185 138 216 295',
]
const [N, M] = input[0].split(' ').map(Number);
const CARD_LIST = input[1].split(' ').map(Number);

const solution = (n, m, cardList) => {
  
  const getCombi = (arr, k) => {
    if(k===1) return arr.map(el=>[el]);
    const combiResult = [];
    arr.forEach((fixed, idx, origin)=>{
      const rest = origin.slice(idx+1);
      const combi = getCombi(rest, k-1);
      const attach = combi.map(el=>[fixed, ...el]);
      combiResult.push(...attach);
    })
    return combiResult;
  }

  const combi = getCombi(cardList, 3);
  const combiSumList = combi.map(el=>el.reduce((a,c)=>a+c,0));
  const filterList = combiSumList.filter(el=>el<=m).sort((a,b)=>a-b);
  const result = filterList[filterList.length-1];

  return result;
}

console.log(solution(N, M, CARD_LIST));