function solution(arr, divisor) {
  let answer = arr.filter((el) => {
    if (el % divisor == 0) return el;
  }).sort((a, b) => { return a - b });
  
  answer.length==0 ? answer = [-1] : answer
  return answer;
}
let arr = 	[3, 2, 6]
let divisor = 10
console.log(solution(arr, divisor));