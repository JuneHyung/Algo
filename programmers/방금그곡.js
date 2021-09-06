// 각음은 1분씩재생,
// 음악길이보다 재생된 시간이 길때는 음악이 끊김없이 처음부터 반복해서 재생됨..
// 음악길이보다 재생된 시간이 짧을 때는 처음부터 재생
// 음악이 00:00를 넘겨서까지 재생되는 일은 없음
// 조건일치하는 음악이 여러개면 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환.
// 재생된 시간도 같으면 먼저 입력된 제목 반환
// 없으면 None반환
// [시작시간 , 끝 시간, 음악제목, 악보정보 ]

// 1: replace를 사용해서 뒤에 샾이 들어가는 문자를 소문자로 치환해 준다 (주의: A#과 C#의 소문자는 a,c이런식으로 다르게 해야함)
// 2: 시간차이를 구해준다 여러 방법이 있다 (이건 생각해 보시길...) exam)13:50, 14:20 = 30
// 3:시간의 차이만큼 반복적으로 음이 나오도록 while문을 돌린다 그리고 그 값을 변수에 저장한다
// 4:그 '변수문자열'에 기억하는 '음문자열'이 들어있느지 확인해본다 (이 기술은 생각해 보시길... 쉬움...)
// 5: 만약에 있다면 해쉬를 사용하여 {music: 노래이름, 길이: 아까구한 시간차이}배열에 푸쉬한다
// 6:배열에 길이(key)를 이용하여 내림차순으로 정렬한뒤
// 7: 만약 길이가 0이면 (None)를 리턴 아니면 배열의[0].music을 리턴 한다
// 사용된 악보 C, C#, D, D#, E, F, F#, G, G#, A, A#, B
function solution(m, musicinfos) {
  m = m.replace(/(C#)/g, 'c').replace(/(D#)/g, 'd').replace(/(F#)/g, 'f').replace(/(G#)/g, 'g').replace(/(A#)/g, 'a');
  // console.log(m)
  musicinfos = musicinfos.map(el => el.split(','))
  changeCode(musicinfos); // 1
  let timeGap = getTimeGap(musicinfos); // 2
  let codeArr = makeCode(timeGap, musicinfos); // 3
  let musicList = makeMusicList(m, codeArr, timeGap, musicinfos);
  let sortedList = sortList(musicList);
  // console.log(sortedList);
  // console.log(codeArr);
  // console.log(timeGap);
  var answer = sortedList.length==0 ? '(None)' : sortedList[0][0];
  return answer;
}
function sortList(musicList) {
  let tmp = [];
  for (let k in musicList) {
    tmp.push([k, musicList[k]])
  }
  tmp.sort((a, b) => {
    return b[1] - a[1];
  })
  return tmp;
}
function makeMusicList(m, codeArr, timeGap, musicinfos) {
  let musicList = {}
  for (let i = 0; i < codeArr.length; i++) {
    let code = codeArr[i];
    let idx = code.indexOf(m);
    if (idx != -1) musicList[musicinfos[i][2]] = timeGap[i];
  }
  return musicList;
}
function makeCode(timeGap, musicinfos) {
  let makeCode = [];
  for (let i = 0; i < timeGap.length; i++) {
    let tmp = '';
    let code = musicinfos[i][3];
    for (let j = 0; j < timeGap[i]; j++) {
      tmp += code[j % musicinfos[i][3].length];
    }
    makeCode.push(tmp);
  }
  return makeCode;
}
function changeCode(musicinfos) {
  for (let i = 0; i < musicinfos.length; i++) {
    let tmp = musicinfos[i].pop();
    tmp = tmp.replace(/(C#)/g, 'c').replace(/(D#)/g, 'd').replace(/(F#)/g, 'f').replace(/(G#)/g, 'g').replace(/(A#)/g, 'a');
    musicinfos[i].push(tmp);
  }
}
function getTimeGap(musicinfos) {
  let tGap = [];
  for (let i = 0; i < musicinfos.length; i++) {
    let t1 = musicinfos[i][0].split(':');
    let t2 = musicinfos[i][1].split(':');

    let timeGap = Math.abs((t1[0] - t2[0]) * 60 + (t1[1] - t2[1]));

    tGap.push(timeGap);
  }
  return tGap;
}
let m = "CC#BCC#BCC#BCC#B";
let musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];
console.log(solution(m, musicinfos));