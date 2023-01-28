/**
 * 5430 AC
 * R (뒤집기), D(버리기)
 * 빈배열에 D하면 error
 * T : testcase 수
 * 
 * p : 수행할 함수
 * n : 배열 수
 * 배열
 * 
 * 함수를 수행한 결과를 출력. error발생시 error출력
 * 
 * 1. 각 함수마다 list를 수정하는 방식 => 시간초과 (16%)
 * 2. R갯수, D갯수를 세서 R이 짝수면 continue, 아니면 reverseFlag를 변경하여 D일떄 reverseFlag면 뒤에서 false면 앞에서 자르고,
 * 결과 출력 시 reverseFlag에 따라 reverse시킨결과 안 시킨 결과를 리턴. => 시간초과 (33%)
 * 3. 반례 찾다가 배열 결과값을 다들 문자열로 다시 리턴하길레 출력값을 보니 배열의 쉼표뒤에 공백이 없는것을 발견하고 결과값 수정해서 통과.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const input = [
  '4',
  'RDD',
  '4',
  '[1,2,3,4]',
  'DD',
  '1',
  '[42]',
  'RRD',
  '6',
  '[1,1,2,3,5,8]',
  'R',
  '0',
  '[]',
];
// const input = [
//   '1',
//   'RRD',
//   '6',
//   '[1,1,2,3,5,8]',
// ]
const T = Number(input.shift());
// 1234 4321 321 21 12

const solution = (p, n, list) => {
  const pArr = p.split('')
  const result = [];
  let rCnt = 0;
  let dCnt = 0;
  for (let i = 0; i < pArr.length; i++) {
    const command = pArr[i];
    const last = result.at(-1)
    if (command === 'R') {
      if (last === undefined) result.push('R')
      if (last === 'D') {
        result.push(dCnt);
        result.push('R')
        dCnt = 0;
        rCnt++;
        if (i === pArr.length - 1) result.push(rCnt);
      } else {
        rCnt++;
        if (i === pArr.length - 1) result.push(rCnt);
      }
    } else if (command === 'D') {
      if (last === undefined) result.push('D')
      if (last === 'R') {
        result.push(rCnt);
        result.push('D');
        rCnt = 0;
        dCnt++;
        if (i === pArr.length - 1) result.push(dCnt);
      } else {
        dCnt++;
        if (i === pArr.length - 1) result.push(dCnt);
      }
    }
  }

  let reverseFlag = false;

  for (let i = 0; i < result.length; i += 2) {
    const command = result[i];
    const num = result[i + 1];

    if (command === 'R') {
      if (num % 2 === 0) continue;
      else reverseFlag = !reverseFlag;
    }
    else if (command === 'D') {
      if (list.length < num || list.length === 0) return 'error';
      else if (reverseFlag) {
        list.splice(-1 * num);
      } else if (!reverseFlag) {
        list.splice(0, num);
      }
    }
  }

  return reverseFlag ? `[${list.reverse().join(',')}]` : `[${list.join(',')}]`;
  // return reverseFlag ? list.reverse() : list;
}

for (let t = 0; t < T; t++) {
  // console.log(input);
  const P = input.shift();
  const N = Number(input.shift());
  const arr = JSON.parse(input.shift());
  console.log(solution(P, N, arr));
}