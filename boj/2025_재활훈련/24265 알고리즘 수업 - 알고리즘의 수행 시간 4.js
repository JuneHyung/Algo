/**
 * 24265 알고리즘 수업 - 알고리즘의 수행 시간 4
 * 
 * 
 * n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력
 * 
 * MenOfPassion(A[], n) {
 *     sum <- 0;
 *     for i <- 1 to n - 1
 *         for j <- i + 1 to n
 *             sum <- sum + A[i] × A[j]; # 코드1
 *     return sum;
 * }
 * 첫 줄에 수행 횟수 둘줄에 수행 횟수를 다항식으로 나타냈을 떄 최고차항의 차수를 출력.
 * 다항식으로 나타낼 수 없거나 최고차항 차수가 3 보다 크면 4를 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '7';
const N = Number(input);
const sum = Array.from({length: N-1},(_, i)=>i+1).reduce((a,c)=>a+c, 0);
console.log(sum);
console.log(2);