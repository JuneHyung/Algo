/**
 * 3009 네 번째 점
 * 세 점이 주어졌을 떄 축에 평행한 직사각형을 만들기 위해 네 번쨰 점을 찾는 프로그램 작성
 * */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '30 20',
  '10 20',
  '10 10',
]
const pointList = input.map(el=>el.split(' ').map(Number));

const solution = (pointList) => {

  const xList = pointList.map(el=>el[0]).sort((a,b)=>a-b);
  const yList = pointList.map(el=>el[1]).sort((a,b)=>a-b);

  const x = xList[0] === xList[1] ? xList[2] : xList[0];
  const y = yList[0] === yList[1] ? yList[2] : yList[0];

  // console.log(pointList)
  const result = `${x} ${y}`;
  return result;
}

console.log(solution(pointList));