function solution(numbers) {
  let answer = 0;
  // for (let i = 0; i < 10; i++) {
  //   !numbers.includes(i) ? answer += i : answer;
  // }
  let num = [];
  makeNum(num);
  checkNum(num, numbers);
  answer = calcNum(num, answer);
  return answer;
}
function calcNum(num, answer) {
  let ans = answer;
  num.forEach(el => {
    el[1] == 0 ? ans+=el[0] : ans
  });
  return ans;
}
function checkNum(num, numbers) {
  numbers.forEach(el => {
    num.forEach(el2 => {
      if (el2[0] == el) el2[1]++;
    })
  })
}
function makeNum(num) {
  for (let i = 0; i < 10; i++) {
    num.push([i,0]);
  }
}
let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers));