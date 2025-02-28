/**
 * 24267 알고리즘 수업 - 알고리즘의 수행 시간 6
 * 
 * 
 * n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력
 * N은 50만까지.
 * 
 * MenOfPassion(A[], n) {
 *     sum <- 0;
 *     for i <- 1 to n - 2
 *         for j <- i + 1 to n - 1
 *             for k <- j + 1 to n
 *                 sum <- sum + A[i] × A[j] × A[k]; # 코드1
 *     return sum;
 * }
 * 첫 줄에 수행 횟수 둘줄에 수행 횟수를 다항식으로 나타냈을 떄 최고차항의 차수를 출력.
 * 다항식으로 나타낼 수 없거나 최고차항 차수가 3 보다 크면 4를 출력.
 * 
 * 1.25e+17
 */


// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '7';
const N = BigInt(input);
let result = ( BigInt(N) * BigInt(N - 1n) * BigInt(N - 2n) ) / BigInt(6n);


console.log(`${result}`);
console.log(3);


// const getCombi = (arr, k) => {
//   if(k===1) return arr.map(el=>[el]);
//   const combiResult = [];
//   arr.forEach((fixed, idx, origin)=>{
//     const rest = origin.slice(idx+1);
//     const combi = getCombi(rest, k-1);
//     const attach = combi.map(el=>[fixed, ...el]);
//     combiResult.push(...attach);
//   })
//   return combiResult;
// }
// const combi = getCombi([1,2,3,4,5,6,7], 3);
// console.log(combi)

// i=1 j=2 k=3, 4, 5, 6, 7
//     j=3 k=4, 5, 6, 7 
//     j=4 k=5, 6, 7
//     j=5 k=6, 7
//     j=6 k=7

// i=2 j=3 k=4, 5, 6, 7
//     j=4 k=5, 6, 7
//     j=5 k=6, 7
//     j=6 k=7

// i=3 j=4 k=5, 6, 7
//     j=5 k=6, 7 
//     j=6 k=7

// i=4 j=5 k=6, 7
//     j=6 k=7

// i=5 j=6 k=7

// 54321
// 4321
// 321
// 21
// 1

// nx(n-1)x(n-2)x...x(n-r+1) / r!
// (7x6x5 / 3x2x1)
// 7*5 = 35