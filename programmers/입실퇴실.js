function solution(enter, leave) {
  let answer = [];
  for (let i = 0; i < enter.length; i++) {
    answer.push(new Set);
  }
  // console.log(answer);
  let lidx = 0;
  let eidx = 0;
  let room = [];
  while (true) {
    if (lidx == leave.length) break;
    else {
      
      console.log('before')
      console.log(room);
      if (room.indexOf(leave[lidx]) != -1) {
        let tmp = Array.from(room);
        for (let i = 0; i < room.length; i++) {
          for (let j = 0; j < tmp.length; j++) {
            if (tmp[j] != room[i])
              answer[room[i] - 1].add(tmp[j]);
          }
        }
        room.splice(room.indexOf(leave[lidx]), 1);
        lidx++;
      } else {
        room.push(enter[eidx]);
        eidx++;
      }
    }
    console.log(`lidx : ${lidx}, eidx : ${eidx}`)
    console.log('room');
    console.log(room);
    console.log(answer);
    console.log();
  }

  answer = answer.map(el => {
    return el = Array.from(el).length;
  })
  return answer;
}
let enter = [1, 4, 2, 3]
let leave = [2, 1, 3, 4]
// let enter = [1, 3,2]
// let leave = [1, 2, 3]
console.log(solution(enter, leave));