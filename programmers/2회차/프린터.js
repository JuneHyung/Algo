/**
 * 프린터
 * 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
 * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
 * 3. 그렇지 않으면 J를 인쇄합니다.
 * 
 *  숫자가 클수록 중요
 *  location은 0부터
 */
const solution = (priorities, location) => {
  let cnt = 0;
  while (true) {
    const max = Math.max(...priorities);
    const target = priorities.shift();
    if (target === max) {
      cnt++;
      if (location === 0) return cnt;
    }
    else {
      priorities.push(target);
    }

    location--;
    if (location === -1) location = priorities.length - 1;
  }
}

const priorities = [2, 1, 3, 2]
const location = 2 // 1
// const priorities = [1, 1, 9, 1, 1, 1]
// const location = 0 // 5

console.log(solution(priorities, location));