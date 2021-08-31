function solution(arr) {
  return arr.reduce((acc, cur) =>   acc + cur, 0) / arr.length;;
}
let arr = [1, 2, 3, 4];
console.log(solution(arr));