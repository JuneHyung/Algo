/**
 * 9251 LCS
 * Longest Common Subsequence
 * 두 수열이 주어졌을 떄 모두의 부분수열이 되는 수열 중 가장 긴 것을 찾는 문제.
 * 
 * https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence#%EA%B5%AC%ED%98%84%EA%B3%BC%EC%A0%95-2
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  'ACAYKP',
'CAPCAK',
]

const solution = (str) => {
  const str1 = `0${str[0]}`
  const str2 = `0${str[1]}`
  const lcs = Array.from({length: str1.length},()=>Array.from({length:str2.length},()=>0));

  for(let i=1;i<str1.length;i++){
    for(let j=1;j<str2.length;j++){
      if(str1[i]===str2[j]){
        lcs[i][j] = lcs[i-1][j-1]+1;
      }else{
        lcs[i][j]=Math.max(lcs[i-1][j], lcs[i][j-1]);
      }
    }
  }
  const answer = lcs[str1.length-1][str2.length-1];
  return answer;
}

console.log(solution(input))

/**
 * 추가적
 * 배열로 LCS찾기
 * 1. 가장 마지막 값에서 시작.
 * 2. LCS[i-1][j]와 LCS[i][j-1] 중 현재 값과 같은 값을 찾는다.
 * 2-1. 같은 값이 있으면 해당값으로 이동
 * 2-2. 같은 값이 없으면 result배열에 해당 문자열을 넣고 LCS[i-1][j-1]로 이동.
 * 3. 2를 반복하다 0이 나오면 종료. result의 역순이 lCS.
 */