function solution(enter, leave) {
  let answer = new Array(enter.length).fill([]);
  let room = [];
  let visited = new Array(enter.length).fill(false);
  let enIdx = 0;
  let idx = 0;
  let cnt = 0;
  while (true) {
    if (idx == leave.length - 1) break;
    if (enter.length != 0) {
      let tmp = enter.shift();
      room.push(tmp);
    }

    console.log(room)
    console.log(`leave : ${leave[idx]}`);
    if (room.indexOf(leave[idx]) == -1) {
      cnt++;
    }
    else {
      let tmp = Array.from(room);

      room.splice(room.indexOf(leave[idx]), 1)
      for (let i = 0; i < tmp.length; i++) {
        if (find(room, answer)==0) continue;
        else answer[tmp[i] - 1] = (find(room,answer));
        console.log(answer);
      }
      idx++;
      cnt = 0;
    }
    enIdx++;
    console.log();
  }
  return answer;
}
function find(room, answer) {
  let result = 0;
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < room.length; j++) {
      if (answer[i].indexOf(room[j]) == -1) result = room[j];
      break;
    }
    if (result != 0) break;
  }
  return result;
}
let enter = [1, 4, 2, 3];
let leave = [2, 1, 3, 4];
console.log(solution(enter, leave));