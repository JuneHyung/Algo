// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '1'
const N = Number(input);

const solution = (n) => {
  let depth = 1, block =1;
  while(block<n){
    block += 6*depth;
    depth++;
  }
  return depth;
}

console.log(solution(N))

// 1
// 2 3 4 5 6 7
// 8 9 10 11 12 13 14 15 16 17 18 19
