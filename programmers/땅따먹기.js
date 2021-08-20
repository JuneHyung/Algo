// function solution(land) {
//   let answer = 0;
//   let bidx = -1;
//   for (let i = 0; i < land.length; i++){
//     let cidx = -1;
//     let Land = Array.from(land);
//     let max = Math.max(...Land[i]);
//     cidx = Land[i].indexOf(max);
//     console.log(`bidx : ${bidx}, cidx:${cidx}`);
//     if (bidx == cidx) {
//       console.log(`bc동일`);
//       Land[i][cidx] = -1;
//       console.log(Land[i]);
//       max = Math.max(...Land[i]);
//       cidx = Land[i].indexOf(max);
//     }
//     console.log()
//     console.log(`bidx : ${bidx}, cidx:${cidx}`);
//     console.log(`max : ${max}`)
//     answer += max;
//     bidx = cidx;
//     console.log(answer);
//   }


//   return answer;
// }
function solution(land) {
  let answer = 0;
  let len = land.length;
  for (let i = 1; i < len; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max( land[i - 1][0], land[i - 1][1], land[i - 1][2] );
  }
  answer = Math.max(...land[len-1]);
  return answer;
}
// let land = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]];
let land = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]];
console.log(solution(land));