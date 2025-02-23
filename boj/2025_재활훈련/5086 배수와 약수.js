/**
 * 5086 배수와 약수
 * 두 수가 주어졌을 때 다음 3가지 중 어떤 관계인지 구하는 프로그램
 * 
 * 1. 첫 번째 숫자가 두 번째 숫자의 약수이다.
 * 2. 첫 번째 숫자가 두 번째 숫자의 배수이다.
 * 3. 첫 번째 숫자가 두 번째 숫자의 약수와 배수 모두 아니다.
 * 
 * 각 테케는 1만이 넘지 않는 두 자연수로 이루어져 있다.
 * 막줄은 0이 2개 주어진다.4
 * 
 * 두 수가 같은 경우는 없다.
 * 약수면 factor, 배수면 multiple, 둘다 아니면 neither
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '8 16',
  '32 4',
  '17 5',
  '0 0',
]
const solution = (f, s) => {
  const max = Math.max(f, s);
  const bigger = f > s ? 'first' : 'second';
  const sqrt = Math.sqrt(max);
  const divisor = new Set();
  for (let i = 1; i <= sqrt; i++) {
    if (max % i === 0) { divisor.add(i); divisor.add(max / i) }
  }

  if (bigger === 'first') {
    if (divisor.has(s)) return 'multiple';
    else return 'neither';
  } else {
    if (divisor.has(f)) return 'factor';
    else return 'neither';
  }

}

while (true) {
  const [F, S] = input.shift().split(' ').map(Number);
  if (F === 0 && S === 0) break;

  console.log(solution(F, S));
}