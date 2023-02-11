/**
 * 9019 DSLR
 * 명령어 DSLR을 쓰는 계산기
 * 저장된 n을 변경한다
 * D : N을 두배로 바꾼다. 9999보다 큰 경우 10000으로 나눈 나머지.
 * S : N에서 1을 뺀 결과를 저장. N이 0이면 9999저장
 * L : N의 자리수를 왼편으로 회전시켜 그 결과를 저장한다.
 * R : N의 각 자리수를 오른편으로 회전시켜 저장함.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
  '1234 3412',
  '1000 1',
  '1 16',
]
const T = Number(input.shift())

const commandD = (num) => {
  const result = num * 2;
  return result >= 10000 ? result % 10000 : result;
}
const commandS = (num) => {
  const result = num - 1;
  return result === -1 ? 9999 : result;
}
const commandL = (num) => {
  const first = Math.floor(num / 1000);
  const mod = num % 1000;
  const result = mod * 10 + first
  return result;
}

const commandR = (num) => {
  const last = Math.floor(num / 10);
  const mod = num % 10;
  const result = mod * 1000 + last;
  return result;
}

const convert = (num, command) => {
  switch (command) {
    case 'D':
      return commandD(num)
    case 'S':
      return commandS(num)
    case 'L':
      return commandL(num)
    case 'R':
      return commandR(num)
  }
}

const solution = (tc) => {
  const [start, end] = tc;
  const visited = Array.from({ length: 10000 }, () => false);
  visited[start] = true;
  const q = [[start, '']];
  const answer = [];
  const commandList = ['D', 'S', 'L', 'R'];

  while (q.length !== 0) {
    let [cur, command] = q.shift();
    if (cur === end) {
      answer.push(command)
      break;
    }
    for (let k = 0; k < 4; k++) {
      const c = commandList[k];
      const convertNum = convert(cur, c)
      if (!visited[convertNum]) {
        visited[convertNum] = true;
        q.push([convertNum, command + c]);
      }
    }
  }
  return answer[0];
}


for (let t = 0; t < T; t++) {
  const testcase = input.shift().split(' ').map(Number);
  console.log(solution(testcase));
}