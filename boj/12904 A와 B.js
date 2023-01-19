/** 12904 A와 B
 * S를 T로 만들 수 있으면 1 없으면 0
 * 문자열 뒤에 A를 추가.
 * 문자열을 뒤집고 뒤에 B를 추가.
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [S, T] = input;

const isSame = (str, arr) => {
  return str === arr.join('') ? true : false;
}

const solution = (S, T) => {
  let answer = 0;
  let tArr = [...T];
  while (true) {
    if (S.length === tArr.length) {
      if (isSame(S, tArr)) {
        answer = 1;
      };
      break;
    }
    if (tArr[tArr.length - 1] === 'A') tArr.pop();
    else {
      tArr.pop();
      tArr.reverse();
    }
  }
  return answer;
}

// 1
// const S = 'B';
// const T = 'ABBA';

// 0
const S = 'AB';
const T = 'ABB';
console.log(solution(S, T));