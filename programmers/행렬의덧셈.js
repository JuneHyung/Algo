function solution(arr1, arr2) {
  let answer = arr1.map((el, i) => {
    return el.map((el2, j) => {
      return el2 + arr2[i][j];
    })
  });
  return answer;
}
let arr1 = [[1, 2], [2, 3]];
let arr2 = [[3, 4], [5, 6]];
console.log(solution(arr1, arr2));