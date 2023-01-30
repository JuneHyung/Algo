/**
 * 1339 단어 수학
 * N개단어로 이루어져있으며 알파벳 대무낮로만 이루어짐.
 * 대문자를 0~9중 하나로 바꿔 N개의 수를 합하는 문제.
 * 같은 알파벳은 같은 숫자로 바꾸어야함. (중복 X)
 * GCF + ACDEB를 계산한다고 할 때, 
 * A = 9, B = 4, C = 8, D = 6, E = 5, F = 3, G = 7로 결정한다면, 두 수의 합은 99437
 * 
 * 알파벳은 최대 10개.
 * 수의 최대 길이는 8
 * 
 * 한 글자 씩 자리수 값을 만들어 큰거 부터 하나씩 숫자를 넣어 다더해줌.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '2',
  'GCCDF',
  'ACDEB',
]


const N = input.shift();

const solution = (n, str) => {
  const alpha = {};
  for (let i = 0; i < n; i++) {
    const s = str[i];
    let size = 1;
    for (let j = s.length - 1; j >= 0; j--) {
      const word = s[j];
      if (alpha[word]) alpha[word] += size;
      else alpha[word] = size;
      size *= 10;
    }
  }
  // console.log(alpha)

  const values = Object.values(alpha).sort((a, b) => b - a)
  // console.log(values);

  let number = 9;
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i] * number--;
  }
  return sum;
}

console.log(solution(N, input))