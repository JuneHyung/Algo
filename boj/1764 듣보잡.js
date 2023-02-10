/**
 * 1764 듣보잡
 * 듣도 보도 못한사람들을 구하기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 4',
  'ohhenrie',
  'charlie',
  'baesangwook',
  'obama',
  'baesangwook',
  'ohhenrie',
  'clinton',
]
const [N, M] = input.shift().split(' ').map(Number)
const UNHEARD = input.splice(0, N);
const NOTSEEN = input.splice(0, M);

const solution = (unheard, notSeen) => {
  const graph = new Map();
  const answer = [];
  for (const item of unheard) {
    if (graph.has(item)) {
      graph.get(item).push('nh')
    } else {
      graph.set(item, ['nh'])
    }
  }
  for (const item of notSeen) {
    if (graph.has(item)) {
      graph.get(item).push('ns')
    } else {
      graph.set(item, ['ns'])
    }
  }

  // console.log(graph[0]);
  graph.forEach((value, key) => {
    if (value.length === 2) answer.push(key);
  })
  answer.sort();
  answer.unshift(answer.length)
  return answer.join('\n')
}


console.log(solution(UNHEARD, NOTSEEN));