/**
 * 1620 나는야 포켓몬 마스터 이다솜
 * 첫 줄에 도감에 수록된 포켓몬의 개수 N이랑 맞춰야 하는 문제의 개수 M
 * N과 M은 1~10만 자연수
 * 
 * 그다음 N개줄에 포켓몬의 번호가 1번인 포켓몬부터 N번까지인 포켓몬이 주어짐.
 * 포켓몬 이름은 모두 영어, 첫글자 대문자, 나머지 소문자인데 일부는 마지막 문자만 대문자일 수 있다.
 * 이름 길이는 2~20
 * 
 * M개 줄에 맞춰야하는 문제가 입력으로 들어온다.
 * 알파벳으로 오면 번호를, 번호가 오면 이름을 출력.
 * 숫자는 1~N이고, 반드시 도감의 이름만 주어진다.
 */
// const fs = require('fs');
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
const [N, M] = input[0].split(' ').map(Number);
const pokeList = input.slice(1, N+1);
const questionList = input.slice(N+1).map(el=>isNaN(Number(el)) ? el : Number(el))

const solution = (n, m, pokeList, questionList) => {
  const answerList = [];
  const pokeIdxNameMap = new Map();
  const pokeNameIdxMap = new Map();

  for(let i=0;i<pokeList.length; i++) {
    const name = pokeList[i];
    pokeIdxNameMap.set(i+1, name);
    pokeNameIdxMap.set(name, i+1);
  }

  // console.log(pokeIdxNameMap)
  // console.log(pokeNameIdxMap)

  for(const question of questionList){
    const target = typeof question ==='number' ? pokeIdxNameMap.get(question) : pokeNameIdxMap.get(question);
    answerList.push(target);
  }

  const result = answerList.join('\n');
  return result;
}

console.log(solution(N, M, pokeList, questionList));