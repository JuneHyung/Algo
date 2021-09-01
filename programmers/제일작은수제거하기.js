function solution(arr) {
  let min = Math.min(...arr);
  arr.forEach((el,i) => {
    el == min ? arr.splice(i, 1) : arr;
  })
  return arr.length !=0 ? arr : [-1];
}
let arr = [10];
console.log(solution(arr));