/**
 * 2877 4와 7
 * K번쨰 작은 4와 7로이루어진 수를 구하시오.
 */
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim()
const input = '3'
const K = Number(input)
const solution = (k) => {
  const num = (k+1).toString(2).replace(/0/g, 4).replace(/1/g, 7);
  const answer = num.slice(1)
  return answer;
}

console.log(solution(K))


// 1  4
// 2  7

// 3  44
// 4  47
// 5  74

// 6  444
// 7  447
// 8  474
// 9  744
// 10 747
// 11 777

