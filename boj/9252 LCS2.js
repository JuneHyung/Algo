/**
 * 9252 LCS 2 
 * 두 수열이 주어졌을 때 모두의 부분 수열이 되는 수열 중 가장 긴것을 찾는 문제
 * ACAYKP와 CAPCAK의 LCS는 ACAK
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  'ACAYKP',
'CAPCAK',
]
const [left, right] = input
const solution = (left, right) => {
  const str1 = `0${left}`
  const str2 = `0${right}`

  const lcs = Array.from({length: str1.length},()=>Array.from({length:str2.length},()=>[0, '']));

  for(let i=1;i<str1.length;i++){
    for(let j=1;j<str2.length;j++){
      let len = 0;
      let val = '';
      if(str1[i]===str2[j]){
        len = lcs[i-1][j-1][0]+1;
        val = lcs[i-1][j-1][1]+str1[i];
      }else{
        len = Math.max(lcs[i-1][j][0], lcs[i][j-1][0]);
        val = lcs[i-1][j][0] > lcs[i][j-1][0] ? lcs[i-1][j][1] : lcs[i][j-1][1];
      }
      lcs[i][j] = [len, val];
    }
  }
  const answer = lcs[str1.length-1][str2.length-1];
  // console.log(answer)
  return answer.join('\n')
}
console.log(solution(left, right))