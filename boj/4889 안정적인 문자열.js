/**
 * 4889 안정적인 문자열
 * 괄호만으로 이뤄진 문자열이 주어진다.
 * 안정적인 문자열을 만들기 위한 최소 연산수를 구하려 한다.
 * 안정적인 문자열
 * 1. 빈 문자열은 안정적이다
 * 2. S가 안정적이면 {S}도 안정적인 문자열
 * 3. S와 T가 안정적이면, ST(두문자열의 연결)도 안정적이다.
 * {}, {}{}, {{}{}}는 안정적.
 * }{, {{}{, {}{는 아님.
 * 
 * 여러개 데이터세트로 이루어져 있따.
 * 데이터 세트는 한 줄로 이루어져 있따.
 * 문자열의 길이가 2000을 넘는 경우는 없고, 항상 길이는 짝수.
 * 마지막 줄은 '-'가 한 개 잇아 주어진다.
 * 각 케이스에 대해 테스트케이스 번호와 입력으로 주어진 문자열을 안정적으로 바꾸는데 필요한 최소 연산 수 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '}{',
  '{}{}{}',
  '{{{}',
  '---',
]
const solution = (idx, line) =>{
  const arr = [];
  let cnt = 0;

  for(let i=0;i<line.length;i++){
    const cur = line[i];
    if(cur === '{') arr.push(cur);
    else{ // '}'
      if(arr.length!==0){ // '{' 있으면 제거.
        arr.pop();
      }else{ // 없으면 변환필요.
        cnt++;
        arr.push('{');
      }
    }
  }
  
  if(arr.length!==0) cnt+= arr.length/2;
  const answer = `${idx}. ${cnt}`;
  return answer;
}
let IDX = 1;
while(true){
  const LINE = input.shift().split('')
  if(LINE.includes('-'))break;
  console.log(solution(IDX, LINE));
  IDX++;
}