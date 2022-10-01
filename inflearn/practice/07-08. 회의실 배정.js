//
const solution = (meeting) => {
  let answer = 0;
  meeting.sort((a, b) => { if (a[1] === b[1]) return a[0] - b[0];  else return a[1]-b[1]});
  console.log(meeting);
  let et = 0;

  for (let i = 0; i < meeting.length; i++) { 
    const x = meeting[i];
    if (x[0] >= et) { 
      answer++;
      et = x[1];
    }
  }
  return answer;
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]; // 3
// let arr = [[3, 3], [1, 3], [2, 3]]; // 2
console.log(solution(arr));