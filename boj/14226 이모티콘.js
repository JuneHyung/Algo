/**
 * 14226 이모티콘
 * 스마일 이모티콘 S개를 보낼 것이다.
 * 화면에 이모티콘 1개를 이미 입력했다.
 * 3가지 연산만 사용해 이모티콘을 S개 만들어 보려한다.
 * 1. 화면에 있는 이모티콘을 모두 복사해서 클립보드에 저장.
 * 2. 클립보드에 있는 모든 이모티콘을 화면에 붙여넣기
 * 3. 하면에 있는 이모티콘중 하나를 삭제.
 *
 * 모든 연산은 1초가 걸리며, 이모티콘을 복사하려면 이전에 클립보드에 잇던 내용은 덮어쓰기가 된다.
 * 비어있는 상태에는 붙여넣기를 할 수 없으며, 일부만 클립보드에 복사할 수 없다.
 * 클립 보드에 있는 이모티콘 중 일부를 삭제할 수 없다.
 * 화면에 이모티콘을 붙여넣기만 하면, 클립보드에 있는 이모티콘 개수가 화면에 추가된다.
 *
 * S개 이모티콘을 화면에 만드는데 걸리는 시간의 최소값을 구하라.
 */

// 4개
// 클립보드 저장
// 붙여넣기 => 2초, 2개

// 클립보드 저장
// 붙여넣기 => 2초 2개

// 4초

// 6개
// 클립보드 저장
// 붙여넣기 => 2초, 2개

// 클립보드 저장
// 붙여넣기 => 2초, 2개
// 붙여넣기 => 1초
// 5초

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = "6";
const N = Number(input);

const solution = (n) => {
  const visited = Array.from({ length: 1001 }, () => Array.from({ length: 1001 }, () => false));
  const q = [[1, 0, 0]]; // cur, clipboard, time
  visited[1][0] = true;

  while (q.length !== 0) {
    const [cur, clipboard, time] = q.shift();
    if (cur === n) return time;
    if (0 >= cur || cur > 1000) continue;

    if (!visited[cur][cur]) {
      // 연산 1
      visited[cur][cur] = true;
      q.push([cur, cur, time + 1]);
    }

    if (clipboard !== 0 && cur + clipboard <= 1000) {
      // 연산 2
      if (!visited[cur + clipboard][clipboard]) {
        visited[cur + clipboard][clipboard] = true;
        q.push([cur + clipboard, clipboard, time + 1]);
      }
    }

    if (!visited[cur - 1][clipboard]) {
      // 연산 3
      visited[cur - 1][clipboard] = true;
      q.push([cur - 1, clipboard, time + 1]);
    }
  }
};

console.log(solution(N));
