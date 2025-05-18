/**
 * 20920 영단어 암기는 괴로워
 * 1. 자주 나오는 단어일수록 앞에 배치한다.
 * 2. 해당 단어의 길이가 길수록 앞에 배치한다.
 * 3. 알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다
 * 
 * M보다 짧은 길이의 단어 경우 읽는 것만으로도 외우기 때문에 M이상인 단어들만 외운다고 한다.
 * 효율적으로 암기하기위한 단어장을 만들자.
 */
/**
 * Map으로 나온 횟수 체크해 저장 후 정렬 하여 값리턴.
 */
// const fs = require('fs')

// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7 4',
'apple',
'ant',
'sand',
'apple',
'append',
'sand',
'sand',
]
const [N, M] = input[0].split(' ').map(Number)
const LIST = input.slice(1);

const solution = (n, m, list) => {
  const wordMap = new Map();

  for(const word of list) {
    if(word.length < m) continue;

    const hasWord = wordMap.has(word)
    if(hasWord) {
      const prev = wordMap.get(word);
      wordMap.set(word, prev+1)
    }else{
      wordMap.set(word, 1);
    }
  }

  const wordList = [...wordMap.entries()]
  const sortedList = wordList.sort((a,b)=>{
    const [wordA, cntA] = a;
    const [wordB, cntB] = b;

    const lenA = wordA.length;
    const lenB = wordB.length;
    // 1. 자주 나오는 수 일 수록 앞으로 배치
    if(cntA !==cntB) return cntB-cntA;
    // 2. 단어길이가 길수록 앞으로 배치
    if(lenA !==lenB) return lenB-lenA;
    // 3. 사전순 배치
    return wordA.localeCompare(wordB);
  })
  
  const result = sortedList.map(([word, cnt])=> word).join('\n');
  return result;
}

console.log(solution(N, M,LIST))