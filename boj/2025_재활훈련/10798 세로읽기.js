/**
 * 10798 세로 읽기
 * 글자들은 영어 대문자 A~Z, 소문자 a~z, 숫자 0~9
 * 
 * 한 줄에 최대 15자, 5개의 단어를 붙인다.
 * 글자가 없으면 읽지 않는다.
 * 세로로 읽은 순서대로 글자를 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  'ABCDE',
  'abcde',
  '01234',
  'FGHIJ',
  'fghij',
]
const wordList = input.slice(0);

const solution = (wordList) => {
  let result = '';
  const fullboard = Array.from({ length: 5 }, () => Array.from({ length: 15 }, () => ''));
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < wordList[i].length; j++) {
      fullboard[i][j] = wordList[i][j];
    }
  }

  for (let j = 0; j < 15; j++) {
    for (let i = 0; i < 5; i++) {
      result += fullboard[i][j]
    }
  }

  return result;
}

console.log(solution(wordList))