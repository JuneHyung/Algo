/**
 * 2444 별 찍기 - 7
 * 
 * 
 */
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
/**
1 공백4 별1
2 공백3 별3
3 공백2 별5
4 공백1 별7
5 공백0 별9
6 공백1 별7
7 공백2 별5
8 공백3 별3
9 공백4 별1
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '5';
const N = Number(input);

const solution = (n) => {
  const result = [];

  // 증가
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 0; j < n - i; j++) {
      str += ' ';
    }
    str += '*'.repeat(2 * i - 1);
    result.push(str);
  }

  // 감소
  for (let i = n - 1; i > 0; i--) {
    let str = '';
    for (let j = 0; j < n - i; j++) {
      str += ' ';
    }
    str += '*'.repeat(2 * i - 1);
    result.push(str);
  }

  return result.join('\n');
}

console.log(solution(N));