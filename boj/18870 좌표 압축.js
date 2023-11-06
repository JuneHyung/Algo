/**
 * 18870 좌표압축
 * N개 좌표에 좌표 압축 적용
 * Xi를 압축한 결과는 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.
 * 좌표 압축한 결과를 리턴
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'2 4 -10 4 -9',
]
const N = Number(input.shift())
const INFO = input.shift().split(' ').map(Number)

const solution = (n, info) => {
  const typeList = [...new Set(info)].sort((a,b)=>a-b);
  const dictionary = {}
  typeList.forEach((el,idx)=>{dictionary[el]=idx});
  let answer = ''
  for(let i=0;i<info.length;i++) answer+=dictionary[info[i]] + ' '

  return answer;
}

console.log(solution(N, INFO))