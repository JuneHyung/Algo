/**
 * 10101 삼각형외우기
 * 삼각형의 3각을 입력받고
 * 세 각의 크기가 모두 60이면, Equilateral
 * 세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
 * 세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
 * 세 각의 합이 180이 아닌 경우에는 Error
 * 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '60',
  '70',
  '50',
]
const angleList = input.map(Number);

const solution = (angleList) => {
  const [angleA, angleB, angleC] = angleList;
  const angleSum = angleA + angleB + angleC;

  if(angleSum!==180) return 'Error';
  else if(angleA===60 && angleB===60 && angleC===60) return 'Equilateral';
  else if(angleA===angleB || angleB===angleC || angleA===angleC) return 'Isosceles';
  else return 'Scalene'
  

}

console.log(solution(angleList));