/**
 *
 * 몇개의 크로아티아 알파벳으로 이루어져 있는지 출력
 * 변형된 형태로 입력된다.
 * 목록에 없는 알파벳은 한 글자씩 센다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = 'ljes=njak';
const solution = (str) => {
  const CHANGED = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  CHANGED.forEach((el, i) => {
    const regex = new RegExp(`${el}`, 'g');
    str = str.replace(regex, `${i}`);
  });
  const answer = str.length;
  return answer;
};

console.log(solution(input));
