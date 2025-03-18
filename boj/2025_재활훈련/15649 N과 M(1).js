/**
 * 15649 N과 M (1)
 * N과 M이 주어졌을 때 길이가 M인 수열 구하기.
 * 자연수 1~N까지 자연수 중에서 중복 없이 M개를 고른 수열
 * 각 수열은 공백으로 구분해서 출력
 */

// const fs =require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '4 2';
const [N, M] = input.split(' ').map(Number);


const solution = (n, m) => {
  const arr = Array.from({length: n},(_,i)=>i+1);

  const getPermu = (arr, m) => {
    if(m===1) return arr.map(el=>[el]);
    const result = [];

    arr.forEach((fixed, idx, origin)=>{
      const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
      const permu = getPermu(rest, m-1);
      const attach = permu.map(el=>[fixed, ...el ])
      result.push(...attach);
    })
    
    return result;
  }

  const permu = getPermu(arr, m);
  return permu.map(el=>el.join(' ')).join('\n')
}

console.log(solution(N, M));

/**
 * 0. 4 2
 * 
 * 1. [1, 2, 3, 4], 2
 * 1-0. fixed: 1, idx: 0, origin: [1, 2, 3, 4]
 * 1-1. rest: [2, 3, 4]
 * 1-1-1. [2, 3, 4], 1 → [[2], [3], [4]]
 * 1-2. permu: [[2], [3], [4]]
 * 1-3. attach: [[1, 2], [1, 3], [1, 4]]
 * 
 * 2-0. fixed: 2, idx: 1, origin: [1, 2, 3, 4]
 * 2-1. rest: [1, 3, 4]
 * 2-1-1. [1, 3, 4], 1 → [[1], [3], [4]]
 * 2-2. permu: [[1], [3], [4]]
 * 2-3. attach: [[2, 1], [2, 3], [2, 4]]
 * 
 * 3-0. fixed: 3, idx: 2, origin: [1, 2, 3, 4]
 * 3-1. rest: [1, 2, 4]
 * 3-1-1. [1, 2, 4], 1 → [[1], [2], [4]]
 * 3-2. permu: [[1], [2], [4]]
 * 3-3. attach: [[3, 1], [3, 2], [3, 4]]
 * 
 * 4-0. fixed: 4, idx: 3, origin: [1, 2, 3, 4]
 * 4-1. rest: [1, 2, 3]
 * 4-1-1. [1, 2, 3], 1 → [[1], [2], [3]]
 * 4-2. permu: [[1], [2], [3]]
 * 4-3. attach: [[4, 1], [4, 2], [4, 3]]
 */