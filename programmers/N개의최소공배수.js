// 유클리드 호제법
// 최대공약수 : 두 수가 서로(互) 상대방 수를 나누어(除)서 결국 원하는 수를 얻는 알고리즘을 나타낸다.
// 최소공배수 : a*b / 최대공약수


function solution(arr) {
  var answer = arr[0];
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

function gcd(a, b) {
  while (b > 0) {
    let tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
  
let arr = [2, 6, 8, 14];
console.log(solution(arr));