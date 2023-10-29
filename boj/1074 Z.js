/**
 * Z
 * 2^N x 2^N배열을 Z모양으로 탐색하려한다.
 * N이 주어졌을 떄, R, C를 몇번째로 방문하는지 출력하는 프로그램 작성.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '2 3 1'
const [N, R, C] = input.split(' ').map(Number);

const solution = (n, r, c) => {
  let result = 0;

  const search = (r, c, rs, re, cs, ce) => {
    const length = re-rs+1;
    if(length===1) return;

    const rhalf = (rs + re) / 2; // 4분면 만들기
    const chalf = (cs + ce) / 2; // 4분면 만들기


    // 반반 나눴을 떄
    if(r < rhalf && c < chalf) { // 0 사분면 (좌 상)
      search(r, c, rs, Math.floor(rhalf), cs, Math.floor(chalf))
    }
    if(r < rhalf && c > chalf) { // 1 사분면 (우 상)
      result += (length/2)**2; // 0사분면 갯수
      search(r, c, rs, Math.floor(rhalf), Math.ceil(chalf), ce);
    }
    if(r > rhalf && c < chalf) { // 2 사분면 (좌 하)
      result += ((length/2)**2) * 2; // 0사분면 + 1사분면
      search(r, c, Math.ceil(rhalf), re, cs, Math.floor(chalf));
    }
    if(r > rhalf && c > chalf) { // 3 사분면 (우 하)
      result += ((length/2)**2) * 3; // 0사분면 + 1사분면 + 2사분면
      search(r, c, Math.ceil(rhalf), re, Math.ceil(chalf), ce);
    }
  }

  // r, c, rs, re, cs, ce
  search(r, c, 0, 2**n-1, 0, 2**n-1)
  
  return result;
}

console.log(solution(N, R, C))

/**
 * 4*4
 * 3 1 0 3 0 3
 * 
 */