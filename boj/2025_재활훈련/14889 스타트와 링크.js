/**
 * 14889 스타트와 링크
 * 축구를 하기위해 모잇나람은 총 N명이고 짝수다.
 * N/2명으로 이루어진 스타트팀과 링크 팀으로 사람들을 나눠야 한다.
 * 
 * 능력치 Sij는 i와 j번 사람이 팀에 속했을 때 팀에 더해지는 능력치다.
 * Sij와 Sji는 다를 수 있다. 
 * i와 j가 속하면 Sij + Sji가 능력치가된다.
 * 
 * 스타트 와 링크 팀의 능력치 차이를 최소로 하려한다.
 * 
 * 첫줄 N ( 4~20)
 * 둘줄부터 S
 * 각 줄은 n개 수로 이루어져있다.
 * 
 * 스타트와 링크팀의 능력치 차이의 최소값구하기.
 */
/**
 * 1. 일단 N개중 절반을 뽑는 조합배열을 구하여 차이를 구해보자.
 * 2. 각 팀Score를 구해서 차이를 갱신.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
  '0 1 2 3 4 5',
  '1 0 2 3 4 5',
  '1 2 0 3 4 5',
  '1 2 3 0 4 5',
  '1 2 3 4 0 5',
  '1 2 3 4 5 0',
]
const N = Number(input[0])
const S = input.slice(1).map(el => el.split(' ').map(Number))

const solution = (n, s) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  const getCombi = (arr, k) => {
    if (k === 1) return arr.map(el => [el]);
    const result = [];
    arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combi = getCombi(rest, k - 1);
      const attach = combi.map(el => [fixed, ...el]);
      result.push(...attach);
    })
    return result;
  }

  const teamCombi = getCombi(arr, n / 2);
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (const startTeam of teamCombi) {
    const linkTeam = arr.filter(el => !startTeam.includes(el)); // startTeam에 속하지 않은 항목 필터링

    let startScore = 0, linkScore = 0;
    // 스타트 팀 능력치 계산
    for (let i = 0; i < startTeam.length; i++) {
      for (let j = i + 1; j < startTeam.length; j++) {
        const iIdx = startTeam[i] - 1;
        const jIdx = startTeam[j] - 1
        startScore += (s[iIdx][jIdx])
        startScore += (s[jIdx][iIdx])
      }
    }

    // 링크 팀 능력치 계산
    for (let i = 0; i < linkTeam.length; i++) {
      for (let j = i + 1; j < linkTeam.length; j++) {
        const iIdx = linkTeam[i] - 1;
        const jIdx = linkTeam[j] - 1;
        linkScore += (s[iIdx][jIdx])
        linkScore += (s[jIdx][iIdx])
      }
    }

    console.log(startScore, linkScore)

    // 최소 차이 갱신
    minDiff = Math.min(minDiff, Math.abs(startScore - linkScore));
  }

  return minDiff
}

console.log(solution(N, S));