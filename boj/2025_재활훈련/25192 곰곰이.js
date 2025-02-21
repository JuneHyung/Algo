/**
* 25192 곰곰이
* 곰곰티콘이 사용된 횟수 구하기
*
* ENTER는 입장 그외는 입력한 유저네임(숫자 대소문자)
* 새로운 사람이 입장한 이후 처음 채팅을 입력하는 사람은 반드시 곰곰티콘으로 인사를 한다.
*  그 외의 기록은 곰곰티콘을 쓰지 않은 평범한 채팅 기록이다
* 채팅 기록 중 곰곰티콘이 사용된 횟수를 구해보자!
*
* 첫줄 N
* N개 줄에 걸쳐 ENTER 혹은 채팅 입력한 유저 문자열이 나타남. 1~20
* 첫 문자열은 무조건 ENTER
*
*/
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = ["7", "ENTER", "pjshwa", "chansol", "chogahui05", "ENTER", "pjshwa", "chansol"];
const N = Number(input[0]);
const CHAT_LIST = input.slice(1);
const solution = (n, chatList) => {
  let result = 0;
  let check = new Set();

  for (let i = 0; i < chatList.length; i++) {
    const cur = chatList[i];

    if (cur === "ENTER") {
      check = new Set();
      continue;
    }

    if (check.has(cur)) continue;
    else {
      check.add(cur);
      result += 1;
    }
  }
  return result;
};

console.log(solution(N, CHAT_LIST));