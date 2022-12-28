/* 야근지수 */
const getModWorks = (n, works) => {
  const len = works.length;
  while (n !== 0) {
    const max = works[0];
    for (let i = 0; i < len; i++) {
      if (works[i] >= max) {
        works[i] = works[i] !== 0 ? works[i] - 1 : 0;
        n--;
      }
      if (n === 0) break;
    }
  }
  return works;
}

const getAnswer = (works) => {
  const result = works.reduce((acc, cur) => acc + cur * cur, 0);
  return result;
}

const solution = (n, works) => {
  works.sort((a, b) => b - a);
  const modWorks = getModWorks(n, works);
  const answer = getAnswer(modWorks);
  return answer;
}

const works = [4, 3, 3];
const n = 4;
// const works = [1, 1];
// const n = 3;
console.log(solution(n, works));