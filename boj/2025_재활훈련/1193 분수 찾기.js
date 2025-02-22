/**
 * 1193 분수 찾기
 * 무한히 큰 배열에 다음 같이 분수들이 있다.
 * 
 * X가 주어졌을 때 X번쨰 분수 구하기.
 * 
 * X는 1~ 1천만
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '1'
const X = Number(input);

// 1 - 1/1

// 2 - 1/2
// 3 - 2/1

// 4 - 3/1
// 5 - 2/2
// 6 - 1/3

// 7 - 1/4
// 8 - 2/3
// 9 - 3/2
// 10 - 4/1

// 11 - 5/1
// 12 - 4/2
// 13 - 3/3
// 14 - 2/4
// 15 - 1/5


// 짝수면 1부터 홀수면 길이부터
// 짝수면 1씩증가, 홀수면 1씩감소 반복횟수는 길이만큼
const solution = (x) => {
  let len = 1;
  let idx = 1;

  // console.log(x);

  while (true) {
    let lt = len % 2 === 0 ? 1 : len;
    let rt = len % 2 === 0 ? len : 1;
    console.log(lt, rt)
    for (let i = 0; i < len; i++) {
      if (idx === x) return `${lt}/${rt}`;
      lt = len % 2 === 0 ? lt + 1 : lt - 1;
      rt = len % 2 === 0 ? rt - 1 : rt + 1;
      idx++;
    }
    len++;
  }
}

console.log(solution(X));