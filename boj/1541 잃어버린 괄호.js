/**
 * 1541 잃어버린 괄호
 * 양수, +, -, 괄호로 식을 만들 것이다.
 * 식의 값을 최소로 만들려 할 때 최소가되는 프로그램 작성
 * 최소가 되려면 -부터 다음 -까지 괄호치면 될듯 하다.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
// const input = '10+20+30+40'
const input = '55-50+40'
const solution = (input) => {
  const formula = input.split('-');
  const sumList = [];
  for (i of formula) {
    let numList = i.split('+');
    const sum = numList.reduce((acc, cur) => acc + Number(cur), 0);
    sumList.push(sum);
  }

  let result = sumList.reduce((acc, cur, idx) => idx === 0 ? acc + cur : acc - cur, 0);
  return result;
}
console.log(solution(input))