/**
 * 1541 잃어버린 괄호
 * 양수 + - 괄호를 가지고 식을 만들었다.
 * 괄호를 지웠다.
 * 적절히 괄호쳐서 최소로 만드려한다.
 */
/**
 * 1. -로 split
 * 2. split한것 끼리 합산.
 * 3. 모두 -
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input ='4+9+7+1-0+5+6'

const solution = (str) => {
  const formula = str.split('-')
  
  const eachSumResult = formula.map(str=>str.split('+').reduce((a,c)=>a+Number(c),0));

  const result = eachSumResult.reduce((a,c)=>a-c, 0) + eachSumResult[0]*2; // 다 -로 더한 후라 2번 빼주기

  return result;
}

console.log(solution(input))