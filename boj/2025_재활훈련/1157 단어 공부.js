/**
 * 1157 단어 공부
 * 대소문자로된 단어가 주어지면, 가장 많이 사용된 알파벳이 무엇인지 알아내시오.
 * 대소문자 구분X
 * 길이는 100만 넘지않음
 * 가장 많이 사용된 알파벳을 대문자로 출력. 여러개면 ?출력
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = `Mississipi`
const input = `zZa`
const solution = (str) => {
  const charList = str.toUpperCase().split('');
  const countInfo = {};

  for(const char of charList){
    countInfo[char] = countInfo.hasOwnProperty(char) ? countInfo[char]+1 : 1;
  }
  // console.log(countInfo)

  const values = Object.values(countInfo);
  const keys = Object.keys(countInfo);
  
  const max = Math.max(...values);
  const filtered = values.filter(el=>el===max);
  const maxIdx = values.indexOf(max);

  const result = filtered.length>1 ? '?' : keys[maxIdx];
  return result;

}

console.log(solution(input));