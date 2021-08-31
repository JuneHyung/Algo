function solution(n, m) {
  let gcdN = gcd(n, m);
  let lcmN = lcm(n, m, gcdN);
  console.log(gcdN, lcmN);
  let answer = [gcdN, lcmN]
  return answer;
}
function gcd(a, b) {
  while (b > 0) {
    let tmp = b;
    b = a%b;
    a = tmp;
  }
  return a;
}
function lcm(a, b, gcd) {
  return a*b / gcd;
}
let n = 2;
let m = 5;
console.log(solution(n, m));