/**
 * 9536 여우는 어떻게 울지?
 * 첫 줄에 Testcase
 * 단어는 알파벳 소문자로만 이루어져있으며, 공백으로 주어진다.
 * 다른 동물들 소리를 제거하면 여우 소리가 남는다.
 * 울음소리가 <동물>goes <소리>로 주어진다.
 * 여우를 제외한 울음소리는 한 단어이고 최대 100자.
 * What does the fox say?
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1',
'toot woof wa ow ow ow pa blub blub pa toot pa blub pa pa ow pow toot',
'dog goes woof',
'fish goes blub',
'elephant goes toot',
'seal goes ow',
'what does the fox say?',
]
const solution = (STR, ARR) => {
  const answer = STR.filter(el => ARR.indexOf(el) === -1)
  return answer.join(' ')
}

const T = Number(input.shift());
for (let t = 0; t < T; t++) { 
  const STR = input.shift().split(' ')
  const ARR = [];
  
  while (input[0] !== "what does the fox say?") {
    ARR.push(input.shift().split('goes')[1].trim())
  }
  input.shift();
  console.log(solution(STR, ARR))
}