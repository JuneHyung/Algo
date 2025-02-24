/**
 * 1085 직사각형에서 탈출
 * x, y에 있다. 각 변이 좌표 축에 평행하고, 왼쪽아래 꼭지점은 0, 0 / 우측위는 w, h
 * 직사각형의 경계선 까지 가는 거리의 최소값
 * 
 * x, y, w, h가 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = `653 375 1000 1000`;
const [x, y, w, h] = input.split(' ').map(Number);
const solution = (x, y, w, h) => {
  const zeroToX = x;
  const zeroToY = y;
  const yToLine = h-y;
  const xToLine = w-x;

  const result = Math.min(zeroToX, zeroToY, yToLine, xToLine)
  return result;
}

console.log(solution(x, y, w, h));