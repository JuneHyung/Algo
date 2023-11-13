/**
 * 1620 나는야 포켓몬 마스터 이다솜
 * N과 M이 주어지고, N개줄만큼 포켓몬도감이 주어짐.
 * M개줄만큼 문제가 주어지고 이에 대한 답변해야함.
 * 숫자면 문자로, 문자면 숫자로 답변.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '26 5',
'Bulbasaur',
'Ivysaur',
'Venusaur',
'Charmander',
'Charmeleon',
'Charizard',
'Squirtle',
'Wartortle',
'Blastoise',
'Caterpie',
'Metapod',
'Butterfree',
'Weedle',
'Kakuna',
'Beedrill',
'Pidgey',
'Pidgeotto',
'Pidgeot',
'Rattata',
'Raticate',
'Spearow',
'Fearow',
'Ekans',
'Arbok',
'Pikachu',
'Raichu',
'25',
'Raichu',
'3',
'Pidgey',
'Kakuna',
]
const [N, M] = input.shift().split(' ').map(Number);
const INFO = input.slice(0,N);
const QUESTIONS = input.slice(N)

const solution = (n, m, info, questions) =>{
  const numAndName = new Map();
  const nameAndNum = new Map();
  for(let i=0;i<n;i++){
    numAndName.set(i+1, info[i]);
    nameAndNum.set(info[i], i+1);
  }

  const answer = [];
  for(const quest of questions){
    answer.push(numAndName.get(Number(quest)) ?? nameAndNum.get(quest))
  }
  return answer.join('\n')
}

console.log(solution(N, M, INFO, QUESTIONS))