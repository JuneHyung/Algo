/**
 * 7785 회사에 있는 사람
 * 직원들은 반드시 09 ~ 18까지 회사에 있지 않아도 된다. 좋겠다.
 * 누가 들어오고 나갔는지 기록되있다면, 로그가 주어졌을 떄 회사에 있는 모든 사람을 구하는 프로그램 작성
 * 
 * 출입 기록 수는 2~10의 6승
 * 사람이름이 주어지고, enter나 leave가 주어짐.
 * 동명이인은 없고, 대소문자다르면 다른 이름
 * 사람이름은 대소문자로 구성된 5글자 이하 문자열
 * 
 * ❗ 현재 회사에 있는 사람의 이름을 사전 순의 역순으로 한 줄에 한 명씩 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '4',
'Baha enter',
'Artem enter',
'Askar enter',
'Baha leave',
]

const N = Number(input[0]);
const logMap = new Map(input.slice(1).map(el=>el.split(' ')));

const solution = (n, logMap) => {
  const filteredLog = [...logMap].filter(([key, value])=>value==='enter').map(([key,value])=>key);
  const sorted= filteredLog.sort((a,b)=>{
    if(a>b) return -1;
    else if(a<b) return 1;
    else return 0;
  });
  
  const result = sorted.join('\n');
  return result;
}

console.log(solution(N, logMap));