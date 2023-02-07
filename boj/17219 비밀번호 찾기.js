/**
 * 17219 비밀번호 찾기
 * 저장된 사이트 주소 수 N, 비밀번호를 찾으려는 사이트 주소 수 M
 * N개줄에 걸쳐 주소와 비밀번호가 공백으로 주어짐.
 * 사이트 주소는 중복되지 않음.
 * 비밀번호는 알파벳 대문자로만 주어지며 최대 20자
 * N+2번째 부터는 M개줄에 걸쳐 비밀번호를 찾으려는 사이트 주소가 입력됨.
 * 비밀번호를 차례대로 한 줄 씩 출력
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '16 4',
  'noj.am IU',
  'acmicpc.net UAENA',
  'startlink.io THEKINGOD',
  'google.com ZEZE',
  'nate.com VOICEMAIL',
  'naver.com REDQUEEN',
  'daum.net MODERNTIMES',
  'utube.com BLACKOUT',
  'zum.com LASTFANTASY',
  'dreamwiz.com RAINDROP',
  'hanyang.ac.kr SOMEDAY',
  'dhlottery.co.kr BOO',
  'duksoo.hs.kr HAVANA',
  'hanyang-u.ms.kr OBLIVIATE',
  'yd.es.kr LOVEATTACK',
  'mcc.hanyang.ac.kr ADREAMER',
  'startlink.io',
  'acmicpc.net',
  'noj.am',
  'mcc.hanyang.ac.kr',
]
const [N, M] = input.shift().split(' ').map(Number)
const MAP = new Map();
for (let i = 0; i < N; i++) {
  const [address, pw] = input[i].split(' ')
  MAP.set(address, pw)
}

for (let t = 0; t < M; t++) {
  const line = input[N + t];
  console.log(MAP.get(line));
}