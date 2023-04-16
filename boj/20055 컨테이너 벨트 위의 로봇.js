/**
 * 20055 컨테이너 벨트 위의 로봇
 * 길이가 N인 벨트가 있고, 2N인 벨트가 컨테이너 벨트르 ㄹ가싸고 있다.
 * 1을 올리는 위치 N을 내리는 위치라 한다.
 * 로봇은 올리는 위치에만 올릴 수 있고, 로봇이 내리는 위치에 도달하면 즉시 내린다.
 * 로봇은 컨테이너 벨트위에서 스스로 이동 가능.
 * 로봇을 올리는 위치에 올리거나 로봇이 어떤 칸으로 이동하면 해당 칸의 내구도가 1감소한다.
 * 
 * 로봇들을 건너편으로 옮기려 한다.
 * 1. 벨트가 각 칸위에 있는 로봇과 함께 한칸 회전함.
 * 2. 가장 먼저 베르에 올라간 로봇부터 벨트가 회전하는 방향으로 한 칸 이동할수 있다면 이동.
 * 없으면 가만히 있음.
 *  2-1. 로봇이 이동하기 위해서는 이동하려는 칸에 로봇이 없으며, 내구도가 1이상 남아 있어야한다.
 * 3. 올리는 위치에 칸 내구도가 0이 아니면 올리는 위치에 로봇을 올림.
 * 내구도가 0인 칸의 개수가 K개 이상이면, 중지한다. 아니면 1번으로 돌아간다.
 * 종료 되었을 때 몇번째 단계가 진행중이였는지 구해보자.
 * 처음 수행하는건 1단계.
 * N과 K가 주어진다.
 */
// const fs = requier('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 2',
'1 2 1 2 1 2',
]

const [N, K] = input.shift().split(' ').map(Number)
const ARR = input.shift().split(' ').map(Number);

function rotate(n, belt, robots){ 
  const last = belt.pop();
  belt.unshift(last);

  robots.pop();
  robots.unshift(false)
  if (robots[n - 1]) robots[n - 1] = false; // 내리는 위치 상태 초기화.
}

function moveRobots(n, belt, robots){ 
  for (let i = n - 2; i >=0; i--) { // 가장 먼저 올라간 로봇부터 회전방향으로 이동.
    if (!robots[i]) continue;
    if (!robots[i + 1] && belt[i + 1] > 0) { 
      robots[i + 1] = true;
      robots[i] = false;
      belt[i + 1] -= 1;
    }
  }
}

function addRobot(belt, robots) { 
  if (belt[0] > 0) { 
    belt[0] -= 1;
    robots[0] = true;
  }
}

const getZero = (belt) => belt.filter(el => el === 0).length; 
const solution = (n, k, belt) => { 
  // console.log(belt)
  const robots = Array.from({ length: n }, () => false);
  let step = 0;
  while (true) { 
    step++;
    
    rotate(n, belt, robots); // 1단계
    moveRobots(n, belt, robots); // 2단계
    addRobot(belt, robots); // 3단계
    if (getZero(belt) >= k) break; // 4단계
  }
  return step;
}

console.log(solution(N, K, ARR));