/**
 * 10816 숫자 카드2
 * 숫자 카드 N개있고, 정수M개가 주어짐. 이 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지 구하시오.
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10',
'6 3 2 10 10 10 -10 -10 7 3',
'8',
'10 9 -5 2 3 4 5 -10',
]
const N = Number(input.shift())
const SANG = input.shift().split(' ').map(Number)
const M = Number(input.shift())
const LIST = input.shift().split(' ').map(Number);


const solution = (n, m, sang, list) =>{
  const kind = {}
  list.forEach(el=> kind[el]=0)
  sang.forEach(el=>{if(kind.hasOwnProperty(el)) kind[el]+=1});
  
  const answer = [];
  for(let i=0;i<m;i++){
    answer.push(kind[list[i]])
  }
  return answer.join(' ')
}
console.log(solution(N, M, SANG, LIST))