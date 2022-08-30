const solution = (arr) => {
  return Math.min(...arr);
  // return Math.min.apply(null, arr);
}

// ▣ 입력예제 1 
// 5 3 7 11 2 15 17
// ▣ 출력예제 1
// 2
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));