/**
 * 9935 문자열 폭발
 * 폭발광 상근이는 폭발 문자열을 심어놓았다.
 * 폭발과정
 * 문자열이 폭발 문자열을 포함한 경우 모든 폭발문자열이 폭발하고 남은 문자열을 순서대로 이어 붙여 새 문자열을 만든다.
 * 새 문자열에 폭발 문자열이 포함되잇을 수 있다.
 * 폭발은 없어질때까지 계속된다.
 * 모든 폭발 후 남은 문자열을 구해보자.
 * 없는경우 "FRULA"를 출력
 * 푹발 문자열은 같은 문자를 두 개 이상 포함하지 않는다.
 * 
 * 1, 정규표현식으로 풀이 => 초과.
 * 2. 타 코드 참고
 * * 현재 인덱스랑 폭발의 끝이랑 같은지 비교
 * * 같으면, 현재 stack의 상단부터 비교
 * * flag가 true면 stack에 push
 * * 아니면 pop
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  'mirkovC4nizCC44',
  'C4',
]
const TARGET = input.shift()
const BOOM = input.shift()

const solution = (str, boom) => {
  const len = boom.length;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let flag = false;

    if (str[i] === boom[len - 1]) {
      for (let j = 0; j < len - 1; j++) {
        if (stack[stack.length - (j + 1)] === boom[len - (j + 2)]) continue;
        flag = true;
        break;
      }
      if (flag) stack.push(str[i]);
      else for (let j = 0; j < len - 1; j++) stack.pop();
    } else stack.push(str[i])
    console.log(stack)
  }
  const answer = stack.join('')
  return answer.length === 0 ? "FRULA" : answer;
}

console.log(solution(TARGET, BOOM))