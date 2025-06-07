/**
 * 16139
 * 문자열에서 특정 알파벳이 몇 번 나타나는지 알아봐서 자주 나타나는 알파벳이 중지나 검지 위치에 오는 알파벳인지 확인하면 실용적인지 확인할 수 있을 것이다
 * 특정 문자열 S, 
 * 특정 알파벳 a와 
 * 문자열의 구간 [l,r]이 주어지면 
 * S의 l번쨰 문자부터 r번쨰 문자 사이에 a가 몇번 나타나는지 구하는 프로그램 작성.
 * 문자열의 문자는 0번쨰부터 세며, l번쨰와 r번쨰 문자를 포함해서 생각한다.
 * 
 * 문자열 S가 주어진다.
 * 둘줄에는 질문수 q가 주어지고
 * 셋줄부터 q+2번째줄까지 질문이 주어진다.
 * 
 * 각 질문마다 줄을 구분해 순서대로 답변.0
 */
/**
 * 1. 각 질문마다 Map으로 개수세서 리턴. -> 50점
 * 2. [알파벳][길이] 로 개수 전체 문자열에 대해서 누적 값 구한 후 답 도출 -> 50
 * 3. GPT : ASCII코드 값으로 변경
 * 4. result를 모아서 한번만 출력하도록 수정
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  'seungjaehwang',
'4',
'a 0 5',
'a 0 6',
'a 6 10',
'a 7 10',
]
const STR = input[0];
const N = Number(input[1]);
const questions = input.slice(2).map(line=>{
  const [a, l, r] = line.split(' ');
  return [a, Number(l), Number(r)]
});
// const alpha = 'abcdefghijklmnopqrstuvwxyz';
const sum = Array.from({length: 26},()=>Array.from({length:STR.length+1},()=>0));

for(let i=0;i<STR.length;i++){
  // const charIdx = alpha.indexOf(STR[i]);
  const charIdx = STR.charCodeAt(i) - 97;
  for(let j=0;j<26;j++){
    sum[j][i+1] = sum[j][i];

    // 현재(i)문자가 알파벳 j번째면 1더하기.
    if(j===charIdx){
      sum[j][i+1] += 1;
    }
  }
}

const result = [];
for(const [a, l, r] of questions){
  // const idx = alpha.indexOf(a);
  const idx = a.charCodeAt(0) - 97;
  const count = sum[idx][r+1] - sum[idx][l];
  result.push(count);
}

console.log(result.join('\n'))