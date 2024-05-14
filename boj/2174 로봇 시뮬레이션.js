/**
 * 2174 로봇 시뮬레이션
 * 가로A 세로 B땅이있다. (1~100)
 * 로봇이 N개 있고 M개 명령을 수행하려한다.
 * 
 * x는 왼쪽 y는 아래부터 매겨진다.
 * NWES중 하나의 방햐으 향해 서 있다.
 * 초기 로봇들 위치는 다르다.
 * M개 명령을 내리려 한다.
 * 하나의 명령을 한 로봇에 내렸으면, 그명령 완료까지 다른 로봇 모숨직인다.
 * 
 * L : 향한 방향을 기준으로 좌로 90도 회전
 * R : 향한 방향을 기준으로 우측으로 90도 회전
 * F : 향한 방향으로 한칸 전진.
 * 
 * 잘못된 명령의 경우
 * Robot X crashes into the wall : x번 로봇이 벽에 충돌하는 경우, 주어진 땅 밖으로 가는 경우
 * Robot X crashes into robot Y : x번 로봇이 움직이다 Y번과 충돌하는 경우
 * 
 * a와 b가 주어지고, n과 m이 주어진다.
 * 각 로봇의 초기위치 및 방향이 주어진 후 명령 내용 주어짐.
 * 명령내리는 로봇, 종류, 반복횟수로 주어진다.
 * 시뮬결과를 출력.
 * 문제가 없다면 OK 아니면 에러내용 출력.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 4',
'2 2',
'1 1 E',
'5 4 W',
'1 F 7',
'2 F 7', 
]
const [A, B] = input.shift().split(' ').map(Number); // 가로, 세로
const [N, M] = input.shift().split(' ').map(Number);
const BOARD = Array.from({ length: B + 1 }, () => Array.from({ length: A + 1 }, () => 0))
const ROBOTS_INFO = input.slice(0, N).map(el => el.split(' ')).map((el) => [Number(el[0]), Number(el[1]), el[2]])
const COMMANDS_INFO = input.slice(N).map(el => el.split(' ')).map((el) => [Number(el[0]), el[1], Number(el[2])])

const solution = (a, b, n, m, board, rInfo, cInfo) => {
  const ROBOT_INFO = new Map();

  for (let i = 1; i <= n; i++) {
    const [y, x, dir] = rInfo[i - 1];
    ROBOT_INFO.set(i, [x, y, dir])
    board[x][y] = i;
  }

  const MOVE = {
    'E': [0, 1],
    'N': [1, 0], // 상 하는 반대
    'W': [0, -1],
    'S': [-1, 0], // 상 하는 반대
  }

  const inRange = (x, y) => x>0 && y>0 && x<b+1 && y<a+1

  
  const moveRobot = (robot_num, y, x, dir) => {
    board[y][x] = 0;
    const [ny, nx] = [y + MOVE[dir][0], x+MOVE[dir][1]];
    if(!inRange(ny, nx)) return `Robot ${robot_num} crashes into the wall`;
    else if(board[ny][nx]!==0) return `Robot ${robot_num} crashes into robot ${board[ny][nx]}`;
    else {
      board[ny][nx] = robot_num;
      ROBOT_INFO.set(robot_num, [ny, nx, dir]);
    }
  }

  const getNextDir = (dir, command) => {
    if(command==='L'){
      switch(dir){
        case 'E':
          return 'N';
        case 'N':
          return 'W';
        case 'W':
          return 'S';
        case 'S':
          return 'E';
      }
    } else{
      switch(dir){
        case 'E':
          return 'S';
        case 'N':
          return 'E';
        case 'W':
          return 'N';
        case 'S':
          return 'W';
      }
    }
  }

  for (const info of cInfo) {
    const [robot_num, command, repeat] = info;
    for(let i=0; i<repeat; i++){
      const [rx, ry, rdir] = ROBOT_INFO.get(robot_num);

      if (command === 'F') {
        const result = moveRobot(robot_num, rx, ry, rdir);
        if(result) return result;
      }
      else {
        const nextDir = getNextDir(rdir, command);
        ROBOT_INFO.set(robot_num, [rx, ry, nextDir]);
      }
    }
  }

  return 'OK';
}

console.log(solution(A, B, N, M, BOARD, ROBOTS_INFO, COMMANDS_INFO))