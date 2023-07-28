/**
 * 9241 바이러스 복제
 * DNA의 일부를 교체해 복제를 시작하는 바이러스를 발견했다.
 * 어떤 DNA의 연속된 일부분을 다른 DNA로 교체한다.
 * 교체된 DNA의 길이를 구하려 한다.
 * 
 * 감염 전 DNA
 * 감염 후 DNA
 * 
 * 연속된 DNA조각은 삽입되기 전 원래 그 자리에 있는 DNA를 제거할 수도 있다.
 * AA와 AAAA라면 답은 2고, AAAA와 AA면 답은 0이다.
 * A와 B에 따라 로직이 변경된다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  'AGCGAA',
  'AAAAA',
]


const [BEFORE_STR, AFTER_STR] = input.map(el => el.split(''))
const solution = (beforeStr, afterStr) => {
  const befLen = beforeStr.length;
  const aftLen = afterStr.length;
  const minLen = Math.min(befLen, aftLen);

  let lt = 0;
  // 시작부터 동일한 위치까지 세기.
  while (lt < minLen && (beforeStr[lt] === afterStr[lt])) {
    lt++;
  }

  // 끝에서부터 동일한 위치까지 세기
  let rt = 0;
  while (rt < minLen && (beforeStr[befLen - 1 - rt] === afterStr[aftLen - 1 - rt])) {
    rt++;
  }

  // console.log(lt, rt)
  // lt는 시작, rt는 끝 다음위치
  if (lt >= minLen - rt) {
    if (befLen > aftLen) return 0;
    return aftLen - befLen
  } else {
    return aftLen - rt - lt
  }
}

console.log(solution(BEFORE_STR, AFTER_STR))