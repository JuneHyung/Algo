function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let tmp = getMeasure(i);
    // console.log(tmp);
    tmp % 2 == 0 ? answer += i : answer -= i;
  }
  return answer;
}

function getMeasure(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    num % i == 0 ? cnt++ : cnt
  }
  return cnt;
}
let left = 13;
let right = 17;
console.log(solution(left, right));