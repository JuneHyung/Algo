/**
 * 5073 삼각형과 세 변
 * 삼각형의 세 변이 주어질 떄 다음처럼 정의한다.
 * Equilateral :  세 변의 길이가 모두 같은 경우
 * Isosceles : 두 변의 길이만 같은 경우
 * Scalene : 세 변의 길이가 모두 다른 경우
 * 
 * 세변의 길이가 삼각형의 조건을 만족못하면 Invalid 출력.
 * 가장 긴 변의 길이보다 나머지 두변의 길이 합이 길지 않으면 Invalid
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
  '7 7 7',
'6 5 4',
'3 2 5',
'6 2 6',
'0 0 0',
]

const solution = (a, b, c) => {
  const sumAB = a+b;
  const sumBC = b+c;
  const sumAC = a+c;

  if(sumAB <= c || sumBC <=a || sumAC <=b) return 'Invalid';

  if(a===b && b===c && a===c) return 'Equilateral';
  else if(a===b || b===c || a===c) return 'Isosceles';
  else return 'Scalene';
}

while(true){
  const [a, b, c] = input.shift().split(' ').map(Number);

  if(a===0 && b===0 && c===0) break;

  console.log(solution(a, b, c));
}