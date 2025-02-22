/**
 * 2903 중앙 이동 알고리즘
 * 
 * 0. 정사각형을 이루는 점 4개를 고른다.
 * 1. 정사가형의 각 변의 중앙에 점을 하나 추가한다.
 * 2. 정사각형의 중심에 점을 하나 추가한다.
 * 
 * 중복하는 점을 한 번만 저장하려한다.
 * N번 거친 후 점 몇개를 저장해야 하는가?
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '15'
const N = Number(input)

// 4 ^ 0 - 2 2()
// 4 ^ 1 - 3 3(2 + (2 - 1)) ^ 2
// 4 ^ 2 - 5 5(3 + (3 - 1)) ^ 2
// 4 ^ 3 - 9 9(5 + (5 - 1)) ^ 2
// 4 ^ 4 - 17 17(9 + (9 - 1)) ^ 2

const solution = (n) => {
  const arr = [2];
  for (let i = 1; i <= 15; i++) {
    arr[i] = arr[i - 1] + (arr[i - 1] - 1)
  }

  console.log(arr)

  const result = arr[n] ** 2;

  return result;
}

console.log(solution(N));