/**
 * 당구 연습
 * 원쿠션 : 벽맞고 공에 맞는 경우
 * 맞춰야하는 공위치가 담겨있다.
 * 리스트에 담긴 각 위치에 순서대로 공을 놓아가며 원쿠션 연습.
 * 머쓱이는 항상 같은 위치에 공을 놓고쳐서 리스트에 담긴 위치에 놓인 공을 맞춤.
 * 각각의 목표로한 공에 맞을때까지 최소 얼마의 거리를 굴러가야 하는지가 궁금해짐.
 *
 * 가로 m, 세로 n
 * 쳐야하는 공이 놓인 위치 좌표 startX, startY
 * 목표  해야하는 공위치 정수 X, Y좌표 리스트 balls
 * 각 회마다 머쓱이가 친 공이 굴러간 거리의 최소값의 제곱을 배열에 담아 return
 *
 * 공의 입사각과 반사각은 항상 동일
 * 꼭지점에 부딪히면 진입방향의 반대방향으로 진행.
 * 두 공좌표가 일치해야 맞았다고 판단.
 */
const solution = (m, n, startX, startY, balls) => {
  const getDist = (dir, endX, endY) => {
    switch (dir) {
      case "u":
        if (startX === endX && startY <= endY) return Infinity;
        return Math.abs(endX - startX) ** 2 + (n + n - Math.abs(endY + startY)) ** 2;
      case "d":
        if (startX === endX && startY >= endY) return Infinity;
        return Math.abs(endX - startX) ** 2 + Math.abs(endY + startY) ** 2;
      case "l":
        if (startY === endY && startX >= endX) return Infinity;
        return Math.abs(endY - startY) ** 2 + Math.abs(endX + startX) ** 2;
      case "r":
        if (startY === endY && startX <= endX) return Infinity;
        return Math.abs(endY - startY) ** 2 + (m + m - Math.abs(endX + startX)) ** 2;
      default:
        return;
    }
  };

  const answer = [];

  for (const [x, y] of balls) {
    const directions = [getDist("u", x, y), getDist("d", x, y), getDist("l", x, y), getDist("r", x, y)];
    answer.push(Math.min(...directions));
  }
  return answer;
};

const m = 10,  n = 10;
const startX = 3,  startY = 7;
const balls = [
  [7, 7],
  [2, 7],
  [7, 3],
];
console.log(solution(m, n, startX, startY, balls));
