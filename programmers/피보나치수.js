function solution(n) {
  let fibo = [0,1];
  var answer = 0;
  for (let i = 0; i < n-1; i++) {
    let tmp =( fibo[i] + fibo[i+1])%1234567;
    fibo.push(tmp);
    console.log(fibo);
  }
  answer = fibo[n]
  return answer;
}
let n = 5;
console.log(solution(n));