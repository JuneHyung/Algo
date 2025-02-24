/**
 * 9063 대지
 * 임씨의 이름이 새겨진 옥구슬의 위치 N 개가 주어질 때에, 
 * 임씨에게 돌아갈 대지의 넓이를 계산하는 프로그램을 작성하시오. 
 * 단, 옥구슬의 위치는 2 차원 정수 좌표로 주어지고 옥구슬은 같은 위치에 여러 개가 발견될 수도 있으며,
 * x 축의 양의방향을 동쪽, y 축의 양의방향을 북쪽이라고 가정한다. 
 * 
 * 첫째 줄에 N 개의 점을 둘러싸는 최소 크기의 직사각형의 넓이를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '1',
'15 13',
]


const N = Number(input[0]);
const pointList = input.slice(1).map(el=>el.split(' ').map(Number));

const solution = (n, pointList) => {
  const xList = pointList.map(el=>el[0])
  const yList = pointList.map(el=>el[1])

  const minX = Math.min(...xList)
  const minY = Math.min(...yList)
  const maxX = Math.max(...xList)
  const maxY = Math.max(...yList)

  const x = Math.abs(maxX-minX)
  const y = Math.abs(maxY-minY)

  const result = x*y;
  return result;
}

console.log(solution(N, pointList))