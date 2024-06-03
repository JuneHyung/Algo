/**
 * 16719 ZOAC
 * 아직 보여주지 않은 문자 중 추가했을 떄ㅡ이 문자열이 사전 순으로 가장 앞에 오도록하는 문자를 보여준다.
 * ZOAC의 경우 A -> AC -> OAC -> ZOAC순서.
 * 이 규칙대로 출력하는 프로그램 작성.
 * 문자길이는 최대 100자
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = 'ZOAC';
const STR = input.split('');
const solution = (str) => {
  const answer = [];
  const visited = Array.from({length: str.length},()=> false);

  const dfs = (lt, rt) => {
    if(lt===rt) return;
    let result = '';

    let minStr = str.slice(lt, rt).sort()[0];
    let minIdx = str.slice(lt, rt).indexOf(minStr)+lt;
    visited[minIdx] = true;
    for(let i=0; i<str.length;i++){
      if(visited[i]) result += str[i];
    }
    answer.push(result);
    dfs(minIdx+1, rt);
    dfs(lt, minIdx);
  }

  dfs(0, str.length);
  return answer.join('\n');
}

console.log(solution(STR));