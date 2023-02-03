/**
 * 1931 회의실 배정
 * 시작과 끝시간이 있고, 겹치지않게 회의실을 사용할 수 있는 회의의 최대 갯수 구하기.
 * 한회의가 끝나는것과 동시에 시작할 수 있다.
 * 회의의 시작시간과 끝나는 시간이 같을 수도 있다.
 * 
 * 1. 회의 시작 순으로 정렬(같으면 끝나는 시간으로 정렬)하여 각 배열 요소로 시작해 cnt를 세서 최대값을 구함.
 * => 시간초과
 * 
 * 2. 회의 끝 순으로 정렬(같으면 시작 시간으로 정렬)하여 반복 한번으로 cnt 체크
 *
 * 질문게시판참고
 * => 
 * 이 문제에서는 시작시간과 종료시간이 같은 회의가 존재
 * 2 3 / 3 3 이 입력으로 왔을 때 두 회의 모두 진행할 수 있는데
 * 1번처럼 정렬하게 되면 3 3 -> 2 3으로 정렬 되기 때문에 2 3이 불가능하다고 판단해버림. 
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '11',
  '1 4',
  '3 5',
  '0 6',
  '5 7',
  '3 8',
  '5 9',
  '6 10',
  '8 11',
  '8 12',
  '2 13',
  '12 14',
]
const N = Number(input.shift());
const arr = input.map(el => el.split(' ').map(Number));

const solution = (n, room) => {
  room.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  })
  console.log(room);
  let cnt = 1;
  let curEnd = room[0][1];

  for (let i = 1; i < n; i++) {
    const [nextStart, nextEnd] = room[i];
    if (curEnd <= nextStart) {
      curEnd = nextEnd;
      cnt += 1;
    }
  }

  return cnt;
}

console.log(solution(N, arr))