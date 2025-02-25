/**
 * 24266 알고리즘 수업 - 알고리즘의 수행 시간 5
 * 
 * 
 * n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력
 * N은 50만까지.
 * 
 * MenOfPassion(A[], n) {
 *     sum <- 0;
 *     for i <- 1 to n
 *         for j <- 1 to n
 *             for k <- 1 to n
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

console.log(`${N*N*N}`);
console.log(3);
