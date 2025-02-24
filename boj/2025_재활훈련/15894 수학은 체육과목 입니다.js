/**
 * 15894 수학은 체육과목 입니다.
 * "한 변의 길이가 1인 정사각형을 아래 그림과 같이 겹치지 않게 빈틈없이 계속 붙여 나간다. 
 * 가장 아랫부분의 정사각형이 n개가 되었을 때, 실선으로 이루어진 도형의 둘레의 길이를 구하시오."
 * 가장 아래 정사각형 수가 주어지면 그에 해당하는 답을 출력
 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input)

// 1 4
// 2 8
// 3 12
// 4 16
const solution = (n) => {
  return n*4;
}

console.log(solution(N))