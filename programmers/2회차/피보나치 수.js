/**피보나치 */
const solution = (n) =>{
  let fibo = [0, 1];
  for(let i=0;i<n-1;i++){
    let tmp = (fibo[i] + fibo[i+1]) % 1234567;
    fibo.push(tmp);
  }
  return fibo[n]
}
let n = S;
console.log(solution(n))