/**
 * 1764 듣보잡
 * 
 * 첫줄 : 듣도 못한사람 N, 보도못한사람 M / 50만이하 자연수
 * 둘줄 ~ N개 : 듣도 못한사람의 이름
 * N+2줄 ~ : 보도 못한 사람의 이름
 * 이름은 공백없이 소문자로만 있으며, 길이는 20이하.
 * 중복되는 이름은 없다
 * 
 * 듣보잡의 수와 명단을 사전순으로 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 4',
'ohhenrie',
'charlie',
'baesangwook',
'obama',
'baesangwook',
'ohhenrie',
'clinton',
]
const [N, M] = input[0].split(' ').map(Number);
const cantSeeList = input.slice(1, N+1);
const cantListenList = input.slice(N+1);

const solution = (cantSeeList,cantListenList) =>{
  const cantSeeSet = new Set(cantSeeList);
  
  const resultSet = new Set();
  
  cantListenList.forEach(person => {
    if(cantSeeSet.has(person)) resultSet.add(person)
  });

  const resultSorted = [...resultSet].sort((a,b)=>{
    if(a>b)return 1;
    else if(a<b)return -1;
    else return 0;
  })

  const result = [resultSorted.length, ...resultSorted].join('\n');
  return result;
}

console.log(solution(cantSeeList, cantListenList));