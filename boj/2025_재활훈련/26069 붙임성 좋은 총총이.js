/**
 * 26069 붙임성 좋은 총총이
 * 
 * 사람들이 만난 기록이 시간 순서대로 N개 주어진다.
 * 무지개를 추지않은 사람이 추던사람을 만나면 만난 시점 이후로 춤을 춘다.
 * 기록 시작 전 추고있는 사람이 총총이 뿐이면, 마지막 기록 이후 무지개 댄스를 추는 사람은 몇인가
 * 
 * 첫줄 사람들이 만난 기록 수 N 1~1000
 * 둘줄 N개 줄에 걸쳐 만난기록이 주어진다.
 * 총총이는 ChongChong이며, 기록에서 1회이상 주어진다.
 * 동명이인 없고 대소문자 구분한다. (ChongChong과 chongchong은 다른 이름이다)
 */
/**
 * Set객체를 이용해서 둘 중 한명이라도 Set에 값이 있다면 Set에 추가.
 * 이후 Set객체의 크기를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '12',
  'bnb2011 chansol',
  'chansol chogahui05',
  'chogahui05 jthis',
  'jthis ChongChong',
  'jthis jyheo98',
  'jyheo98 lms0806',
  'lms0806 pichulia',
  'pichulia pjshwa',
  'pjshwa r4pidstart',
  'r4pidstart swoon',
  'swoon tony9402',
  'tony9402 bnb2011',
]

const N = Number(input[0])
const LIST = input.slice(1).map(el => el.split(' '));

const solution = (n, list) => {
  const peopleSet = new Set();

  peopleSet.add('ChongChong');

  for (let i = 0; i < n; i++) {
    const [a, b] = list[i];

    const hasA = peopleSet.has(a)
    const hasB = peopleSet.has(b);

    if (hasA || hasB) {
      peopleSet.add(a, true)
      peopleSet.add(b, true)
    }
  }

  const result = peopleSet.size
  return result;
}

console.log(solution(N, LIST))