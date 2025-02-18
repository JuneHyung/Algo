/**
 * 서로 다른 부분 문자열의 개수
 * 문자열 S가 주어졌을 때 S의 서로다른 부분문자열의 개수를 구하시오.
 * S는 소문자로만 이루어지며, 길이는 1천이하
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = 'ababc'
const solution = (str) => {
  const resultSet = new Set();

  const len = str.length;

  for(let i=0;i<len;i++){
    for(let j=i;j<len;j++){
      const word = str.slice(i,j+1);
      console.log(word)
      resultSet.add(word);
    }
  }

  // console.log(resultSet)

  return resultSet.size;

}

console.log(solution(input));

