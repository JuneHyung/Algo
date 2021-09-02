function solution(s) {
  return  s.split('').sort().reverse().join('');
}
let s = "Zbcdefg";
console.log(solution(s));