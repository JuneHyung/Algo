
// 진법 n, 
// 미리 구할 숫자의 갯수 t, 
// 게임에 참가하는 인원 m, 
// 튜브의 순서 p
function solution(n, t, m, p) {
  let answer = [];
  let arr = [0];
  let num = m * t;
  
  for (let i = 1; i <= num; i++) {
    arr.push(i.toString(n));
  }
  let str = arr.join('');
  let tube = [];
  for (let i = 0; i < t; i++) {
    tube.push(str[p-1]);
    p += m;
  }
  // console.log(tube.join(''));
  answer = tube.join('').toUpperCase();
  return answer;
}
let n = 2;
let t = 4;
let m = 2;
let p = 1;
console.log(solution(n, t, m, p));