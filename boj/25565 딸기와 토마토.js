/**
 * 25565 딸기와 토마토
 * NxM의 텃밭
 * 즈티는 K칸 이상인 가로 또는 세로 줄 하나를 고른 후 그 줄에서 임의의 연속한 K개 칸에 모두 딸기심음
 * 레오는 같은 방법으로 토마토씨앗을 심었다.
 * 딸기와 토마토가 같이 자랄 칸의 좌표를 전부 구해보자.
 * 작물이 자라지 않는 경우는 없다.
 * 
 * 0은 존재하지 않는다는 것을 의미.
 * 
 * 토마토와 딸기가 같이자랄 칸의 수를 출력
 * 1개이상이라면, 둘째줄 부터 한 줄에 하나씩 딸기와 토마토가 같이 자랄 칸의 좌표를 
 * 첫 번째 좌표가 증가하는 순으로, 첫번째 좌표가 같으면 두번째 좌표가 증가하는 순으로 출력
 * 
 * 1. 가로로 1번 세로로 1번 돌면서 씨앗이 있는 곳을 체크해 1보다 큰 경우의 수를 정답으로 출력.
 * => 틀렸습니다.
 * 
 * 2. seed수로 경우 나누기 
 * ※ answer에 결과를 다 담아서 출력하려고 하여, 계속 틀렸습니다가 발생.
 * 각 경우마다 바로 answer를 리턴시켜 중복으로 안들어가게 수정하여 정답.
 * 아래 예제에서 중복으로 들어가는 것 확인
 * 2 2 1
 * 0 1
 * 0 0 
 * 
 * 딸기와 토마토가 같이 심어진 칸의 수 = 2K - 심겨진 씨앗수.
 * 경우나누기
 * 1. 2K === 씨앗수
 * 어떠한 영역에도 같이 심어지지 않은 경우.
 * 
 * 2. K === 1
 * board에 1의 위치
 * 
 * 3. 2K-1 === 씨앗수
 * 같이 심겨진 곳이 1군데만 존재하는 경우
 * 현재 칸에 씨앗이 있을 때, 좌 우에 씨앗이 존재하면서, 위아래에 씨앗이 존재하는 경우
 * 
 * 4. 2K-1 >= 씨앗수
 * 딸기와 토마토영역이 가로 - 가로 / 세로 - 세로가 겹쳐서 같이 ㅣㅁ기는 경우
 * 겹친 부분은 겹치기 시작한 부분 + seed-K부터 1씩 늘려가며 2K-S개를 구해준다.
 * 
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '3 5 4',
// '0 0 0 0 0',
// '1 1 1 1 1',
// '0 0 0 0 0',
// ]
const input = [
  '2 2 1',
  '0 1',
  '0 0', 
]
const [N, M, K] = input.shift().split(' ').map(Number);
const BOARD = input.map(el => el.split(' ').map(Number));

const checkBoard = (n, m, board) => { 
  const dx = [1,-1];
  const dy = [ 1,-1];
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) { 
      if (board[i][j] === 0) continue;
      let chkX = false, chkY = false;
      for (let k = 0; k < 2; k++) { 
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (nx >= 0 && nx<n && board[nx][j] === 1) chkX = true; 
        if (ny >= 0 && ny<m && board[i][ny] === 1) chkY = true;
      }
      if (chkX && chkY) return [`${i + 1} ${j + 1}`]
    }
  }
  return [];
}

const solution = (n, m, k, board) => { 
  let seed = 0;
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) { 
      if (board[i][j]===1) seed++;
    }
  }
  const answer = [2*k-seed]
  // 1. 2K === 씨앗수
  if (2 * k === seed) { 
    return 0;
  }

  // 2. K === 1
  if (k === 1) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 1) {
          answer.push(`${i + 1} ${j + 1}`)
          break;
        }
      }
    }
    return answer.join('\n')
  }

  // 3. 2K-1 === 씨앗수
  if (2 * k - 1 === seed) {
    const check = checkBoard(n, m, board);
    if (check.length !== 0) {
      answer.push(check)
      return answer.join('\n')
    }
  }
  
  // 4. 2K-1 >= 씨앗수
  let [startX, startY, endX, endY] = [2001, 2001, -1, -1]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        [startX, startY, endX, endY] = [Math.min(i, startX), Math.min(j, startY), Math.max(i, endX), Math.max(j, endY)]
      }
    }
  }
  // console.log(startX, startY, endX, endY);
  if (startY === endY) {
    for (let i = 0; i < 2 * k - seed; i++) {
      answer.push(`${startX + seed - k + i + 1} ${startY + 1}`)
    }
  }
  if (startX === endX) {
    for (let i = 0; i < 2 * k - seed; i++) {
      answer.push(`${startX + 1} ${startY + seed - k + i + 1}`)
    }
  }
  return answer.join('\n');
}


console.log(solution(N, M ,K, BOARD))