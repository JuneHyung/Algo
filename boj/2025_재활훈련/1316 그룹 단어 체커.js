/**
 * 1316 그룹 단어 체커
 * 그룹 단어는 단어에 존재하는 모든 문자에 대해서 각 문자가 연속해서 나타나는 경우만 말한다.
 * 
 * N개를 입력받아 그룹단어의 개수를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
  'aba',
  'abab',
  'abcabc',
  'a',
]
const N = Number(input[0])
const wordList = input.slice(1);

let result = 0;

const solution = (word) => {
  const checkMap = new Map();
  const splittedWord = word.split('');

  // 이미 나왔는지 체크할 checkMap
  for (const char of splittedWord) {
    const cur = checkMap.get(char);
    if (cur === undefined) checkMap.set(char, false);
  }

  let flag = true;

  // 처음 ~ 마지막 전까지 검사
  for (let j = 0; j < splittedWord.length - 1; j++) {
    const curChar = splittedWord[j];
    const nextChar = splittedWord[j + 1];

    if (checkMap.get(curChar)) { flag = false; break; }

    if (curChar !== nextChar) checkMap.set(curChar, true);
  }

  // 마지막 글자 검사
  if (flag) {
    const lastChar = splittedWord[splittedWord.length - 1];
    result = !checkMap.get(lastChar) ? result + 1 : result;
  }

}


for (let i = 0; i < N; i++) {
  solution(wordList[i]);
}

console.log(result)